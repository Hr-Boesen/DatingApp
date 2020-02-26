<template>
    <div class="view">
        <div class="view__header">
            <router-link class="view__back" :to="back" v-if="back">
                <i class="fas fa-arrow-left"></i>
            </router-link>
            <div class="view__title" v-if="title">{{ title }}</div>
        </div>
        <div class="view__content">
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
    }
}
</script>