<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    revealDelayMs?: number
    flipDelayMs?: number
    startDelayMs?: number
  }>(),
  {
    revealDelayMs: 120,
    flipDelayMs: 80,
    startDelayMs: 300,
  },
)

const containerRef = ref<HTMLElement | null>(null)
const charset =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?'
const displayedText = ref(props.text)
const revealedIndices = ref(new Set<number>())
let flipInterval: NodeJS.Timeout | null = null
let revealInterval: NodeJS.Timeout | null = null

const getRandomChar = () => charset[Math.floor(Math.random() * charset.length)]

const generateRandomText = () => {
  return props.text
    .split('')
    .map(() => getRandomChar())
    .join('')
}

const updateDisplay = () => {
  const chars = props.text.split('')
  displayedText.value = chars
    .map((char, i) => (revealedIndices.value.has(i) ? char : getRandomChar()))
    .join('')
}

const startEncryption = () => {
  if (flipInterval) clearInterval(flipInterval)
  if (revealInterval) clearInterval(revealInterval)
  revealedIndices.value.clear()

  displayedText.value = generateRandomText()

  setTimeout(() => {
    let revealedCount = 0
    const totalChars = props.text.length

    revealInterval = setInterval(() => {
      if (revealedCount < totalChars) {
        revealedIndices.value.add(revealedCount)
        updateDisplay()
        revealedCount++
      } else {
        if (revealInterval) clearInterval(revealInterval)
        if (flipInterval) clearInterval(flipInterval)
      }
    }, props.revealDelayMs)

    flipInterval = setInterval(() => {
      updateDisplay()
    }, props.flipDelayMs)
  }, props.startDelayMs)
}

onMounted(() => {
  startEncryption()
})

onUnmounted(() => {
  if (flipInterval) clearInterval(flipInterval)
  if (revealInterval) clearInterval(revealInterval)
})
</script>

<template>
  <span ref="containerRef" class="inline-block font-inherit tracking-wide">
    <span
      v-for="(char, i) in displayedText"
      :key="i"
      :class="revealedIndices.has(i) ? 'text-lavenderPurple-500' : 'text-slate-600'"
    >
      {{ char }}
    </span>
  </span>
</template>
