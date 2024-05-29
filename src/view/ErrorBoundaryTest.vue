<template>
  <div v-if="hasError" class="h-screen w-full flex items-center justify-center font-urbanist">
    <div class="flex flex-col items-center justify-center gap-2">
      <p class="text-2xl">Something definitely is missing</p>
      <p class="text-xl">Let's take you back</p>
      <a
        href="/"
        class="border-2 border-emerald-100 rounded-lg py-1 px-4 text-white bg-emerald-500 shadow-lg ring-2 ring-emerald-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 sm:text-sm"
      >
        Go Back Home
      </a>
    </div>
  </div>
  <slot v-else></slot>
</template>

<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorBoundary',
  setup(_, { slots }) {
    const hasError = ref(false);
    const error = ref(null);
    const errorInfo = ref(null);

    function handleError(err, vm, info) {
      hasError.value = true;
      error.value = err;
      errorInfo.value = info;
      console.error(err, info);
    }

    return {
      hasError,
      handleError,
      slots,
    };
  },
  errorCaptured(err, vm, info) {
    this.handleError(err, vm, info);
    return false; // Stops the propagation of the error
  },
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
