<script setup lang="ts">
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projectsData } from '@/data/projects'
</script>

<template>
  <section id="projects" class="relative w-full bg-[#111111] py-20 sm:py-28 md:py-32">
    <div
      class="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-16 px-4 sm:px-6 lg:px-12"
    >
      <div class="flex w-full flex-col items-center gap-4 text-center">
        <h2 class="font-sora text-4xl font-bold sm:text-5xl lg:text-6xl">
          <span
            class="bg-gradient-to-r from-mauveMagic-400 to-lavenderPurple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(199,125,255,0.28)]"
          >
            Projetos
          </span>
        </h2>
        <p class="font-sans text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
          Projetos que transformam estudo em arquitetura real.
        </p>
      </div>

      <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
        <ProjectCard
          v-for="project in projectsData"
          :key="project.title"
          :title="project.title"
          :category="project.category"
          :description="project.description"
          :chips="project.chips"
          :image="project.image"
          :github-links="project.githubLinks"
          :live-url="project.liveUrl"
        />
      </div>
    </div>
  </section>
</template>
