<template>
    <div class="screen create-profile">
        <h1 class="screen_title">HEJ!</h1>
                <div class="headline-user-name">
                    <input id="inputFieldName" ref="inputFieldName" v-on:focus="changeNameFocus" v-model="name" v-bind:class="{'big-width': bigWidth, 'small-width': smallWidth}" type="text" placeholder="Navn">
                    <button @click="changeNameFocusWithBtn" class='edit-box'> 
                        <i class='fas fa-pen fa-cog'> </i>
                    </button>
                </div>
                <div class="headline-user-age">
                    <input id="inputFieldAge" ref="inputFieldAge" v-on:focus="changeNameFocus" v-model="age" v-bind:class="{'big-width': bigWidth, 'small-width': smallWidth}" type="text" placeholder="Alder">
                    <button @click="changeAgeFocusWithBtn" class='edit-box'> 
                        <i class='fas fa-pen fa-cog'> </i>
                    </button>
                </div>
            <div class="btn-looking-for-partner" v-bind:class="{'btn-looking-for-partner-selected': selected1}" @click="selectWhatYouAreLookingFor(1)">EN HUN DER LEDER EFTER EN HAN</div>
            <div class="btn-looking-for-partner" v-bind:class="{'btn-looking-for-partner-selected': selected2}" @click="selectWhatYouAreLookingFor(2)">EN HUN DER LEDER EFTER EN HUN</div>
            <div class="btn-looking-for-partner" v-bind:class="{'bbtn-looking-for-partner-selected': selected3}" @click="selectWhatYouAreLookingFor(3)">EN HAN DER LEDER EFTER EN HUN</div>
            <div class="btn-looking-for-partner" v-bind:class="{'btn-looking-for-partner-selected': selected4}" @click="selectWhatYouAreLookingFor(4)">EN HAN DER LEDER EFTER EN HAN</div>
            <div>
                <div @click="goToProfile" class="btn-go-to-profile">GÅ TIL DIN PROFIL</div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'CreateProfileNameAgeSexuality',

    data() {
        return {
            selected1: false,
            selected2: false,
            selected3: false,
            selected4: false,
            bigWidth: false,
            smallWidth: false,
            name: null,
            age: null
        }
    },

    methods: {
        goToProfile() {
            this.$router.push({
                name: 'Profile',
                params: {
                    name: this.name,
                    age: this.age
                }
            })
        },
        changeNameFocus() {
            this.bigWidth = true;
            this.smallWidth = false;
        },
        /*  changeNameFocusOut(){
                this.bigWidth = false; 
                this.smallWidth = true;
            },*/
        changeNameFocusWithBtn() {
            this.$refs.inputFieldName.focus();
            this.bigWidth = true;
            this.smallWidth = false;
        },
        changeAgeFocusWithBtn() {
            this.$refs.inputFieldAge.focus();
            this.bigWidth = true;
            this.smallWidth = false;
        },
        selectWhatYouAreLookingFor(selected) {
            switch (selected) {
                case 1:
                    this.selected1 = true
                    this.selected2 = false
                    this.selected3 = false
                    this.selected4 = false
                    break;
                case 2:
                    this.selected1 = false
                    this.selected2 = true
                    this.selected3 = false
                    this.selected4 = false
                    break;
                case 3:
                    this.selected1 = false
                    this.selected2 = false
                    this.selected3 = true
                    this.selected4 = false
                    break;
                case 4:
                    this.selected1 = false
                    this.selected2 = false
                    this.selected3 = false
                    this.selected4 = true
                    break;
                default:
                    break;
            }
        }
    }
}
</script>