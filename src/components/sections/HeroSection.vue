<script setup lang="ts">
import ParticlesBackground from '@/components/sections/ParticlesBackground.vue'
import Button from '@/components/ui/Button.vue'
import SocialLinks from '@/components/ui/SocialLinks.vue'
import EncryptedText from '@/components/ui/EncryptedText.vue'

const profilePhoto = '/images/foto-perfil.jpeg'
</script>

<template>
  <section id="hero" class="relative min-h-screen w-full overflow-x-hidden">
    <div class="absolute inset-0 z-0">
      <ParticlesBackground />
    </div>

    <div class="relative z-10">
      <div
        class="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-12"
      >
        <div
          class="flex w-full flex-col items-center gap-8 md:flex-row md:items-center md:justify-between"
        >
          <div class="w-full space-y-8 text-left md:max-w-xl lg:max-w-2xl">
            <p
              class="font-sans text-2xl font-semibold leading-tight text-white/90 sm:text-3xl md:text-2xl lg:text-3xl"
            >
              Bem-vindo(a)! Me chamo
            </p>

            <h1
              class="font-sora text-6xl font-bold leading-tight text-left sm:text-7xl md:text-6xl lg:text-8xl whitespace-nowrap"
            >
              <span
                class="neon-text-below-gradient bg-gradient-to-r from-mauveMagic-400 to-lavenderPurple-500 bg-clip-text text-transparent"
              >
                <EncryptedText text="Paulo Henrique" />
              </span>
            </h1>

            <p
              class="font-sans text-2xl font-semibold leading-tight text-white/90 sm:text-3xl md:text-2xl lg:text-3xl"
            >
              Desenvolvedor Back-end especializado em Java e Spring Boot.
            </p>

            <p class="font-sans text-base leading-relaxed text-slate-300 sm:text-lg">
              Construo APIs e aplicações com foco em performance, organização e escalabilidade.
              Também possuo experiência com tecnologias front-end para desenvolvimento de soluções
              completas quando necessário.
            </p>

            <div class="flex flex-col gap-6 pt-4 sm:flex-row sm:items-center sm:gap-8">
              <Button>
                <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Baixar CV
              </Button>

              <SocialLinks />
            </div>
          </div>

          <div
            class="hidden min-w-6 max-w-10 flex-1 md:block lg:min-w-12 lg:max-w-20 xl:max-w-24"
            aria-hidden="true"
          />

          <div class="hidden shrink-0 overflow-visible md:block">
            <div class="relative h-96 w-96">
              <div
                class="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-br from-mauveMagic-400/10 to-lavenderPurple-500/8 blur-xl"
                aria-hidden="true"
              />
              <img
                :src="profilePhoto"
                alt="Paulo Henrique"
                class="relative z-10 h-full w-full rounded-full object-cover shadow-[0_0_18px_rgba(167,51,255,0.22),0_0_32px_rgba(157,78,221,0.16)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
