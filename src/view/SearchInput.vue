<template>
  <input
    type="text"
    placeholder="GitHub repositories..."
    v-model="searchQuery"
    @input="handleChange"
    class="border-2 border-gray-300 rounded-lg bg-gray-50 p-2 w-full mt-2 ring-violet-200 ring-offset-2 transition-all hover:ring-2 hover:ring-offset-1 focus:ring-2 text-black focus:ring-offset-1 focus:outline-none focus:border-violet-200 sm:text-sm sm:px-2 xs:text-xs"
  />
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SearchInput',
  emits: ['search'],
  setup(props, { emit }) {
    const searchQuery = ref('');

    const handleChange = () => {
      // Emit the search query to the parent component
      emit('search', searchQuery.value);
    };

    return {
      searchQuery,
      handleChange
    };
  }
};
</script>

