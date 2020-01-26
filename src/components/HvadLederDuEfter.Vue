<template>
    <div class="HvadLederDuEfter">
        <div class="screen-iphone5">
            <div class="headline-hej"> HEJ! </div>
    
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
    
            <div class="btn-wrapper">
                <div class="btn-leder-efter-en" v-bind:class="{'btn-leder-efter-en-selected': selected1}" @click="selectWhatYouAreLookingFor(1)">EN HUN DER LEDER EFTER EN HAN</div>
                <div class="btn-leder-efter-en" v-bind:class="{'btn-leder-efter-en-selected': selected2}" @click="selectWhatYouAreLookingFor(2)">EN HUN DER LEDER EFTER EN HUN</div>
                <div class="btn-leder-efter-en" v-bind:class="{'btn-leder-efter-en-selected': selected3}" @click="selectWhatYouAreLookingFor(3)">EN HAN DER LEDER EFTER EN HUN</div>
                <div class="btn-leder-efter-en" v-bind:class="{'btn-leder-efter-en-selected': selected4}" @click="selectWhatYouAreLookingFor(4)">EN HAN DER LEDER EFTER EN HAN</div>
            </div>
    
            <div class="btn-center-btn-gaa-til-din-profil">
                <div @click="goToProfile" class="btn-gaa-til-din-profil">GÅ TIL DIN PROFIL</div>
            </div>
    
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HvadLederDuEfter',
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

<style>
     .HvadLederDuEfter .screen-iphone5 {
         width: 320px;
         height: 568px;
         margin: 0 auto;
     }
     
     .HvadLederDuEfter .headline-hej {
         font-family: "Montserrat";
         font-size: 50px;
         font-weight: 700;
         letter-spacing: 5px;
         text-align: center;
         margin-top: 100px;
     }
     
     .HvadLederDuEfter .headline-bruger-navn {
         text-align: center;
         margin-top: 30px;
         margin-bottom: 15px;
     }
     
     .HvadLederDuEfter .headline-bruger-alder {
         text-align: center;
         margin-bottom: 30px;
     }
     
     .HvadLederDuEfter .big-width {
         max-width: 250px;
     }
     
     .HvadLederDuEfter .small-width {
         max-width: 90px;
     }
     
     .HvadLederDuEfter input {
         font-family: 'Montserrat';
         font-weight: 600;
         font-size: 30px;
         letter-spacing: 2px;
         text-align: center;
         -webkit-appearance: none;
         max-width: 90px;
         border: 5px solid white;
         -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0), 0 0 0px rgba(0, 0, 0, 0);
         -moz-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0), 0 0 0px rgba(0, 0, 0, 0);
         box-shadow: inset 0 0 0px rgba(0, 0, 0, 0), 0 0 0px rgba(0, 0, 0, 0);
     }
     
     .HvadLederDuEfter .btn-wrapper {
         margin: auto;
         width: 306px;
     }
     
     .HvadLederDuEfter a {
         text-decoration: none;
     }
     
     .HvadLederDuEfter .btn-leder-efter-en {
         font-family: 'Montserrat';
         font-weight: 700;
         font-size: 10px;
         letter-spacing: 2px;
         background-color: #C8C8C8;
         text-align: center;
         color: white;
         border-radius: 25px;
         width: 280px;
         margin-bottom: 17px;
         padding: 11px 13px;
     }
     
     .HvadLederDuEfter .btn-leder-efter-en-selected {
         background-color: #D67AD3;
         background-image: linear-gradient(#D67AD3, #9769D4);
     }
     
     .HvadLederDuEfter .btn-gaa-til-din-profil {
         font-family: 'Montserrat';
         font-weight: 700;
         font-size: 17px;
         letter-spacing: 2px;
         text-align: center;
         color: #9769D4;
         width: 250px;
         margin-top: 40px;
         padding: 11px 13px;
         border: 4px solid transparent;
         border-radius: 25px;
         background-color: white;
         background-clip: padding-box;
         border-radius: 25px;
         position: relative;
     }
     
     .HvadLederDuEfter .btn-gaa-til-din-profil::after {
         position: absolute;
         top: -4px;
         bottom: -4px;
         left: -4px;
         right: -4px;
         background: linear-gradient(#9769D4, rgb(214, 119, 211));
         content: '';
         z-index: -1;
         border-radius: 25px;
         box-shadow: 0 8px 10px rgba(0, 0, 0, .2);
     }
     
     .HvadLederDuEfter .btn-center-btn-gaa-til-din-profil {
         margin: 0 auto;
         width: 284px;
     }
     
     .HvadLederDuEfter .fa-cog {
         color: white;
     }
     
     .HvadLederDuEfter .edit-box {
         border-radius: 15px;
         overflow: hidden;
         width: 30px;
         height: 30px;
         background-color: #C8C8C8;
         border: 0px solid #C8C8C8;
         top: -10px;
         position: relative;
     }
</style>