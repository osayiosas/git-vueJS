<!-- <template>
  <div>
    <div class="h-screen w-full flex items-center justify-center font-urbanist">
      <div class="flex flex-col items-center justify-center gap-2">
        <p class="text-2xl">Something definitely is missing</p>
        <p class="text-xl">Let's take you back</p>
        <router-link
          to="/"
          class="border-2 border-emerald-100 rounded-lg py-1 px-4 text-white bg-emerald-500 shadow-lg ring-2 ring-emerald-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 sm:text-sm"
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

<style scoped>
/* Add any component-specific styles here if necessary */
</style>
 -->



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
export default {
  name: "ErrorBoundary",
  data() {
    return {
      hasError: false,
      error: null,
      errorInfo: null
    };
  },
  errorCaptured(error, vm, info) {
    this.hasError = true;
    this.error = error;
    this.errorInfo = info;
    console.log(error, info);
    // Return false to stop the propagation of the error and allow other handlers to capture it
    return false;
  }
};
</script>

<style scoped>
/* Add any component-specific styles here if necessary */
</style>
