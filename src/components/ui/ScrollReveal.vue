<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'

const props = defineProps<{
  direction?: 'up' | 'down' | 'left' | 'right'
  threshold?: number
  rootMargin?: string
  once?: boolean
  delay?: number
}>()

const visible = ref(false)
const el = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

const threshold = props.threshold ?? 0.18
const rootMargin = props.rootMargin ?? '0px'
const once = props.once ?? true
const delay = props.delay ?? 0

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => (visible.value = true), delay)
          } else {
            visible.value = true
          }
          if (once && observer) observer.unobserve(entry.target)
        } else {
          if (!once) visible.value = false
        }
      })
    },
    { threshold, rootMargin },
  )

  if (el.value) observer.observe(el.value)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})

const dir = computed(() => props.direction ?? 'up')
</script>

<template>
  <div
    ref="el"
    :class="[
      'transition-all duration-700 ease-out will-change-transform',
      dir === 'up' ? (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6') : '',
      dir === 'down' ? (visible ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-6') : '',
      dir === 'left' ? (visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6') : '',
      dir === 'right' ? (visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6') : '',
    ]"
  >
    <slot />
  </div>
</template>
