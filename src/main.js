import { createApp, onMounted } from 'vue'
import router from './router';
import FontAwesomeIcon   from './assets/icons/fontAwesome.js'
import { MotionPlugin } from '@vueuse/motion'
import scrollAnimation from './scrollAnimation';
import App from './App.vue'
import './index.css';

import "aos/dist/aos.css"

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
app.directive('scrollanimation', (el) => {
    el.classList.add('before-enter')
    scrollAnimation.observe(el)
})
.use(router)
.use(MotionPlugin)
.mount('#app')
