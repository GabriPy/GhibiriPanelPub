import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '@/components/LoginComponent.vue';
import DashboardComponent from '@/components/DashboardComponent.vue';
import RegisterComponent from '@/components/RegisterComponent.vue';

const routes = [
    { path: '/', name: 'Login', component: LoginComponent },
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, meta: { requiresAuth: true } },
    { path: '/register', name: 'Register', component: RegisterComponent, meta: { requiresAuth: true } }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.getItem('user')) {
            next({ path: '/', query: { redirect: to.fullPath } });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
