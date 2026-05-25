<script setup lang="ts">
import Header from './components/Header.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <div class="overflow-x-hidden">
    <Header />
    <main class="min-h-screen pt-16 text-white">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
  </div>
</template>
