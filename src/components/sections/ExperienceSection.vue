<script setup lang="ts">
import SpotlightCard from '@/components/ui/SpotlightCard.vue'
import { experienceData, complementaryExperienceData } from '@/data/experience'

const splitBulletsIntoColumns = (bullets: string[], cols = 2): string[][] => {
  const result: string[][] = Array.from({ length: cols }, () => [])
  bullets.forEach((bullet, index) => {
    result[index % cols].push(bullet)
  })
  return result
}
</script>

<template>
  <section id="experience" class="relative w-full bg-[#111111] py-20 sm:py-28 md:py-32">
    <div
      class="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-16 px-4 sm:px-6 lg:px-12"
    >
      <div class="flex w-full flex-col items-center gap-4 text-center">
        <h2 class="font-sora text-5xl font-bold sm:text-6xl lg:text-7xl">
          <span
            class="bg-gradient-to-r from-mauveMagic-400 to-lavenderPurple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(199,125,255,0.28)]"
          >
            Experiência Profissional
          </span>
        </h2>
        <p class="font-sans text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
          Construindo soluções profissionais há dois anos
        </p>
      </div>

      <div class="w-full">
        <template v-for="experience in experienceData" :key="experience.company">
          <SpotlightCard border-color="border-lavenderPurple-500/40">
            <div class="relative z-10">
              <template
                v-for="(role, roleIndex) in experience.roles"
                :key="`${role.company}-${role.role}`"
              >
                <div class="flex gap-6 sm:gap-8">
                  <div class="flex flex-col items-center">
                    <div
                      :class="[
                        'h-3 w-3 shrink-0 rounded-full bg-lavenderPurple-500 shadow-[0_0_8px_3px_rgba(157,78,221,0.55)]',
                        roleIndex === 0 ? 'mt-[47px]' : 'mt-[19px]',
                      ]"
                      aria-hidden="true"
                    />
                    <div
                      v-if="roleIndex < experience.roles.length - 1"
                      class="mt-1 w-px flex-1 bg-gradient-to-b from-lavenderPurple-500/70 to-lavenderPurple-500/20"
                      aria-hidden="true"
                    />
                  </div>

                  <div :class="['flex-1', roleIndex < experience.roles.length - 1 ? 'pb-10' : '']">
                    <p
                      v-if="roleIndex === 0"
                      class="font-sans text-base font-medium text-white drop-shadow-[0_0_10px_rgba(199,125,255,0.35)]"
                    >
                      {{ role.company }}
                    </p>

                    <div :class="roleIndex === 0 ? 'mt-1 space-y-0.5' : 'space-y-0.5'">
                      <h3
                        class="font-sora text-3xl font-bold leading-tight text-lavenderPurple-500 drop-shadow-[0_0_14px_rgba(199,125,255,0.45)]"
                      >
                        {{ role.role }}
                      </h3>
                      <p class="font-sans text-sm font-light text-slate-400">
                        {{ role.period }}
                      </p>
                    </div>

                    <div class="grid grid-cols-1 gap-x-8 pt-5 sm:grid-cols-2">
                      <template
                        v-for="(column, colIndex) in splitBulletsIntoColumns(role.bullets)"
                        :key="`col-${colIndex}`"
                      >
                        <ul class="space-y-3">
                          <li
                            v-for="(bullet, bulletIndex) in column"
                            :key="`bullet-${colIndex}-${bulletIndex}`"
                            class="flex gap-2"
                          >
                            <span
                              class="shrink-0 select-none pt-[3px] text-sm leading-none text-lavenderPurple-500 drop-shadow-[0_0_10px_rgba(199,125,255,0.4)]"
                              aria-hidden="true"
                              >•</span
                            >
                            <span class="font-sans text-sm font-medium leading-relaxed text-white">
                              {{ bullet }}
                            </span>
                          </li>
                        </ul>
                      </template>
                    </div>

                    <div class="mt-5 flex flex-wrap gap-2">
                      <span
                        v-for="chip in role.chips"
                        :key="chip"
                        class="cursor-default rounded-full border border-[#e0aaff]/40 bg-[#e0aaff]/10 px-3 py-1 font-sans text-xs font-semibold text-[#e0aaff] transition-all duration-300 ease-out hover:border-[#e0aaff]/70 hover:bg-[#e0aaff]/20 hover:shadow-[0_0_10px_rgba(224,170,255,0.3)]"
                      >
                        {{ chip }}
                      </span>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </SpotlightCard>
        </template>
      </div>

      <!-- Complementary Experience -->
      <div class="flex w-full flex-col items-center gap-8">
        <h3 class="font-sora text-2xl font-semibold text-white sm:text-3xl">
          Experiência Complementar
        </h3>

        <div class="w-full max-w-4xl">
          <template v-for="item in complementaryExperienceData" :key="item.company">
            <SpotlightCard border-color="border-lavenderPurple-500/40">
              <div class="relative z-10">
                <!-- Company -->
                <p
                  class="font-sans text-base font-medium text-white drop-shadow-[0_0_10px_rgba(199,125,255,0.35)]"
                >
                  {{ item.company }}
                </p>
                <p class="mt-1 font-sans text-sm font-normal leading-relaxed text-slate-400">
                  {{ item.companyDescription }}
                </p>

                <!-- Role -->
                <div class="mt-3 space-y-0.5">
                  <h4
                    class="font-sora text-2xl font-bold leading-tight text-lavenderPurple-500 drop-shadow-[0_0_14px_rgba(199,125,255,0.45)]"
                  >
                    {{ item.role }}
                  </h4>
                  <p class="font-sans text-sm font-light text-slate-400">
                    {{ item.period }}
                  </p>
                </div>

                <!-- Bullets in Two Columns -->
                <div class="grid grid-cols-1 gap-x-8 pt-5 sm:grid-cols-2">
                  <template
                    v-for="(column, colIndex) in splitBulletsIntoColumns(item.bullets)"
                    :key="`comp-col-${colIndex}`"
                  >
                    <ul class="space-y-3">
                      <li
                        v-for="(bullet, bulletIndex) in column"
                        :key="`comp-bullet-${colIndex}-${bulletIndex}`"
                        class="flex gap-2"
                      >
                        <span
                          class="shrink-0 select-none pt-[3px] text-sm leading-none text-lavenderPurple-500 drop-shadow-[0_0_10px_rgba(199,125,255,0.4)]"
                          aria-hidden="true"
                          >•</span
                        >
                        <span class="font-sans text-sm font-medium leading-relaxed text-white">
                          {{ bullet }}
                        </span>
                      </li>
                    </ul>
                  </template>
                </div>

                <!-- Chips -->
                <div class="mt-5 flex flex-wrap gap-2">
                  <span
                    v-for="chip in item.chips"
                    :key="chip"
                    class="cursor-default rounded-full border border-[#e0aaff]/40 bg-[#e0aaff]/10 px-3 py-1 font-sans text-xs font-semibold text-[#e0aaff] transition-all duration-300 ease-out hover:border-[#e0aaff]/70 hover:bg-[#e0aaff]/20 hover:shadow-[0_0_10px_rgba(224,170,255,0.3)]"
                  >
                    {{ chip }}
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
