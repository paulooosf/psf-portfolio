<script setup lang="ts">
import { ref } from 'vue'

const logoSrc = '/images/logo.png'
const menuOpen = ref(false)

function handleNav(e: MouseEvent, href: string) {
  e.preventDefault()
  menuOpen.value = false
  const el = document.querySelector(href)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 64
  window.scrollTo({ top, behavior: 'smooth' })
}

const navItems = [
  { label: 'Sobre mim', href: '#hero' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Formação', href: '#education' },
  { label: 'Contato', href: '#contact' },
]
</script>

<template>
  <header class="fixed top-0 z-50 w-full backdrop-blur-md backdrop-saturate-150">
    <nav class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
      <a href="#hero" @click="handleNav($event, '#hero')" class="flex w-24 shrink-0 items-center sm:w-28" aria-label="Ir para o início">
        <img :src="logoSrc" alt="Paulo Henrique" class="h-9 w-auto object-contain sm:h-10" />
      </a>

      <ul class="hidden lg:flex min-w-0 flex-1 justify-center gap-1 lg:gap-6">
        <li v-for="item in navItems" :key="item.href" class="shrink-0">
          <a
            :href="item.href"
            @click="handleNav($event, item.href)"
            class="group relative inline-block px-1 py-2 text-white transition-colors duration-300 sm:px-2"
          >
            <span class="relative z-10 whitespace-nowrap text-xs font-medium transition-colors duration-300 group-hover:text-lavenderPurple-500 sm:text-sm lg:text-base">
              {{ item.label }}
            </span>
            <span class="absolute bottom-1 left-1/2 h-0.5 w-0 origin-center -translate-x-1/2 bg-gradient-to-r from-mauveMagic-400 to-lavenderPurple-500 transition-all duration-300 group-hover:w-4/5" />
          </a>
        </li>
      </ul>

      <div class="hidden lg:block w-24 shrink-0 sm:w-28" aria-hidden="true" />

      <button
        class="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg text-white"
        :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="menuOpen = !menuOpen"
      >
        <span class="block h-0.5 w-6 bg-white transition-all duration-300" :class="menuOpen ? 'translate-y-2 rotate-45' : ''" />
        <span class="block h-0.5 w-6 bg-white transition-all duration-300" :class="menuOpen ? 'opacity-0' : ''" />
        <span class="block h-0.5 w-6 bg-white transition-all duration-300" :class="menuOpen ? '-translate-y-2 -rotate-45' : ''" />
      </button>
    </nav>

  </header>

  <Teleport to="body">
    <div
      class="lg:hidden fixed inset-0 top-16 z-40 bg-[#090909]/70 backdrop-blur-md backdrop-saturate-150 transition-all duration-300 ease-in-out"
      :class="menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
    >
      <ul class="flex flex-col items-center justify-center h-full gap-10 pb-16">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            @click="handleNav($event, item.href)"
            class="text-2xl font-semibold text-white"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </Teleport>
</template>
