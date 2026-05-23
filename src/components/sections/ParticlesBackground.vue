<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <Particles
      :particle-count="200"
      :particle-spread="10"
      :speed="0.1"
      :particle-colors="['#e0aaff']"
      :move-particles-on-hover="true"
      :particle-hover-factor="1.5"
      :alpha-particles="false"
      :particle-base-size="100"
      :size-randomness="1"
      :camera-distance="20"
      :disable-rotation="false"
      class="h-full w-full"
    />
  </div>
</template>

<script setup lang="ts">
import Particles from '@/components/ui/Particles.vue'
</script>
