<script setup lang="ts">
import type { GithubLink } from '@/data/projects'

defineProps<{
  title: string
  category: string
  description: string
  chips: string[]
  image: string
  githubLinks: GithubLink[]
  liveUrl?: string
}>()
</script>

<template>
  <div
    class="project-card h-full flex flex-col overflow-hidden rounded-3xl border border-lavenderPurple-500/40 bg-transparent transition-all duration-300 ease-out"
  >
    <div class="relative shrink-0">
      <img :src="image" :alt="title" class="h-56 w-full object-cover object-top" />
      <span
        class="absolute left-3 top-3 rounded-full border border-[#e0aaff]/40 bg-[#e0aaff]/10 px-3 py-1 font-sans text-xs font-semibold text-[#e0aaff]"
      >
        {{ category }}
      </span>
    </div>

    <div class="flex flex-1 flex-col gap-4 p-6">
      <div class="space-y-2">
        <h3 class="font-sora text-2xl font-bold leading-tight text-white">
          {{ title }}
        </h3>
        <p class="font-sans text-sm font-light leading-relaxed text-white/70">
          {{ description }}
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="chip in chips"
          :key="chip"
          class="chip-tag cursor-default rounded-full border border-lavenderPurple-500/50 bg-lavenderPurple-500/15 px-3 py-1 font-sans text-xs font-semibold text-lavenderPurple-500 transition-all duration-300 ease-out"
        >
          {{ chip }}
        </span>
      </div>

      <div class="mt-auto flex flex-col gap-4">
        <div class="border-t border-lavenderPurple-500/40" />

        <div class="flex flex-wrap items-center gap-3">
          <a
            v-for="link in githubLinks"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group neon-below-lavender relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-lavenderPurple-500 px-5 font-semibold text-white transition-all duration-300 ease-out hover:neon-below-mauve"
            :aria-label="`Ver ${title} no GitHub — ${link.label}`"
          >
            <span class="relative z-10 inline-flex items-center gap-2 text-sm">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
                />
              </svg>
              {{ link.label }}
            </span>
            <span class="absolute inset-0 overflow-hidden rounded-full" aria-hidden="true">
              <span
                class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-mauveMagic-600 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"
              />
            </span>
          </a>

          <a
            v-if="liveUrl"
            :href="liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="group neon-below-lavender relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-violet-600 px-5 font-semibold text-white transition-all duration-300 ease-out hover:neon-below-mauve"
            :aria-label="`Ver deploy de ${title}`"
          >
            <span class="relative z-10 inline-flex items-center gap-2 text-sm">
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Ver
            </span>
            <span class="absolute inset-0 overflow-hidden rounded-full" aria-hidden="true">
              <span
                class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-mauveMagic-600 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card:hover {
  transform: scale(1.02);
  box-shadow:
    0 0 32px 4px rgba(157, 78, 221, 0.22),
    0 0 64px 8px rgba(157, 78, 221, 0.1);
}

.chip-tag:hover {
  box-shadow: 0 0 10px 1px rgba(157, 78, 221, 0.45);
  border-color: rgba(157, 78, 221, 0.7);
}
</style>
