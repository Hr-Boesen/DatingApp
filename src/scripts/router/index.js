import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import Login from '../components/Login'
import Profile from '../components/profile'
import TakeAPhoto from '../components/TakeAPhoto'
import Slider from '../components/Slider'
import CreateProfileNameAgeSexuality from '../components/CreateProfileNameAgeSexuality'
import ChatContacts from '../components/ChatContacts'
import Chat from '../components/Chat'

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
            component: Profile
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
        }, 
        {
            path: '/chatcontacts',
            name: 'ChatContacts',
            props: true,
            component: ChatContacts
        },
        {
            path: '/chat',
            name: 'Chat',
            props: true,
            component: Chat
        }
    ]
})
// CreateProfileNameAgeSexuality