<template>
    <base-view title="Profile">
        <div class="profile">
            <h1 class="screen_title">
                {{ user.name }}
            </h1>
            <div class="take-a-photo-wrapper">
                <div class="take-a-photo-inner-wrapper">
                <router-link :to="{name: 'photo'}">
                    <span class="btn-take-a-photo">
                        <i class='fas fa-pen fa-cog'> </i> TAG ET FOTO
                    </span>
                </router-link>
                </div>
            </div>
            <div class="create-cloud-wrapper">
                <router-link :to="{name: 'slider'}">
                    <span class="btn-lav-sky">
                        <i class='fas fa-pen fa-cog'> </i> LAV DIN SKY
                    </span>
                </router-link>
                <div class="cloud1"></div>
                <div class="cloud2"></div>
                <div class="cloud3"></div>
                <div class="cloud4"></div>
                <div class="cloud5"></div>
                <div class="cloud6"></div>
                <div class="cloud7"></div>
            </div>
            <div class="profile-percentage-overview ">
                <div class="profile-percentage-title">
                    DIN PROFIL ER 20% FÆRDIG
                </div>
                <div class="profile-percentage-graphics">
                    <div class="profile-procentage-graphics-bar">
                    </div>
                </div>
                <div class="profile-percentage-not-public-yet">
                    DEN ER DERFOR IKKE OFFENTLIG ENDNU
                </div>
            </div>
        </div>
    
    </base-view>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Profile',

    computed: {
        ...mapState([
            'user'
        ])
    },
}
</script>