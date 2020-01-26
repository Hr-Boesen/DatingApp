<template>
    <div class="screen create">
        <h1 class="screen_title">HEJ!</h1>
        
        <div class="item2">
            <div class="wrapper-navn-alder">
                <div class="headline-bruger-navn">
                    <input id="inputFieldName" ref="inputFieldName" v-on:focus="changeNameFocus" v-model="name" v-bind:class="{'big-width': bigWidth, 'small-width': smallWidth}" type="text" placeholder="Navn">
                    <button @click="changeNameFocusWithBtn" class='edit-box'> 
                        <i class='fas fa-pen fa-cog'> </i>
                    </button>
                </div>
                <div class="headline-bruger-alder">
                    <input id="inputFieldAge" ref="inputFieldAge" v-on:focus="changeNameFocus" v-model="age" v-bind:class="{'big-width': bigWidth, 'small-width': smallWidth}" type="text" placeholder="Alder">
                    <button @click="changeAgeFocusWithBtn" class='edit-box'> 
                        <i class='fas fa-pen fa-cog'> </i>
                    </button>
                </div>
            </div>
        </div>
        <div class="item3">
            <div class="btn-leder-efter-en" v-bind:class="{'btn-leder-efter-en-selected': selected1}" @click="selectWhatYouAreLookingFor(1)">EN HUN DER LEDER EFTER EN HAN</div>
            <div class="btn-leder-efter-en" v-bind:class="{'btn-leder-efter-en-selected': selected2}" @click="selectWhatYouAreLookingFor(2)">EN HUN DER LEDER EFTER EN HUN</div>
            <div class="btn-leder-efter-en" v-bind:class="{'btn-leder-efter-en-selected': selected3}" @click="selectWhatYouAreLookingFor(3)">EN HAN DER LEDER EFTER EN HUN</div>
            <div class="btn-leder-efter-en" v-bind:class="{'btn-leder-efter-en-selected': selected4}" @click="selectWhatYouAreLookingFor(4)">EN HAN DER LEDER EFTER EN HAN</div>
        </div>
        <div class="item4">
            <div class="btn-center-btn-gaa-til-din-profil">
                <div @click="goToProfile" class="btn-gaa-til-din-profil">GÅ TIL DIN PROFIL</div>
            </div>
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
                name: 'Profil',
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