<template>
    <base-view title="Login">
        <div class="login">
            <h1 class="login__title">WELCOME</h1>
            <h3 class="login__subtitle">EXISTING USER</h3>
            <form class="login__form form">
                <base-input icon="fas fa-at" placeholder="user" type="email" required></base-input>
                <base-input icon="fas fa-key" placeholder="password" type="password" required></base-input>
                <button type="submit" class="button button--block">Log in</button>
                <router-link to="/" class="button button--block button--border">Registration</router-link>
            </form>
            <h3 class="login__subtitle">LOGIN WITH</h3>
            <div class="login__socials">
                <router-link :to="{name: 'CreateProfileNameAgeSexuality'}" class="button button--social button--facebook">
                    <i class="fab fa-facebook"></i>
                </router-link>
                <br />
                <router-link :to="{name: 'CreateProfileNameAgeSexuality'}" class="button button--social button--google">
                    <i class="fab fa-google"></i>
                </router-link>
                <router-link :to="{name: 'CreateProfileNameAgeSexuality'}" class="button button--social button--twitter">
                    <i class="fab fa-twitter"></i>
                </router-link>
            </div>
        </div>
    </base-view>
</template>

<script>
import BaseInput from './BaseInput';
import BaseView from './BaseView';

export default {
    name: 'Login',
    
    components: {
        BaseInput,
        BaseView,
    },

    data() {
        return {};
    },
    
    created(){
        // let vh = window.innerHeight * 0.01;
        // document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
}
</script>