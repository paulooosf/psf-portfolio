<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'
import ParticlesBackground from '@/components/sections/ParticlesBackground.vue'
import SocialLinks from '@/components/ui/SocialLinks.vue'
import EncryptedText from '@/components/ui/EncryptedText.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

const { t } = useLocale()
const profilePhoto = '/images/foto-perfil.jpeg'
</script>

<template>
  <section id="hero" class="relative min-h-screen w-full overflow-x-hidden bg-[#090909] flex items-center">
    <div class="absolute inset-0 z-0 bg-[#090909]">
      <ParticlesBackground />
    </div>

    <div class="relative z-10 w-full">
      <ScrollReveal direction="up">
        <div
          class="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-12"
        >
          <div
            class="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between"
          >
            <div class="flex shrink-0 overflow-visible lg:hidden">
              <div class="relative h-52 w-52 sm:h-64 sm:w-64">
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

            <div class="w-full space-y-8 text-center lg:text-left lg:max-w-2xl">
              <p
                class="font-sans text-xl font-semibold leading-tight text-white/90 sm:text-2xl md:text-2xl lg:text-3xl"
              >
                {{ t('hero.welcome') }}
              </p>

              <h1
                class="font-sora text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-8xl lg:whitespace-nowrap"
              >
                <span
                  class="neon-text-below-gradient bg-gradient-to-r from-mauveMagic-400 to-lavenderPurple-500 bg-clip-text text-transparent"
                >
                  <EncryptedText text="Paulo Henrique" />
                </span>
              </h1>

              <p
                class="font-sans text-xl font-semibold leading-tight text-white/90 sm:text-2xl md:text-2xl lg:text-3xl"
              >
                {{ t('hero.role') }}
              </p>

              <p class="font-sans text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
                {{ t('hero.description') }}
              </p>

              <div class="flex flex-col items-center gap-6 pt-4 lg:items-start lg:flex-row lg:gap-8">
                <a 
                  href="/cv.pdf" 
                  download="Paulo_Henrique_CV.pdf"
                  class="group neon-below-lavender relative inline-flex h-10 items-center justify-center rounded-full bg-lavenderPurple-500 px-6 font-semibold text-white transition-all duration-300 ease-out hover:neon-below-mauve w-64 lg:w-auto"
                >
                  <span class="relative z-10 inline-flex items-center justify-center">
                    <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    {{ t('hero.downloadCv') }}
                  </span>
                  <span class="absolute inset-0 overflow-hidden rounded-full" aria-hidden="true">
                    <span
                      class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-mauveMagic-600 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"
                    />
                  </span>
                </a>

                <SocialLinks />
              </div>
            </div>

            <div
              class="hidden min-w-6 max-w-10 flex-1 lg:block lg:min-w-12 lg:max-w-20 xl:max-w-24"
              aria-hidden="true"
            />

            <div class="hidden shrink-0 overflow-visible lg:block">
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
      </ScrollReveal>
    </div>
  </section>
</template>
