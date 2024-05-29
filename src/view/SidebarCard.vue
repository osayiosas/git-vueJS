<template>
  <section class="w-[80%] h-[95%] flex flex-col gap-11 p-6 bg-gray-100 shadow-lg md:w-[90%] sm:w-[95%] sm:p-3 xs:h-full">
    <header class="flex justify-between items-center w-full mx-auto font-urbanist">
      <h1 class="text-3xl font-bold text-center cursor-pointer transition-all hover:decoration-emerald-400 sm:text-xl hover:text-blue-300">
        My GitHub Profile
      </h1>
    
    </header>

    <div class="font-worksans flex flex-col items-center gap-2">
      <router-link to="/error-boundary-test" class="border-2 border-red-100 rounded-lg py-1 px-2 text-white bg-red-200 shadow-lg ring-2 ring-red-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 sm:text-sm sm:px-2 xs:text-xs">
        ErrorBoundary
      </router-link>
      <div class="h-[12rem] w-[12rem] rounded-xl shadow-xl bg-slate-100 overflow-hidden border-2 border-gray-200 ring-offset-2 ring-violet-200 transition-all hover:ring-2">
        <img :src="status === 'success' ? data.avatar_url : avatar" alt="profileimg" class="w-full h-full" />
      </div>
      <h2 class="font-normal text-2xl text-center">{{ status === 'success' ? data.name : 'Loading...' }}</h2>
      <p class="text-center text-[0.9rem] px-2">{{ status === 'success' ? data.bio : 'Loading...' }}</p>
      <div class="flex flex-col items-center justify-start gap-2 mt-2">
        <font-awesome-icon :icon="['fas', 'shadow']" size="2x" color="#E29494" />
        <p class="flex items-center">
          <span class="flex flex-col items-center">
            <span class="text-3xl">{{ status === 'success' ? data.followers : 'Loading...' }}</span>
            <span class="px-1">followers</span>
          </span>
          <span class="flex flex-col items-center">
            <span class="text-3xl">{{ status === 'success' ? data.following : 'Loading...' }}</span>
            <span class="px-1">following</span>
          </span>
        </p>
      </div>

      <div class="flex flex-col items-center mt-2">
        <font-awesome-icon :icon="['fas', 'list']" size="2x" color="#E29494" />
        <span class="text-4xl">{{ status === 'success' ? data.public_repos : 'Loading...' }}</span>
        <p class="">Repo</p>
      </div>

      <div class="flex gap-3 justify-center xs:flex-wrap">
        <p class="flex items-center gap-1">
          <font-awesome-icon :icon="['fas', 'globe-africa']" />
          {{ status === 'success' ? data.location : 'Loading...' }}
        </p>
        <p class="flex items-center gap-1">
          <font-awesome-icon :icon="['fas', 'link']" />
          <span v-if="status === 'success'">
            <a :href="data.blog" target="_blank" rel="noopener noreferrer">{{ data.blog }}</a>
          </span>
          <span v-else>Loading...</span>
        </p>
        <p class="flex items-center gap-1">
          <font-awesome-icon :icon="['fas', 'twitter']" />
          <span v-if="status === 'success'">
            <a :href="`https://twitter.com/${data.twitter_username}`" target="_blank" rel="noopener noreferrer">
              {{ data.twitter_username }}
            </a>
          </span>
          <span v-else>Loading...</span>
        </p>
      </div>
    </div>

    <footer class="text-center">
      @
      <a href="https://github.com/osayiosas" target="_blank" class="transition-all hover:decoration-red-800">
        Idisghe Osaigbovo
      </a>
        Vue 2024
    </footer>
  </section>
</template>

<script>
import { useQuery } from 'vue-query';
import avatar from '../assets/avatar.jpg';

const fetchProfile = async () => {
  const res = await fetch("https://api.github.com/users/osayiosas");
  return res.json();
};

export default {
  name: 'SidebarCard',
  setup() {
    const { data, status } = useQuery('profile', fetchProfile);

    return {
      data,
      status,
      avatar
    };
  }
};
</script>