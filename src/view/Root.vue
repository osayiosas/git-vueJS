<!-- src/views/Root.vue -->
<template>
  <div>
      <title>GIT API | Home</title>
      <meta
        name="description"
        content="This is the homepage that contains author's Github information like name, bio, location, followers, following, public repos, public gists, and more."
      />
      <link rel="canonical" href="/" />
    <main class="w-full h-screen flex justify-center items-center bg-gray-150">
      <SidebarCard />
    </main>
  </div>
</template>

<script>
import SidebarCard from './SidebarCard.vue';

export default {
  name: 'Root',
  components: {
    SidebarCard
  }
};
</script>
