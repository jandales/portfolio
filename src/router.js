
import { createRouter, createWebHistory, useRoute } from 'vue-router'
const route = useRoute();
const router = createRouter({ 

    history : createWebHistory(),

    routes : [
                
        {
            path: '/github/:repository',
            name : 'repository',
            beforeEnter() { location.href = route.params.repository }
        },

        {
            path: '/website/:link',
            beforeEnter() { location.href = route.params.link }
        }
           
       
    ],

   
});

export default router;

