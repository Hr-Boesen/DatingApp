<template>
    <div class="view">
        <div class="view__header" :class="{'view__header--shadow': isContentScrolled}">
            <router-link class="view__back" :to="back" v-if="back">
                <i class="fas fa-arrow-left"></i>
            </router-link>
            <div class="view__title" v-if="title">{{ title }}</div>
        </div>
        <div class="view__content" ref="content">
            <div class="container">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Baseview',

    props: {
        title: {
            type: String,
            default: ''
        },
        back: {
            type: String
        }
    },

    data: () => ({
        isContentScrolled: false
    }),

    mounted() {
        this.$refs.content.addEventListener('scroll', () => {
            if (this.$refs.content.scrollTop !== 0) {
                this.isContentScrolled = true;
            } else {
                this.isContentScrolled = false;
            }
        })
    }
}
</script>