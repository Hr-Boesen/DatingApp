<template>
    <div class="view">
        <div class="view__header">
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
        }
    }
}
</script>