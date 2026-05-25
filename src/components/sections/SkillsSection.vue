<script setup lang="ts">
import SkillCard from '@/components/ui/SkillCard.vue'
import { skillCategories, studyingItems } from '@/data/skills'
</script>

<template>
  <section id="skills" class="relative w-full bg-[#0D0D0D] py-20 sm:py-28 md:py-32">
    <div
      class="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-16 px-4 sm:px-6 lg:px-12"
    >
      <div class="flex w-full flex-col items-center gap-4 text-center">
        <h2 class="font-sora text-4xl font-bold sm:text-5xl lg:text-6xl">
          <span
            class="bg-gradient-to-r from-mauveMagic-400 to-lavenderPurple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(199,125,255,0.28)]"
          >
            Habilidades Técnicas
          </span>
        </h2>
        <p class="font-sans text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
          Tecnologias utilizadas em projetos reais.
        </p>
      </div>

      <div class="flex w-full flex-col items-center gap-10">
        <div
          v-for="category in skillCategories"
          :key="category.name"
          class="flex w-full flex-col items-center gap-3"
        >
          <h3
            :class="['font-sora text-sm font-semibold uppercase tracking-widest', category.color]"
          >
            {{ category.name }}
          </h3>

          <div class="flex flex-wrap justify-center gap-4">
            <SkillCard
              v-for="skill in category.skills"
              :key="skill"
              :glow-color="category.spotlightColor"
              :border-color="category.borderColor"
            >
              <span :class="['font-sans text-sm font-semibold', category.color]">
                {{ skill }}
              </span>
            </SkillCard>
          </div>
        </div>
      </div>

      <div class="flex w-full flex-col items-center gap-6">
        <h3 class="font-sora text-2xl font-semibold text-white sm:text-3xl">Estudando agora</h3>

        <div class="flex flex-wrap justify-center gap-4">
          <SkillCard
            v-for="item in studyingItems"
            :key="item.name"
            glow-color="rgba(199, 125, 255, 0.45)"
            border-color="rgba(157, 78, 221, 0.4)"
          >
            <span class="font-sans text-sm font-semibold text-[#e0aaff]">
              {{ item.name }}
            </span>
          </SkillCard>
        </div>
      </div>
    </div>
  </section>
</template>
