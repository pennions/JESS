import 'lucide-static/font/Lucide.css';
import '../jess/jess.less';
import '../jess/theme/default/default.less';
import { createRouter, createWebHashHistory } from 'vue-router';

import { createApp } from 'vue';
import App from './App.vue'; /** This is the 'main' component / page, which contains the router view. */
import Home from './pages/Home.vue';
import Layout from './pages/Layout.vue';
import ButtonsAndInputs from './pages/ButtonsAndInputs.vue';
import Components from './pages/Components.vue';
import Typography from './pages/Typography.vue';
import UtilityClasses from './pages/UtilityClasses.vue';
import Icons from './pages/Icons.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/layout', component: Layout },
    { path: '/buttons-and-inputs', component: ButtonsAndInputs },
    { path: '/components/:scrollToId', component: Components, props: true },
    { path: '/components', component: Components },
    { path: '/typography', component: Typography },
    { path: '/utility-classes', component: UtilityClasses },
    { path: '/icons', component: Icons }
];

const router = createRouter({
    scrollBehavior() {
        return { top: 0 };
    },
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

const app = createApp(App); /** Tell the app to use App component / page as the base */

app.provide('scrollTo', function scrollTo(id) {
    document.getElementById(id).scrollIntoView();
});
app.use(router);

app.mount('#app');