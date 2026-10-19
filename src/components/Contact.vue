<template>
        <section id="contact">
            <div class="mx-auto w-full max-w-6xl px-6 py-20 md:px-8">
                <h2
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1500"
                    class="text-center text-[clamp(2.25rem,1rem+3vw,3.5rem)] font-extrabold tracking-tight !text-neutral-900 dark:!text-white"
                >
                    {{ title }}
                </h2>
                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1500"
                    class="mx-auto mt-4 max-w-xl text-center text-[clamp(0.95rem,0.8rem+0.35vw,1.125rem)] font-medium leading-relaxed !text-slate-500 dark:!text-slate-300"
                >
                    I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>

                <div class="mt-16 grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
                    <form
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1500"
                        class="space-y-5"
                        @submit.prevent="sendMessage"
                    >
                        <h3 class="text-lg !text-neutral-900 dark:!text-white">Send a message</h3>

                        <label class="block text-sm font-medium !text-slate-700 dark:!text-slate-300">
                            Name
                            <input
                                v-model="form.name"
                                type="text"
                                name="name"
                                required
                                placeholder="Your name"
                                class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-normal !text-neutral-900 outline-none transition placeholder:!text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:!text-white dark:focus:ring-blue-500/20"
                            />
                        </label>

                        <label class="block text-sm font-medium !text-slate-700 dark:!text-slate-300">
                            Email
                            <input
                                v-model="form.email"
                                type="email"
                                name="email"
                                required
                                placeholder="you@example.com"
                                class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-normal !text-neutral-900 outline-none transition placeholder:!text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:!text-white dark:focus:ring-blue-500/20"
                            />
                        </label>

                        <label class="block text-sm font-medium !text-slate-700 dark:!text-slate-300">
                            Subject
                            <input
                                v-model="form.subject"
                                type="text"
                                name="subject"
                                required
                                placeholder="Project collaboration"
                                class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-normal !text-neutral-900 outline-none transition placeholder:!text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:!text-white dark:focus:ring-blue-500/20"
                            />
                        </label>

                        <label class="block text-sm font-medium !text-slate-700 dark:!text-slate-300">
                            Message
                            <textarea
                                v-model="form.message"
                                name="message"
                                required
                                rows="5"
                                placeholder="Tell me about your project..."
                                class="mt-2 w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-normal !text-neutral-900 outline-none transition placeholder:!text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:!text-white dark:focus:ring-blue-500/20"
                            />
                        </label>

                        <p
                            v-if="status.message"
                            :class="[
                                'rounded-lg px-4 py-3 text-sm font-medium',
                                status.type === 'success'
                                    ? 'bg-emerald-50 !text-emerald-700 dark:bg-emerald-500/10 dark:!text-emerald-300'
                                    : status.type === 'info'
                                      ? 'bg-blue-50 !text-blue-700 dark:bg-blue-500/10 dark:!text-blue-300'
                                      : 'bg-red-50 !text-red-700 dark:bg-red-500/10 dark:!text-red-300',
                            ]"
                        >
                            {{ status.message }}
                        </p>

                        <button type="submit" class="button disabled:cursor-not-allowed disabled:opacity-60" :disabled="isSending">
                            {{ isSending ? 'Sending...' : 'Send message' }}
                        </button>
                    </form>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="1500"
                    >
                        <h3 class="text-lg !text-neutral-900 dark:!text-white">Contact information</h3>
                        <ul class="mt-6 space-y-4">
                            <li v-for="item in details" :key="item.label">
                                <a
                                    :href="item.href"
                                    :target="item.external ? '_blank' : undefined"
                                    rel="noopener noreferrer"
                                    class="flex items-center gap-4 rounded-2xl bg-slate-50 px-4 py-4 transition hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10"
                                >
                                    <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 !text-blue-600 dark:bg-blue-500/15 dark:!text-blue-300">
                                        <svg v-if="item.icon === 'mail'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                        <svg v-else-if="item.icon === 'github'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                                            <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 0 1 .1 3.2 4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                                            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.7 4.8 6.1V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-4V8.5z" />
                                        </svg>
                                    </span>
                                    <span class="min-w-0">
                                        <span class="block text-xs font-medium !text-slate-500 dark:!text-slate-400">{{ item.label }}</span>
                                        <span class="mt-0.5 block truncate text-sm font-semibold !text-neutral-900 dark:!text-white">{{ item.value }}</span>
                                    </span>
                                </a>
                            </li>
                        </ul>

                        <h3 class="mt-10 text-lg !text-neutral-900 dark:!text-white">Connect with me</h3>
                        <div class="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                            <a
                                v-for="link in socials"
                                :key="link.label"
                                :href="link.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 text-sm font-medium !text-slate-700 transition hover:!text-blue-600 dark:!text-slate-300 dark:hover:!text-blue-300"
                            >
                                <font-awesome-icon :icon="link.icon" class="h-4 w-4" />
                                {{ link.label }}
                            </a>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </section>
</template>
<script setup>
import { reactive, ref } from 'vue'
import Footer from '@/components/Footer.vue'

const title = 'Get In Touch'
const emailAddress = 'jesusandales021993@gmail.com'

const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
})

const isSending = ref(false)
const status = reactive({
    type: '',
    message: '',
})

const details = [
    {
        label: 'Email',
        value: emailAddress,
        href: `mailto:${emailAddress}`,
        icon: 'mail',
    },
    {
        label: 'GitHub',
        value: 'github.com/jandales',
        href: 'https://github.com/jandales',
        icon: 'github',
        external: true,
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/jesus-andales',
        href: 'https://www.linkedin.com/in/jesus-andales',
        icon: 'linkedin',
        external: true,
    },
]

const socials = [
    { label: 'GitHub', href: 'https://github.com/jandales', icon: 'fa-brands fa-github' },
    { label: 'Messenger', href: 'https://www.messenger.com/t/100001489436117', icon: 'fa-brands fa-facebook-messenger' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jesus-andales', icon: 'fa-brands fa-linkedin' },
]

const resetStatus = () => {
    status.type = ''
    status.message = ''
}

const sendMessage = async () => {
    resetStatus()
    isSending.value = true

    try {
        const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                subject: form.subject,
                message: form.message,
                _template: 'table',
                _captcha: false,
            }),
        })

        const result = await response.json()
        const resultMessage = String(result.message || '')
        const needsActivation = /activat/i.test(resultMessage)

        if (needsActivation) {
            status.type = 'info'
            status.message = `Check ${emailAddress} for an email from FormSubmit, then click “Activate Form”. After that, submit again and messages will arrive in your inbox.`
            return
        }

        if (!response.ok || result.success === 'false' || result.success === false) {
            throw new Error(resultMessage || 'Unable to send your message right now.')
        }

        status.type = 'success'
        status.message = 'Message sent. I’ll get back to you soon.'
        form.name = ''
        form.email = ''
        form.subject = ''
        form.message = ''
    } catch (error) {
        const errorMessage = error.message || 'Something went wrong. Please try again or email me directly.'

        if (/activat/i.test(errorMessage)) {
            status.type = 'info'
            status.message = `Check ${emailAddress} for an email from FormSubmit, then click “Activate Form”. After that, submit again and messages will arrive in your inbox.`
            return
        }

        status.type = 'error'
        status.message = errorMessage
    } finally {
        isSending.value = false
    }
}
</script>
