<template>
    <div class="input" :class="{'input--with-icon': !!icon}">
        <i class="input__icon" :class="icon" v-if="icon"></i>
        <input class="input__field" v-bind="$attrs" />
    </div>
</template>

<script>
export default {
    name: 'BaseInput',

    inheritAttrs: false,

    props: {
        icon: {
            type: String
        }
    }
}
</script>