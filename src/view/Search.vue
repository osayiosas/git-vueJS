<template>
  <div>
    <h1>GitHub Repositories</h1>
    <SearchInput @search="handleSearch" />
    <!-- Display search results -->
    <ul>
      <li v-for="result in searchResults" :key="result.id">
        <a :href="result.html_url" target="_blank" rel="noopener noreferrer">
          {{ result.full_name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import fetch from "node-fetch";
import SearchInput from "./SearchInput.vue";

export default {
  name: "Search",
  components: {
    SearchInput,
  },
  setup() {
    const searchResults = ref([]);

    const handleSearch = async (query) => {
      try {
        const response = await fetch(
          `https://api.github.com/users/osayiosas/search/repositories?q=${query}`
        );
        if (response.ok) {
          const data = await response.json();
          searchResults.value = data.items; // Assuming the response contains an array of items
        } else {
          console.error("Failed to fetch search results:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching search results:", error.message);
      }
    };

    return {
      searchResults,
      handleSearch,
    };
  },
};
</script>

<style scoped>
/* Add any component-specific styles here if necessary */
</style>
