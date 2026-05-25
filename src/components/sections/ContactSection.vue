<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

const name = ref('')
const email = ref('')
const message = ref('')
const emailError = ref('')

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function handleSubmit(event: Event) {
  event.preventDefault()
  emailError.value = ''

  if (!emailPattern.test(email.value)) {
    emailError.value = 'Digite um e-mail válido.'
    return
  }

  const subject = encodeURIComponent('Contato via portfólio')
  const body = encodeURIComponent(
    `Nome: ${name.value}\nEmail: ${email.value}\nMensagem:\n${message.value}`,
  )

  globalThis.location.href = `mailto:paulooosf@gmail.com?subject=${subject}&body=${body}`
}
</script>

<template>
  <section id="contact" class="bg-[#111111] py-20 sm:py-28 md:py-32">
    <div class="mx-auto w-full max-w-[1200px] px-5 sm:px-7 lg:px-14">
      <ScrollReveal direction="up">
        <div class="flex w-full flex-col items-center gap-4 text-center mb-16">
          <h2 class="font-sora text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span
              class="bg-gradient-to-r from-mauveMagic-400 to-lavenderPurple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(199,125,255,0.28)]"
            >
              Contato
            </span>
          </h2>
          <p class="font-sans text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
            Disponível para colaborações e projetos.
          </p>
        </div>

        <div class="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-x-12">
          <div class="flex flex-col gap-6 sm:px-4">
            <div class="space-y-4">
              <h3 class="font-sora text-3xl font-bold text-white sm:text-4xl">Vamos conversar?</h3>
              <p class="max-w-xl font-sans text-base leading-relaxed text-slate-300 sm:text-lg">
                Aberto para projetos freelance e conexões na área de tecnologia. Caso tenha um
                projeto em mente ou queira trocar uma ideia, entre em contato!
              </p>
            </div>

            <div class="flex flex-col gap-5">
              <a
                href="mailto:paulooosf@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-3 text-white transition-colors duration-300 hover:text-mauveMagic-600"
              >
                <span
                  class="group neon-below-lavender relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-lavenderPurple-500 text-white transition-all duration-300 ease-out hover:neon-below-mauve"
                >
                  <span class="relative z-10 inline-flex items-center justify-center">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      />
                    </svg>
                  </span>
                  <span class="absolute inset-0 overflow-hidden rounded-full" aria-hidden="true">
                    <span
                      class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-mauveMagic-600 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"
                    />
                  </span>
                </span>
                <span
                  class="font-sans text-base transition-colors duration-300 text-white group-hover:text-mauveMagic-600"
                >
                  paulooosf@gmail.com
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/paulooosf/"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-3 text-white transition-colors duration-300 hover:text-mauveMagic-600"
              >
                <span
                  class="group neon-below-lavender relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-lavenderPurple-500 text-white transition-all duration-300 ease-out hover:neon-below-mauve"
                >
                  <span class="relative z-10 inline-flex items-center justify-center">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.25-.129.599-.129.949v5.443h-3.554s.05-8.836 0-9.753h3.554v1.381c.43-.664 1.199-1.608 2.919-1.608 2.134 0 3.731 1.395 3.731 4.397v5.583zM5.337 9.432c-1.144 0-1.915-.759-1.915-1.71 0-.956.77-1.71 1.965-1.71 1.194 0 1.916.754 1.941 1.71 0 .951-.747 1.71-1.991 1.71zm1.581 11.02H3.715V8.731h3.203v11.721zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
                      />
                    </svg>
                  </span>
                  <span class="absolute inset-0 overflow-hidden rounded-full" aria-hidden="true">
                    <span
                      class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-mauveMagic-600 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"
                    />
                  </span>
                </span>
                <span
                  class="font-sans text-base transition-colors duration-300 text-white group-hover:text-mauveMagic-600"
                >
                  /in/paulooosf
                </span>
              </a>

              <a
                href="https://github.com/paulooosf"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-3 text-white transition-colors duration-300 hover:text-mauveMagic-600"
              >
                <span
                  class="group neon-below-lavender relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-lavenderPurple-500 text-white transition-all duration-300 ease-out hover:neon-below-mauve"
                >
                  <span class="relative z-10 inline-flex items-center justify-center">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </span>
                  <span class="absolute inset-0 overflow-hidden rounded-full" aria-hidden="true">
                    <span
                      class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-mauveMagic-600 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"
                    />
                  </span>
                </span>
                <span
                  class="font-sans text-base transition-colors duration-300 text-white group-hover:text-mauveMagic-600"
                >
                  /paulooosf
                </span>
              </a>
            </div>
          </div>

          <div class="relative">
            <div
              class="absolute inset-0 -translate-x-[6px] rounded-3xl bg-lavenderPurple-500/70"
              aria-hidden="true"
            ></div>
            <form
              class="relative rounded-3xl border border-lavenderPurple-500/40 bg-[#111111] px-5 py-5 shadow-[0_0_28px_16px_rgba(157,78,221,0.12)]"
              @submit="handleSubmit"
            >
              <div class="grid gap-3">
                <div>
                  <label class="font-sans text-sm font-semibold text-slate-200" for="name">
                    Nome
                  </label>
                  <input
                    id="name"
                    v-model="name"
                    type="text"
                    required
                    class="mt-3 h-11 w-full rounded-lg border border-white/10 bg-[#0f0f0f] px-4 text-white outline-none transition focus:border-lavenderPurple-500 focus:ring-2 focus:ring-lavenderPurple-500/20"
                  />
                </div>

                <div>
                  <label class="font-sans text-sm font-semibold text-slate-200" for="email">
                    Email
                  </label>
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    required
                    class="mt-3 h-11 w-full rounded-lg border border-white/10 bg-[#0f0f0f] px-4 text-white outline-none transition focus:border-lavenderPurple-500 focus:ring-2 focus:ring-lavenderPurple-500/20"
                  />
                  <p v-if="emailError" class="mt-2 text-sm text-rose-400">{{ emailError }}</p>
                </div>

                <div>
                  <label class="font-sans text-sm font-semibold text-slate-200" for="message">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    v-model="message"
                    rows="5"
                    class="mt-3 w-full rounded-lg border border-white/10 bg-[#0f0f0f] px-4 py-4 text-white outline-none transition focus:border-lavenderPurple-500 focus:ring-2 focus:ring-lavenderPurple-500/20"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    class="group neon-below-lavender relative inline-flex h-12 w-full items-center justify-center rounded-lg bg-lavenderPurple-500 px-5 font-semibold text-white transition-all duration-300 ease-out hover:neon-below-mauve"
                  >
                    <span class="relative z-10 inline-flex items-center gap-2 text-sm">
                      Enviar mensagem
                      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                    <span class="absolute inset-0 overflow-hidden rounded-lg" aria-hidden="true">
                      <span
                        class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-lg bg-mauveMagic-600 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
