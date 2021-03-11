import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

//Define Route
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            alias: '/home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/donations',
            name: 'donations',
            component: () => import('./views/Donations.vue')
        },
        {
            path: '/blogs',
            name: 'blogs',
            component: () => import('./views/Blogs.vue')
        },
        {
            path: '/campaign/:id',
            name: 'campaign',
            component: () => import('./views/Campaign.vue')
        },
        {
            path: '/campaigns',
            name: 'campaigns',
            component: () => import('./views/Campaigns.vue')
        },
        {
          path: '/verification',
          name: 'verification',
          component: () => import('./views/Verification.vue')
        },
        {
            path: '/update-password',
            name: 'update-password',
            component: () => import('./views/UpdatePassword.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('./views/Profile.vue')
        },
        {
          path: '/auth/social/:provider/callback',
          name: 'social',
          component: () => import('./views/Social.vue')
        },
        {
            path: '*',
            redirect: '/'
        }

    ]
});

export default router;
