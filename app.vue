<script setup lang="ts">
import LoadingSpinner from './components/LoadingSpinner.vue';
import CSRating from './components/CSRating.vue';

const region = ref('World');
const season = ref("season1");
const { data, pending, error } = await useFetch(() => `/api/leaderboard?season=${season.value}&region=${region.value}`)

</script>

<template>
  <div class="max-w-xl m-auto bg-neutral-500">
    <h1 class="text-xl text-white py-4"><b><i>LEADERBOARDS</i></b></h1>
    <div class="flex gap-3">
      <select name="season" id="season" v-model="season" class="text-white p-2 bg-transparent border border-neutral-400 rounded-lg">
          <option value="season1">Beta Season</option>
        </select>
      <select name="region" id="region" v-model="region" class="text-white p-2 bg-transparent border border-neutral-400 rounded-lg">
        <option value="World">World</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Australia">Australia</option>
        <option value="Europe">Europe</option>
        <option value="NorthAmerica">North America</option>
        <option value="SouthAmerica">South America</option>
      </select>
    </div>
    <div v-if="pending">
      <LoadingSpinner />
    </div>
    <p v-else-if="error" class="text-red-600">Error</p>
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
