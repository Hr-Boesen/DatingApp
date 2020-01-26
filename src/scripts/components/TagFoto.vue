<template>
    <div class="tagFoto">
        <router-link :to="{name: 'Profil'}">
            <span class="tilbageKnap">
                <i class="fas fa-arrow-left"></i> TILBAGE
            </span>
        </router-link>
        <div class="tag-foto-div">
            Tag foto her!
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TagFoto',
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