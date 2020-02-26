<template>
    <base-view title="Registration">
        <div class="login">
            <h1 class="login__title">Registration</h1>
            <h3 class="login__subtitle">NEW USER</h3>
            <form class="login__form form" @submit.prevent="hanldeRegistrationFormSubmit">
                <base-input
                    v-model="user.name"
                    type="text"
                    placeholder="user"
                    icon="fas fa-user"
                    required>
                </base-input>
                <base-input
                    v-model="user.email"
                    type="email"
                    placeholder="e-mail"
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
                <button type="submit" class="button button--block button--primary">Registration</button>
                <router-link to="/login" class="button button--block button--border button--primary">Log in</router-link>
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
import BaseInput from '../common/BaseInput'

export default {
    name: 'Registration',

    components: {
        BaseInput
    },

    data() {
        return {
            user: {
                name: '',
                email: '',
                password: ''
            }
        };
    },
    
    methods: {
        hanldeRegistrationFormSubmit() {
            this.$store.dispatch('registration', this.user)
                .then(() => {
                    this.$router.push('/new_user');
                })
                .catch((e) => console.log(e))
                .finally(() => {})
        }
    }
}
</script>