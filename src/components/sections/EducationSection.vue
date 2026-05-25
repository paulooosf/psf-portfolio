<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { academicEducation, complementaryEducation } from '@/data/education'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

const allItems = [
  { label: 'Formação Acadêmica', ...academicEducation[0] },
  { label: 'Formação Complementar', ...complementaryEducation[0] },
]

const gridRef = ref<HTMLElement | null>(null)

function equalizeEducationHeights() {
  nextTick(() => {
    if (!gridRef.value) return
    const cards = Array.from(gridRef.value.querySelectorAll<HTMLElement>('.education-card'))
    if (!cards.length) return

    cards.forEach((c) => (c.style.minHeight = ''))
    const heights = cards.map((c) => c.getBoundingClientRect().height)
    const max = Math.max(...heights)
    cards.forEach((c) => (c.style.minHeight = `${max}px`))
  })
}

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  equalizeEducationHeights()
  globalThis.addEventListener('load', equalizeEducationHeights)
  globalThis.addEventListener('resize', equalizeEducationHeights)

  if (gridRef.value && 'ResizeObserver' in globalThis) {
    resizeObserver = new ResizeObserver(() => equalizeEducationHeights())
    Array.from(gridRef.value.querySelectorAll('.education-card')).forEach((el) =>
      resizeObserver?.observe(el),
    )
  }
})

onBeforeUnmount(() => {
  globalThis.removeEventListener('load', equalizeEducationHeights)
  globalThis.removeEventListener('resize', equalizeEducationHeights)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>

<template>
  <section id="education" class="relative w-full bg-[#090909] py-20 sm:py-28 md:py-32">
    <div
      class="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-16 px-4 sm:px-6 lg:px-12"
    >
      <ScrollReveal direction="right">
        <div class="flex w-full flex-col items-center gap-4 text-center">
          <h2 class="font-sora text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span
              class="bg-gradient-to-r from-mauveMagic-400 to-lavenderPurple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(199,125,255,0.28)]"
            >
              Formação & Desenvolvimento
            </span>
          </h2>
          <p class="font-sans text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
            Aprendizado contínuo em arquitetura, back-end e aplicações modernas.
          </p>
        </div>
      </ScrollReveal>

      <div ref="gridRef" class="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
        <ScrollReveal
          v-for="(item, idx) in allItems"
          :key="item.course"
          :delay="idx * 120"
          direction="up"
        >
          <div class="flex flex-col gap-2">
            <h3 class="font-sora text-base font-semibold text-white">
              {{ item.label }}
            </h3>

            <div
              class="group relative flex-1 cursor-default transition-transform duration-500 hover:scale-[1.02]"
            >
              <div
                class="absolute inset-0 -translate-x-[6px] rounded-3xl bg-lavenderPurple-500/70 transition-all duration-500 group-hover:opacity-0"
                aria-hidden="true"
              />

              <div
                class="relative education-card flex h-full flex-col justify-center gap-1.5 rounded-3xl border border-lavenderPurple-500/40 bg-[#090909] px-7 py-6 transition-all duration-500 group-hover:-translate-x-[6px] group-hover:border-lavenderPurple-500/80 group-hover:shadow-[0_0_24px_4px_rgba(157,78,221,0.3)]"
              >
                <p class="font-sans text-sm font-medium text-white/70">
                  {{ item.institution }}
                </p>
                <h4
                  class="font-sora text-lg font-bold leading-tight text-lavenderPurple-500 drop-shadow-[0_0_14px_rgba(199,125,255,0.45)]"
                >
                  {{ item.course }}
                </h4>
                <div class="flex items-center gap-2">
                  <p class="font-sans text-sm font-light text-slate-400">
                    {{ item.period }}
                  </p>
                  <span v-if="item.completed" class="font-sans text-xs font-normal text-[#c77dff]">
                    • Concluído
                  </span>
                </div>
                <p
                  v-if="item.subtitle"
                  class="mt-2 font-sans text-sm font-normal leading-relaxed text-slate-300"
                >
                  {{ item.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
