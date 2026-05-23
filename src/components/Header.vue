<script setup lang="ts">
const logoSrc = '/images/logo.png'

const navItems = [
  { label: 'Sobre mim', href: '#about' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Formação', href: '#education' },
  { label: 'Contato', href: '#contact' },
]
</script>

<template>
  <header
    class="fixed top-0 z-50 w-full bg-[#111111]/65 backdrop-blur-md backdrop-saturate-150"
  >
    <nav class="mx-auto flex h-16 max-w-7xl items-center px-6 sm:px-8 lg:px-12">
      <a
        href="#hero"
        class="flex w-24 shrink-0 items-center sm:w-28"
        aria-label="Ir para o início"
      >
        <img
          :src="logoSrc"
          alt="Paulo Henrique"
          class="h-9 w-auto object-contain sm:h-10"
        />
      </a>

      <ul class="flex min-w-0 flex-1 justify-center gap-1 overflow-x-auto sm:gap-4 lg:gap-6">
        <li v-for="item in navItems" :key="item.href" class="shrink-0">
          <a
            :href="item.href"
            class="group relative inline-block px-1 py-2 text-white transition-colors duration-300 sm:px-2"
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

      <div class="w-24 shrink-0 sm:w-28" aria-hidden="true" />
    </nav>
  </header>
</template>
