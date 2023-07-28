import { createRouter, createWebHashHistory } from 'vue-router';
import loginWelcome from '../pages/loginWelcome';
import adminSettings from "@/pages/adminSettings";

const routes = [
    { path: '/', component: loginWelcome },
    { path: '/adminSettings', component: adminSettings },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
