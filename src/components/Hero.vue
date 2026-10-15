<template>
      <section class="flex flex-1 items-center justify-center px-6 py-16">
                <div class="w-full max-w-3xl mx-auto text-center">
                    <p
                        class="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-1.5 text-sm font-medium !text-violet-600 shadow-sm dark:border-violet-400/30 dark:bg-white/10 dark:!text-violet-300"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true">
                            <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
                        </svg>
                        Application/Web Developer
                    </p>
                    <h1
                        class="text-[clamp(2.25rem,1rem+4.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight !text-neutral-900 dark:!text-white duration-1000"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="1500"
                    >
                        Building ideas into <span class="!text-violet-600 dark:!text-violet-400">reality.</span>
                    </h1>
                    <p
                        class="mx-auto mt-6 max-w-2xl text-[clamp(0.95rem,0.8rem+0.45vw,1.125rem)] font-medium leading-relaxed !text-slate-500 dark:!text-slate-300 duration-1000"
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1500"
                    >
                        Transforming ideas into intuitive applications and engaging web experiences through clean code, thoughtful design, and creative problem-solving. Every project is an opportunity to turn concepts into impactful digital experiences.
                    </p>

                    <div data-aos="fade-up"
                         data-aos-delay="600"
                         data-aos-duration="1500"
                         class="mt-10 flex flex-wrap items-center justify-center gap-3">
                        <a
                            @click="scrollToElement('projects')"
                            type="button"
                            class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold !text-white shadow-sm transition hover:bg-blue-700">
                            View My Work
                            <span aria-hidden="true" class="!text-white">→</span>
                        </a>
                        <a
                            @click="scrollToElement('contact')"
                            type="button"
                            class="inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold !text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/10 dark:!text-white">
                            Get In Touch
                        </a>
                    </div>
                </div>
     </section>
</template>
<script setup>



const  scrollToElement = (refName)  => {
    const el = document.getElementById(refName);
    el.scrollIntoView({behavior : "smooth",  block: 'start'})
}



</script>
