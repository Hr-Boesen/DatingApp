import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'

import store from '../store';

import Login from '../components/views/Login'
import Registration from '../components/views/Registration'
import Home from '../components/views/Home'
import Profile from '../components/views/profile'
import TakeAPhoto from '../components/views/TakeAPhoto'
import Slider from '../components/views/Slider'
import CreateProfileNameAgeSexuality from '../components/views/CreateProfileNameAgeSexuality'
import Chats from '../components/views/Chats'
import Chat from '../components/views/Chat'
import About from '../components/views/About'
import CreateYourProfile from '../components/views/CreateYourProfile'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'default',
        redirect: { name: 'login'}
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/registration',
        name: 'registration',
        component: Registration
    },
    {
        path: '/logout',
        name: 'logout',
        // redirect: '/login'
    },
    {
        path: '/new_user',
        name: 'new_user',
        component: CreateProfileNameAgeSexuality,
        meta: { auth: true }
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: { auth: true }
    },
    {
        path: '/createProfileNameAgeSexuality',
        name: 'createProfileNameAgeSexuality',
        component: CreateProfileNameAgeSexuality,
        meta: { auth: true }
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: { auth: true }
    }, 
    {
        path: '/photo',
        name: 'photo',
        component: TakeAPhoto,
        meta: { auth: true }
    },
    {
        path: '/slider',
        name: 'slider',
        component: Slider,
        meta: { auth: true }
    }, 
    {
        path: '/chats',
        name: 'chats',
        component: Chats,
        meta: { auth: true }
    },
    {
        path: '/chats/:id',
        name: 'chat',
        component: Chat,
        meta: { auth: true }
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }, 
    {
        path: '/createYourProfile',
        name: 'CreateYourProfile',
        component: CreateYourProfile
    }
];

const router = new Router({routes});

router.beforeEach((to, from, next) => {
    if (to.name === 'logout') {
        store.dispatch('logout')
            .then(() => {
                next('/login');
            });
    }
    if (to.meta.auth && !store.state.user) {
        next('/login');
    } else {
        next();
    }
});

export default router;