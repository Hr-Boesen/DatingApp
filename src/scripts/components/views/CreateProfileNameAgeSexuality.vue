<template>
    <base-view title="New account">
        <div class="account">
            <!-- <h1 class="screen_title">HEJ!</h1> -->
            <!-- <form class="account__details form">
                <base-input icon="far fa-user" type="text" placeholder="name"></base-input>
                <base-input icon="far fa-calendar" type="text" placeholder="age"></base-input>
            </form> -->
            <div class="account__interest">
                <button class="button button--block "
                    v-bind:class="{'button--gradient': interest === 1}"
                    @click="selectInterest(1)">EN HUN DER LEDER EFTER EN HAN</button>
                <button class="button button--block "
                    v-bind:class="{'button--gradient': interest === 2}"
                    @click="selectInterest(2)">EN HUN DER LEDER EFTER EN HUN</button>
                <button class="button button--block "
                    v-bind:class="{'button--gradient': interest === 3}"
                    @click="selectInterest(3)">EN HAN DER LEDER EFTER EN HUN</button>
                <button class="button button--block"
                    v-bind:class="{'button--gradient': interest === 4}"
                    @click="selectInterest(4)">EN HAN DER LEDER EFTER EN HAN</button>
            </div>
            <div class="u-text-center">
                <button class="button button--link button--primary u-text-black u-text-upper"
                    @click="goToProfile">
                    Go to your profile
                </button>
            </div>
            <!-- <div>
                <div type="button" class="btn-go-to-profile u-text-upper"
                    @click="goToProfile">
                    Go to your profile
                </div>
            </div> -->
            <!-- <div class="headline-user-name">
                <input id="inputFieldName" ref="inputFieldName" v-on:focus="changeNameFocus" v-model="name" v-bind:class="{'big-width': bigWidth, 'small-width': smallWidth}" type="text" placeholder="Navn">
                <button @click="changeNameFocusWithBtn" class='edit-box'> 
                    <i class='fas fa-pen fa-cog'> </i>
                </button>
            </div> -->
            <!-- <div class="headline-user-age">
                <input id="inputFieldAge" ref="inputFieldAge" v-on:focus="changeNameFocus" v-model="age" v-bind:class="{'big-width': bigWidth, 'small-width': smallWidth}" type="text" placeholder="Alder">
                <button @click="changeAgeFocusWithBtn" class='edit-box'> 
                    <i class='fas fa-pen fa-cog'> </i>
                </button>
            </div> -->
        </div>
    </base-view>
</template>

<script>
import BaseInput from '../common/BaseInput';

export default {
    name: 'CreateProfileNameAgeSexuality',

    components: {
        BaseInput,
    },

    data() {
        return {
            name: null,
            age: null,
            interest: null
        }
    },

    methods: {
        goToProfile() {
            this.$router.push({
                name: 'profile'
            })
        },
        // changeNameFocus() {
        //     this.bigWidth = true;
        //     this.smallWidth = false;
        // },
        /*  changeNameFocusOut(){
                this.bigWidth = false; 
                this.smallWidth = true;
            },*/
        // changeNameFocusWithBtn() {
        //     this.$refs.inputFieldName.focus();
        //     this.bigWidth = true;
        //     this.smallWidth = false;
        // },
        // changeAgeFocusWithBtn() {
        //     this.$refs.inputFieldAge.focus();
        //     this.bigWidth = true;
        //     this.smallWidth = false;
        // },
        selectInterest(i) {
            this.interest = i;
        }
    }
}
</script>