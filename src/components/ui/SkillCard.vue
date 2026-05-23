<script setup lang="ts">
defineProps<{
  glowColor?: string
  borderColor?: string
  textColor?: string
}>()
</script>

<template>
  <div
    :style="{
      '--glow-color': glowColor ?? 'rgba(157, 78, 221, 0.5)',
      '--border-color': borderColor ?? 'rgba(157, 78, 221, 0.4)',
    }"
    class="skill-card group cursor-default rounded-[15px] border px-4 py-2.5 transition-all duration-300 ease-out"
  >
    <slot />
  </div>
</template>

<style scoped>
.skill-card {
  border-color: var(--border-color);
  background: transparent;
}

.skill-card:hover {
  transform: scale(1.06);
  box-shadow: 0 0 14px 2px var(--glow-color);
  border-color: color-mix(in srgb, var(--border-color) 100%, white 20%);
}
</style>
