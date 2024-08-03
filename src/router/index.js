import Vue from 'vue';
import VueRouter from 'vue-router';
import AutobotList from '../components/AutobotList.vue';
import AutobotPosts from '../components/AutobotPosts.vue';
import PostComments from '../components/PostComments.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'AutobotList',
    component: AutobotList,
  },
  {
    path: '/autobots/:id/posts',
    name: 'AutobotPosts',
    component: AutobotPosts,
  },
  {
    path: '/autobots/posts/:postId/comments',
    name: 'PostComments',
    component: PostComments,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
