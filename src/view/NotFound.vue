<template>
  <section class="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 font-sans">
    <div
      aria-hidden="true"
      class="fixed inset-0 -z-10 bg-[linear-gradient(115deg,#e4edfb_0%,#f7f8fc_40%,#e4f6ee_74%,#d7f3e4_100%)] dark:bg-[linear-gradient(115deg,#0f172a_0%,#111827_48%,#052e1b_100%)]"
    ></div>

    <p class="text-sm font-semibold uppercase tracking-[0.2em] !text-violet-600 dark:!text-violet-300">
      404
    </p>
    <h1 class="mt-4 text-center text-[clamp(2rem,1rem+3vw,3.5rem)] font-extrabold tracking-tight !text-neutral-900 dark:!text-white">
      Page not found
    </h1>
    <p class="mt-4 max-w-md text-center text-[clamp(0.95rem,0.8rem+0.35vw,1.125rem)] leading-relaxed !text-slate-500 dark:!text-slate-300">
      This project doesn’t have a live demo link yet. You can go back home or check the repository if one is available.
    </p>

    <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
      <router-link to="/" class="button">
        Back to home
      </router-link>
      <button
        type="button"
        class="inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold !text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/10 dark:!text-white"
        @click="goBack"
      >
        Go back
      </button>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
    return
  }
  router.push('/')
}
</script>
