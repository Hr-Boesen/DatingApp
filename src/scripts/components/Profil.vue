<template>
    <div class="screen profile">
        <h1 class="screen_title">
            {{ name }}
        </h1>
        <div class="tag-et-foto-wrapper">
            <div class="tag-et-foto-inner-wrapper">
            <router-link :to="{name: 'TagFoto'}">
                <span class="btn-tag-foto-lav-sky">
                    <i class='fas fa-pen fa-cog'> </i> TAG ET FOTO
                </span>
            </router-link>
            </div>
        </div>
        <div class="lav-sky-wrapper">
            <router-link :to="{name: 'Slider'}">
                <span class="btn-lav-sky">
                    <i class='fas fa-pen fa-cog'> </i> LAV DIN SKY
                </span>
            </router-link>
            <div class="sky1"></div>
            <div class="sky2"></div>
            <div class="sky3"></div>
            <div class="sky4"></div>
            <div class="sky5"></div>
            <div class="sky6"></div>
            <div class="sky7"></div>
        </div>
        <div class="profil-procent-oversigt">
            <div class="profil-procent-overskrift">
                DIN PROFIL ER 20% FÆRDIG
            </div>
            <div class="profil-procent-grafik">
                <div class="profil-procent-grafik-bar">
                </div>
            </div>
            <div class="profil-procent-tilgaengelig">
                DEN ER DERFOR IKKE OFFENTLIG ENDNU
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'profil',
    

    data() {
        return {
            name: 'My name',
            age: 18
        }
    },

    methods: {
        tagEtFoto() {
    
        }
    },

    created() {
        console.log(this.name);
    }
}
</script>