<script setup lang="ts">
import { computed, ref } from 'vue'
import LanguageSelector from '@/components/ui/LanguageSelector.vue'
import { useLocale } from '@/composables/useLocale'

const logoSrc = '/images/logo.png'
const menuOpen = ref(false)
const { t } = useLocale()

const navItems = computed(() => [
  { label: t('nav.about'), href: '#hero' },
  { label: t('nav.experience'), href: '#experience' },
  { label: t('nav.skills'), href: '#skills' },
  { label: t('nav.projects'), href: '#projects' },
  { label: t('nav.education'), href: '#education' },
  { label: t('nav.contact'), href: '#contact' },
])

function handleNav(e: MouseEvent, href: string) {
  e.preventDefault()
  menuOpen.value = false
  const el = document.querySelector(href)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 64
  window.scrollTo({ top, behavior: 'smooth' })
}
</script>

<template>
  <header class="fixed top-0 z-50 w-full backdrop-blur-md backdrop-saturate-150">
    <nav class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
      <a
        href="#hero"
        class="flex w-24 shrink-0 items-center sm:w-28"
        :aria-label="t('nav.home')"
        @click="handleNav($event, '#hero')"
      >
        <img :src="logoSrc" alt="Paulo Henrique" class="h-9 w-auto object-contain sm:h-10" />
      </a>

      <ul class="hidden min-w-0 flex-1 justify-center gap-1 lg:flex lg:gap-6">
        <li v-for="item in navItems" :key="item.href" class="shrink-0">
          <a
            :href="item.href"
            class="group relative inline-block px-1 py-2 text-white transition-colors duration-300 sm:px-2"
            @click="handleNav($event, item.href)"
          >
            <span
              class="relative z-10 whitespace-nowrap text-xs font-medium transition-colors duration-300 group-hover:text-lavenderPurple-500 sm:text-sm lg:text-base"
            >
              {{ item.label }}
            </span>
            <span
              class="absolute bottom-1 left-1/2 h-0.5 w-0 origin-center -translate-x-1/2 bg-gradient-to-r from-mauveMagic-400 to-lavenderPurple-500 transition-all duration-300 group-hover:w-4/5"
            />
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <LanguageSelector />

        <button
          class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg text-white lg:hidden"
          :aria-label="menuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
          @click="menuOpen = !menuOpen"
        >
          <span
            class="block h-0.5 w-6 bg-white transition-all duration-300"
            :class="menuOpen ? 'translate-y-2 rotate-45' : ''"
          />
          <span
            class="block h-0.5 w-6 bg-white transition-all duration-300"
            :class="menuOpen ? 'opacity-0' : ''"
          />
          <span
            class="block h-0.5 w-6 bg-white transition-all duration-300"
            :class="menuOpen ? '-translate-y-2 -rotate-45' : ''"
          />
        </button>
      </div>
    </nav>
  </header>

  <Teleport to="body">
    <div
      class="fixed inset-0 top-16 z-40 bg-[#090909]/70 backdrop-blur-md backdrop-saturate-150 transition-all duration-300 ease-in-out lg:hidden"
      :class="menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'"
    >
      <ul class="flex h-full flex-col items-center justify-center gap-10 pb-16">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="text-2xl font-semibold text-white"
            @click="handleNav($event, item.href)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </Teleport>
</template>
