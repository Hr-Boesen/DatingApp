import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import Login from '../components/Login'
import Profil from '../components/profile'
import TakeAPhoto from '../components/TakeAPhoto'
import Slider from '../components/Slider'
import CreateProfileNameAgeSexuality from '../components/CreateProfileNameAgeSexuality'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        }, 
        {
            path: '/createProfileNameAgeSexuality',
            name: 'CreateProfileNameAgeSexuality',
            component: CreateProfileNameAgeSexuality
        },
        {
            path: '/profile',
            name: 'Profile',
            props: true,
            component: Profil
        }, 
        {
            path: '/takeaphoto',
            name: 'TakeAPhoto',
            props: true,
            component: TakeAPhoto
        },
        {
            path: '/slider',
            name: 'Slider',
            props: true,
            component: Slider
        }
    ]
})
// CreateProfileNameAgeSexuality