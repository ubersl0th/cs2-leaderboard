<script setup lang="ts">
defineProps<{ rating: number }>()
</script>

<template>
  <div v-if="rating >= 30000" class="h-full w-full text-center bg-[#674c00] text-[#fff620]"><span class="text-xl">{{
    rating.toString().slice(0, 2)
  }}</span>,<span>{{ rating.toString().slice(2, 5) }}</span></div>
  <div v-else-if="rating >= 25000" class="h-full w-full text-center bg-[#581618] text-[#f86d68]"><span class="text-xl">{{
    rating.toString().slice(0, 2)
  }}</span>,<span>{{ rating.toString().slice(2, 5) }}</span></div>
  <div v-else-if="rating >= 20000" class="h-full w-full text-center bg-[#590f5c] text-[#f54df8]"><span class="text-xl">{{
    rating.toString().slice(0, 2)
  }}</span>,<span>{{ rating.toString().slice(2, 5) }}</span></div>
  <div v-else-if="rating >= 15000" class="h-full w-full text-center bg-[#46285e] text-[#e08bf3]"><span class="text-xl">{{
    rating.toString().slice(0, 2)
  }}</span>,<span>{{ rating.toString().slice(2, 5) }}</span></div>
  <div v-else-if="rating >= 10000" class="h-full w-full text-center bg-[#252757] text-[#949fff]"><span class="text-xl">{{
    rating.toString().slice(0, 2)
  }}</span>,<span>{{ rating.toString().slice(2, 5) }}</span></div>
  <div v-else-if="rating >= 5000" class="h-full w-full text-center bg-[#284555] text-[#baf6ff]"><span class="text-xl">{{
    rating.toString().slice(0, 2)
  }}</span>,<span>{{ rating.toString().slice(2, 5) }}</span></div>
  <div v-else class="h-full w-full text-center bg-[#414850] text-[#e6f3fc]"><span class="text-xl">{{
    rating.toString().slice(0, 2)
  }}</span>,<span>{{ rating.toString().slice(2, 5) }}</span></div>
</template>
