
<template>
  <div>
    <div class="h-screen w-full flex items-center justify-center font-urbanist bg-red-100">
      <div class="flex flex-col items-center justify-center gap-2">
        <p class="text-2xl">Something definitely is missing</p>
        <p class="text-xl">Let's take you back</p>
        <router-link
          to="/"
          class="border-2 border-emerald-100 rounded-lg py-1 px-4 text-white bg-red-500 shadow-lg ring-2 ring-gray-200 ring-offset-2 transition-all hover:text-black hover:bg-green-200 hover:shadow-sm hover:ring-offset-1 sm:text-sm"
        >
          Go Back Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorBoundaryTest"
};
</script>