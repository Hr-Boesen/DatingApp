<template>
    <div class="take-a-photo">
        <router-link :to="{name: 'Profile'}">
            <span class="btn-back">
                <i class="fas fa-arrow-left"></i> TILBAGE
            </span>
        </router-link>
        <div class="take-a-photo-div">
            Tag foto her!
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TakeAFoto',
    data() {
        return {
        }
    },
    methods: {
        tagEtFoto() {
            console.log("Tag et foto");
        }
    },
    created() {
  
    }
  }
</script>