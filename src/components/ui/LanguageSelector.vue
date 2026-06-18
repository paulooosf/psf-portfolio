<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import FlagIcon from '@/components/ui/FlagIcon.vue'
import { useLocale, type Locale } from '@/composables/useLocale'

const { locale, t, setLocale } = useLocale()

const open = ref(false)
const rootRef = ref<HTMLElement | null>(null)

const currentFlag = computed(() => (locale.value === 'pt' ? 'br' : 'us'))

const otherOption = computed(() =>
  locale.value === 'pt'
    ? { code: 'en' as Locale, label: 'ENGLISH', flag: 'us' as const }
    : { code: 'pt' as Locale, label: 'PORTUGUÊS', flag: 'br' as const },
)

function toggle() {
  open.value = !open.value
}

function select(code: Locale) {
  setLocale(code)
  open.value = false
}

function onClickOutside(event: MouseEvent) {
  if (!rootRef.value?.contains(event.target as Node)) open.value = false
}

function onEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onEscape)
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onEscape)
})
</script>

<template>
  <div ref="rootRef" class="relative shrink-0">
    <button
      type="button"
      class="group relative inline-flex items-center gap-2 rounded-lg px-2 py-2 text-white transition-colors duration-300"
      :aria-label="t('language.select')"
      :aria-expanded="open"
      aria-haspopup="listbox"
      @click.stop="toggle"
    >
      <span class="relative z-10 h-5 w-7 overflow-hidden rounded-sm shadow-sm">
        <FlagIcon :country="currentFlag" />
      </span>

      <svg
        class="relative z-10 h-4 w-4 transition-all duration-300 group-hover:text-lavenderPurple-500"
        :class="open ? 'rotate-180 text-lavenderPurple-500' : 'text-white'"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>

      <span
        class="absolute bottom-0 left-1/2 h-0.5 w-0 origin-center -translate-x-1/2 bg-gradient-to-r from-mauveMagic-400 to-lavenderPurple-500 transition-all duration-300 group-hover:w-4/5"
        aria-hidden="true"
      />
    </button>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div
        v-if="open"
        class="absolute right-0 top-full z-50 mt-2 min-w-[180px] overflow-hidden rounded-xl border border-lavenderPurple-500/30 bg-[#111111]/95 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur-md"
        role="listbox"
        @click.stop
      >
        <button
          type="button"
          role="option"
          class="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium text-white transition-colors duration-300 hover:bg-lavenderPurple-500/10 hover:text-lavenderPurple-500"
          @click="select(otherOption.code)"
        >
          <span class="h-4 w-6 overflow-hidden rounded-sm">
            <FlagIcon :country="otherOption.flag" />
          </span>
          <span class="tracking-wide">{{ otherOption.label }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>
