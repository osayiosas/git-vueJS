<template>
  <div>
    <Head>
      <title>Repo-List</title>
      <meta name="description" content="List of repositories on my github account" />
      <link rel="canonical" href="/repo-list" />
    </Head>
    <div class="h-screen w-full flex justify-center items-center bg-gray-150">
      <div class="relative h-[95%] w-[80%] p-6 rounded-lg shadow-lg bg-gray-50 md:w-[90%] sm:w-[95%] sm:p-2 xs:h-[95%] ">
        <div class="h-full">
          <div class="flex justify-between items-center mx-auto font-urbanist">
            <h1 class="text-3xl cursor-pointer transition-all hover:decoration-red-400 sm:text-2xl">
              My Repositories
            </h1>
            <router-link
              to="/"
              class="border-2 border-emerald-100 rounded-lg py-1 px-4 text-black bg-pink-50 shadow-lg ring-2 ring-violet-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 sm:text-sm sm:px-2 xs:text-xs"
            >
              Back to Profile
            </router-link>
          </div>
          <div class="mt-[3rem] p-2 font-worksans h-[80%] flex flex-col gap-3 overflow-y-scroll">
            <Search />
            <div class="flex justify-between w-full mb-4">
              <button
                @click="prevPage"
                :disabled="page === 1"
                class="border-2 border-emerald-100 rounded-lg py-1 px-4 text-black g-pink-50 shadow-lg ring-2 ring-violet-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:ring-0 disabled:bg-red-300 disabled:text-black-400"
              >
                PREV
              </button>
              <button
                @click="nextPage"
                :disabled="!repos || !repos.length"
                class="border-2 border-emerald-100 rounded-lg py-1 px-4 text-black g-pink-50 shadow-lg ring-2 ring-violet-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:ring-0 disabled:bg-red-300 disabled:text-black-400"
              >
                NEXT
              </button>
            </div>
            <template v-if="status === 'loading'">
              <p>Loading...</p>
            </template>
            <template v-else-if="status === 'error'">
              <p>Error Loading</p>
            </template>
            <template v-else-if="status === 'success'">
              <div v-for="repo in repos" :key="repo.id">
                <router-link
                  :to="`${repo.name}`"
                  class="flex justify-between w-full border-2 rounded-lg p-4 shadow-md cursor-pointer ring-violet-200 ring-offset-2 transition-all hover:ring-2 hover:text-black-100 hover:bg-orange-50 sm:p-3"
                >
                  <p>{{ repo.name }}</p>
                  <p>{{ repo.language }}</p>
                </router-link>
              </div>
            </template>
          </div>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useQuery } from 'vue-query';
import axios from 'axios';
import { Head } from '@vueuse/head';
import Search from './SearchInput.vue';

const fetchRepos = async (page) => {
  const { data } = await axios.get(`https://api.github.com/users/osayiosas/repos?page=${page}&per_page=6`);
  return data;
};

export default {
  name: 'RepoList',
  components: {
    Search,
  },
  setup() {
    const page = ref(1);
    const { data: repos, status } = useQuery(['repos', page], () => fetchRepos(page.value), { keepPreviousData: true });

    const prevPage = () => {
      if (page.value > 1) page.value -= 1;
    };

    const nextPage = () => {
      if (repos.value && repos.value.length) page.value += 1;
    };

    return { repos, status, page, prevPage, nextPage };
  },
};
</script>
