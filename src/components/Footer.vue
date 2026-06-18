<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <footer class="bg-[#111111] pb-8 pt-6">
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <div class="border-t border-lavenderPurple-500/30 pt-6">
        <p class="text-center text-sm text-slate-400">
          {{ t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>
