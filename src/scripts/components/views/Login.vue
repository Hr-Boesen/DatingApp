<template>
    <base-view title="Login">
        <div class="login">
            <h1 class="login__title">WELCOME</h1>
            <h3 class="login__subtitle">EXISTING USER</h3>
            <form class="login__form form" @submit.prevent="hanldeLoginFormSubmit">
                <base-input
                    v-model="user.email"
                    type="email"
                    placeholder="user"
                    icon="fas fa-at"
                    required>
                </base-input>
                <base-input
                    v-model="user.password"
                    type="password"
                    placeholder="password"
                    icon="fas fa-key"
                    required>
                </base-input>
                <button type="submit" class="button button--block button--primary">Log in</button>
                <router-link to="/registration" class="button button--block button--border button--primary">Registration</router-link>
            </form>
            <h3 class="login__subtitle">LOGIN WITH</h3>
            <div class="login__socials">
                <router-link :to="{name: 'home'}"
                    class="button button--social button--facebook">
                    <i class="fab fa-facebook"></i>
                </router-link>
                <router-link :to="{name: 'home'}"
                    class="button button--social button--google">
                    <i class="fab fa-google"></i>
                </router-link>
                <router-link :to="{name: 'home'}"
                    class="button button--social button--twitter">
                    <i class="fab fa-twitter"></i>
                </router-link>
            </div>
        </div>
    </base-view>
</template>

<script>
import BaseInput from '../common/BaseInput';

export default {
    name: 'Login',
    
    components: {
        BaseInput,
    },

    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        };
    },

    methods: {
        hanldeLoginFormSubmit() {
            this.$store.dispatch('login', this.user)
                .then(() => {
                    this.$router.push('/home');
                })
                .catch((e) => console.log(e))
                .finally(() => {})
        }
    }
}
</script>