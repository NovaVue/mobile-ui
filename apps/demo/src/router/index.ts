import { createRouter, createWebHistory } from 'vue-router';
import App from '../views/App/index.vue';
import Overview from '../views/Overview/index.vue';
import Text from '../views/Text/index.vue';
import Title from '../views/Title/index.vue';
import Number from '../views/Number/index.vue';
import TabBlock from '../views/TabBlock/index.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview,
    },
    {
      path: '/components/text',
      name: 'Text',
      component: Text,
    },
    {
      path: '/components/title',
      name: 'Title',
      component: Title,
    },
    {
      path: '/components/number',
      name: 'Number',
      component: Number,
    },
    {
      path: '/components/tabblock',
      name: 'TabBlock',
      component: TabBlock,
    },
  ],
});

export default router;
