<!-- src/App.vue -->
<template>
  <div id="app">
    <header class="p-6 bg-gray-100 shadow-md">
      <nav>
        <ul class="flex justify-end text-lg">
          <li class="hover:text-blue-300 cursor-pointer px-4">
            <router-link to="/">Home</router-link>
          </li>
          <li class="hover:text-blue-300 cursor-pointer px-4">
            <router-link to="/repo-list">Repo List</router-link>
          </li>
          <li class="hover:text-blue-300 cursor-pointer px-4">
            <router-link to="/error-boundary-test">Error Boundary Test</router-link>
          </li>

        </ul>
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/repo-list">Repo List</router-link>
      <router-link to="/error-boundary-test">Error Boundary Test</router-link> -->
    </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

export default defineComponent({
  name: 'App',
  setup() {
    useHead({
      titleTemplate: (title) => (title ? `${title} - My Vue App` : 'My Vue App')
    });
  }
});
</script>
