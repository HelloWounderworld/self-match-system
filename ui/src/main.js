import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ThemesPage from './components/ThemesPage.vue';
import ResultsPage from './components/ResultsPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/themes', component: ThemesPage },
    { path: '/results', component: ResultsPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
