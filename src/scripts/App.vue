<template>
    <div id="app" class="app" :class="{'app--nav-open': isNavOpen}">
        <aside class="app__nav">
            <div class="container">
                <nav class="nav">
                    <router-link class="nav__link" to="/">Feed</router-link>
                    <router-link class="nav__link" to="/">Messages</router-link>
                    <router-link class="nav__link" to="/">Search</router-link>
                    <router-link class="nav__link" to="/">Account</router-link>
                    <router-link class="nav__link" to="/">Log out</router-link>
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
export default {
    name: 'App',

    data() {
        return {
            isNavOpen: false
        }
    },

    methods: {
        toggleNav() {
            this.isNavOpen = !this.isNavOpen;
        }
    }
}
</script>
