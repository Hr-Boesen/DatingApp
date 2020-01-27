import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import Login from '../components/Login'
import Profil from '../components/profil'
import TagFoto from '../components/TagFoto'
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
            path: '/profil',
            name: 'Profil',
            props: true,
            component: Profil
        }, 
        {
            path: '/tagfoto',
            name: 'TagFoto',
            props: true,
            component: TagFoto
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