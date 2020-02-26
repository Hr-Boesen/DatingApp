<template>
    <div id="app" class="app" :class="{'app--nav-open': isNavOpen}">
        <aside class="app__nav">
            <div class="container">
                <nav class="nav">
                    <!-- Not a user -->
                    <router-link class="nav__link" v-if="!user" to="/login">Log in</router-link>
                    <router-link class="nav__link" v-if="!user" to="/registration">Registration</router-link>
                    <!-- User -->
                    <router-link class="nav__link" v-if="user" to="/home">Feed</router-link>
                    <router-link class="nav__link" v-if="user" to="/chats">Messages</router-link>
                    <router-link class="nav__link" v-if="user" to="/profile">Profile</router-link>
                    <router-link class="nav__link" v-if="user" to="/logout">Log out</router-link>
                    <!-- Commot -->
                    <router-link class="nav__link" to="/about">About</router-link>
                </nav>
            </div>
        </aside>
        <main class="app__content">
            <router-view/>
        </main>
        <button type="button" class="app__nav-toggle" @click="toggleNav">
            <i class="fas fa-bars" v-show="!isNavOpen"></i>
            <i class="fas fa-times" v-show="isNavOpen"></i>
        </button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'App',

    data() {
        return {
            isNavOpen: false
        }
    },

    computed: {
        ...mapState([
            'user'
        ])
    },

    methods: {
        toggleNav() {
            this.isNavOpen = !this.isNavOpen;
        }
    }
}
</script>
