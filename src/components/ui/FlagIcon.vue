<script setup lang="ts">
const flags = {
  br: '/images/bandeira_brasil.svg',
  us: '/images/bandeira_eua.svg',
} as const

defineProps<{
  country: keyof typeof flags
}>()
</script>

<template>
  <img :src="flags[country]" alt="" class="h-full w-full object-cover" aria-hidden="true" />
</template>
