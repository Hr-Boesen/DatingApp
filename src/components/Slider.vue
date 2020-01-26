<template>
  <div class="slider">
  
    <router-link :to="{name: 'Profil'}">
      <div class="tilbageKnap">
        <i class="fas fa-arrow-left"></i> TILBAGE
      </div>
      <div class="slidingWord">{{words[count]}}</div>
    </router-link>
      <div class="slidecontainer">
        <input @mousemove="slider" @touchmove="slider" @touchend="pickWord" @mouseup="pickWord" type="range" min="1" max="100" value="50" class="custom-slider" id="myRange">
      </div>
  </div>
</template>

<script>
  export default {
    name: 'slider',
    data() {
      return {
  
        range: null,
        words: ["kæreste", "playboy", "klog", "morsdreng", "vegetar", "Trimmet", "flobby", "humoristisk"],
        count: 0
  
      }
    },
    methods: {
      slider(e) {
        this.range = document.querySelector("#myRange").value;
        this.wordSize = document.querySelector(".slidingWord");
        this.wordSize.style.fontSize = this.range + "px";
      },
      pickWord() {
  
        this.count++;
      }
    },
    created() {
  
    }
  }
</script>

<style lang="scss">

   @import "./src/styles/main.scss";

   .slider {
     width: 100vw;
     height: 100vh;
     background-color: $purpleLight;
     background-image: $gradient;
     position: relative;
     
     .triangle-left {
       width: 0;
       height: 0;
       border-top: 10px solid transparent;
       border-right: 270px solid white;
       border-bottom: 3px solid transparent;
       border-radius: 2%;
       opacity: 0.5;
       margin-top: 400px;
       margin-left: 25px;
       position: absolute;
     }
     
     .slidingWord {
       font-family: 'Montserrat';
       color: white;
       text-align: center;
       width: 100%;
       top: 40vh;
       position: absolute;
       font-size: 3rem;
     }
     .tilbageKnap {
       font-family: 'Montserrat';
       font-weight: 700;
       font-size: 15px;
       letter-spacing: 2px;
       text-align: center;
       color: white;
       border-radius: 25px;
       width: 112px;
       padding: 4px 4px;
       margin-top: 20px;
       position: absolute;
     }
     .fa-backward {
       color: white;
     }
     a {
       text-decoration: none;
     }
     .slidecontainer {
       margin-top: 80vh;
       width: 90vw;
       height: 6vh;
       position: absolute;
       padding: 0rem 0rem 0rem 1.5rem;
     }
     .custom-slider {
       -webkit-appearance: none;
       width: 85vw;
       height: .5vh;
       background: white;
       outline: none;
       opacity: 0.2;
       -webkit-transition: .2s;
       transition: opacity .2s;
     }
     .custom-slider:hover {
       opacity: 1;
     }
     .custom-slider::-webkit-slider-thumb {
       -webkit-appearance: none;
       appearance: none;
       width: 45px;
       height: 45px;
       background: white;
       cursor: pointer;
       border-radius: 50%;
     }
     .custom-slider::-moz-range-thumb {
       width: 45px;
       height: 45px;
       background: white;
       cursor: pointer;
     }
   }
</style>