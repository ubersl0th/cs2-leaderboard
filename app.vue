<script setup lang="ts">
import LoadingSpinner from './components/LoadingSpinner.vue';
import CSRating from './components/CSRating.vue';

const { data, pending, error } = await useFetch(() => `/api/leaderboard`)
</script>

<template>
  <div class="max-w-xl m-auto bg-neutral-500">
    <h1 class="text-xl text-white py-4"><b><i>LEADERBOARDS</i></b></h1>
    <span v-if="pending">
      <LoadingSpinner />
    </span>
    <span v-else-if="error" class="text-red-600">Error</span>
    <!-- We can assume by this point that `isSuccess === true` -->
    <table class="text-gray-300 w-full" v-else>
      <thead>
        <tr>
          <th>Rank</th>
          <th>CS Rating</th>
          <th>Player</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in data?.leaderboard.result.entries" :key="entry.rank" class="odd:bg-neutral-700">
          <td class="text-right pr-6">{{ entry.rank }}</td>
          <td>
            <!-- bitshift score by 15 to get proper rating -->
            <CSRating :rating="entry.score >> 15" />
          </td>
          <td class="pl-6">{{ entry.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
