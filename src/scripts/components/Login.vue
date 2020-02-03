<template>
    <div class="screen login">
        <div class="container">
            <h1 class="screen_title">VELKOMMEN</h1>
            <h2 class="create-user">OPRET BRUGER</h2>
            <div>
                <router-link :to="{name: 'CreateProfileNameAgeSexuality'}" class="button button-block button-facebook">
                    Facebook
                </router-link>
                <br />
                <router-link :to="{name: 'CreateProfileNameAgeSexuality'}" class="button button-block button-google">
                    Google
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    
    data() {
        return {};
    },
    
    created(){
        // let vh = window.innerHeight * 0.01;
        // document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
}
</script>