import { createApp } from 'vue'
import router from './router';
import FontAwesomeIcon   from './assets/icons/fontAwesome.js'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './index.css';


const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(MotionPlugin)
.mount('#app')
