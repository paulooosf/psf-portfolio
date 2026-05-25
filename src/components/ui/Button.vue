<template>
  <button
    :class="[
      'group neon-below-lavender relative inline-flex h-12 w-full items-center justify-center rounded-full bg-lavenderPurple-500 px-6 font-semibold text-white transition-all duration-300 ease-out hover:neon-below-mauve',
      {
        'cursor-not-allowed opacity-50': disabled,
      },
    ]"
    :disabled="disabled"
  >
    <span class="relative z-10 inline-flex items-center justify-center">
      <slot />
    </span>
    <span
      v-if="!disabled"
      class="absolute inset-0 overflow-hidden rounded-full"
      aria-hidden="true"
    >
      <span
        class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-mauveMagic-600 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"
      />
    </span>
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  disabled?: boolean
}

withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
})
</script>
