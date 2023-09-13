<script setup lang="ts">
defineProps<{ rating: number }>()
</script>

<template>
  <div v-if="rating >= 30000" class="relative h-full w-full my-1 text-[gold]">
    <img class="w-24" src="/images/cs-rating-7.svg" :alt="rating.toString()">
    <div class="absolute top-1 left-6">
      <span class="text-2xl">{{ rating.toString().slice(0, 2) }},</span>
      <span class="text-md">{{ rating.toString().slice(2, 5) }}</span>
    </div>
  </div>
  <div v-else-if="rating >= 25000" class="relative h-full w-full my-1 text-[#EB4B4B]">
    <img class="w-24" src="/images/cs-rating-6.svg" :alt="rating.toString()">
    <div class="absolute top-1 left-6">
      <span class="text-2xl">{{ rating.toString().slice(0, 2) }},</span>
      <span class="text-md">{{ rating.toString().slice(2, 5) }}</span>
    </div>
  </div>
  <div v-else-if="rating >= 20000" class="relative h-full w-full my-1 text-[#F03CFF]">
    <img class="w-24" src="/images/cs-rating-5.svg" :alt="rating.toString()">
    <div class="absolute top-1 left-6">
      <span class="text-2xl">{{ rating.toString().slice(0, 2) }},</span>
      <span class="text-md">{{ rating.toString().slice(2, 5) }}</span>
    </div>
  </div>
  <div v-else-if="rating >= 15000" class="relative h-full w-full my-1 text-[#C166FF]">
    <img class="w-24" src="/images/cs-rating-4.svg" :alt="rating.toString()">
    <div class="absolute top-1 left-6">
      <span class="text-2xl">{{ rating.toString().slice(0, 2) }},</span>
      <span class="text-md">{{ rating.toString().slice(2, 5) }}</span>
    </div>
  </div>
  <div v-else-if="rating >= 10000" class="relative h-full w-full my-1 text-[#6A7DFF]">
    <img class="w-24" src="/images/cs-rating-3.svg" :alt="rating.toString()">
    <div class="absolute top-1 left-6">
      <span class="text-2xl">{{ rating.toString().slice(0, 2) }},</span>
      <span class="text-md">{{ rating.toString().slice(2, 5) }}</span>
    </div>
  </div>
  <div v-else-if="rating >= 5000" class="relative h-full w-full my-1 text-[#8CC6FF]">
    <img class="w-24" src="/images/cs-rating-2.svg" :alt="rating.toString()">
    <div class="absolute top-1 left-8">
      <span class="text-2xl">{{ rating.toString().slice(0, 1) }},</span>
      <span class="text-md">{{ rating.toString().slice(1, 4) }}</span>
    </div>
  </div>
  <div v-else class="relative h-full w-full my-1 text-[#B0C3D9]">
    <img class="w-24" src="/images/cs-rating-1.svg" :alt="rating.toString()">
    <div class="absolute top-1 left-8">
      <span class="text-2xl">{{ rating.toString().slice(0, 1) }},</span>
      <span class="text-md">{{ rating.toString().slice(1, 4) }}</span>
    </div>
  </div>
</template>
