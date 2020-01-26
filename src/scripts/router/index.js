import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import Login from '../components/Login'
import Test from '../components/Test'
import HvadLederDuEfter from '../components/HvadLederDuEfter'
import Profil from '../components/profil'
import TagFoto from '../components/TagFoto'
import Slider from '../components/Slider'
import CreateProfileNameAgeSexuality from '../components/CreateProfileNameAgeSexuality'
import Skabelon from '../components/Skabelon'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        }, 
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/createProfileNameAgeSexuality',
            name: 'CreateProfileNameAgeSexuality',
            component: CreateProfileNameAgeSexuality
        },
        {
            path: '/HvadLederDuEfter',
            name: 'HvadLederDuEfter',
            component: HvadLederDuEfter
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
        },
        {
            path: '/skabelon',
            name: 'Skabelon',
            component: Skabelon
        }
    ]
})
// CreateProfileNameAgeSexuality