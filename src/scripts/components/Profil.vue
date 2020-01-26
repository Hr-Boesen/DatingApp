<template>
  <div class="profil">
      <div class="tag-et-foto-wrapper">
        <div class="headline-bruger-navn">
          {{name ="JOHAN"}}
        </div>
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
    props: ['name', 'age'],
    data() {
      return {
  
  
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

<style lang="scss"> 

@import "../../styles/screen.scss";

.profil{

   a {
    text-decoration: none;
  }

  
 .btn-tag-foto-lav-sky {
    font-family: 'Montserrat';
    font-weight: 700;
    @include buttonSize(0); 
    letter-spacing: 2px;
    text-align: center;
    color: white;
    border-radius: 25px;
    width: 30vw;
    padding: 4px 4px;
    background-color: $purpleLight;
    background-image: $gradient;
    position: relative;
    margin: 0 auto;
    margin-top: 18vh;
  }
  
  .btn-lav-sky {
    @include buttonSize(0); 
    width: 30vw;
    font-family: 'Montserrat';
    font-weight: 600;
    letter-spacing: 2px;
    text-align: center;
    border-radius: 25px;
    color: white;
    padding: 4px 4px;
    background-color: $purpleLight;
    background-image: $gradient;
    margin: 0 auto;
    margin-top: 8vh;
    left: 24vw;
    position: absolute;
    z-index: 1;
  }
  
  .headline-bruger-navn {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 2rem;

  }
  
  .tag-et-foto-wrapper {
    margin: 0 auto;
    margin-top: 5vh;
    width: 70vw;
    height: 50vh;
    background: white;
  }
  
   .tag-et-foto-inner-wrapper {
    margin: 0 auto;
    margin-top: 1vh;
    width: 70vw;
    height: 40vh;
    background: #9B9696;
    position: relative;
    overflow: auto;
  }
  
  .fa-cog {
    color: white;
  }
  
   .edit-box {
    border-radius: 15px;
    overflow: hidden;
    width: 30px;
    height: 30px;
    background-color: $editBoxColor;
    border: 0px solid $editBoxColor;
    top: -10px;
    position: relative;
  }
  
   .lav-sky-wrapper {
   width: 80vw;
   height: 30vw;
   position: relative;
   margin: 0 auto;
  }
  
   .sky1 {
  height: 1.3rem;

  width: 17.8vw;
  height: 3.27vh;
  margin-top: 2vh;
  margin-left: 9vw;
  position: absolute;
  background: $greyBoxColor;
  }
  
   .sky2 {
   
  width: 30vw;
  height: 2.6vh;
  margin-top:6vh;
  margin-left: 2vw;
  position: absolute;
  background: $greyBoxColor;
  }
  
   .sky3 {
    width: 24vw;
  height: 2.8vh;
  margin-top: 9.2vh;
  margin-left: 7.6vw;
    position: absolute;
    background: $greyBoxColor;
  }
  
   .sky4 {
   width: 18vw;
  height: 2.9vw;
  margin-top: 12.9vh;
  margin-left: 21vw;
   position: absolute;
   background: $greyBoxColor;
  }
  
.sky5 {
     width: 31.5vw;
  height: 2.4vh;
  margin-top: 2.2vh;
  margin-left: 43vw;
  background: $greyBoxColor;
  position: absolute;
  }
  
   .sky6 {
      
  width: 41.5vw;
  height: 4.4vh;
  margin-top: 5.2vh;
  margin-left: 33vw;
  background: $greyBoxColor;
  position: absolute;
  }
  
   .sky7 {
    width: 33vw;
  height: 2.4vh;
  margin-top: 10vh;
  margin-left: 35vw;
  background: $greyBoxColor;
  position: absolute;
  }
  
  .profil-procent-overskrift {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 2px;
    text-align: center;
    margin-bottom: .8vh;
  }
  
  .profil-procent-grafik {
    border-radius: 25px;
    height: 2.4vh;
    width: 72vw;
    padding: 4px 4px;
    background-color: $procentGrey;
    position: relative;
    margin: 0 auto;
  }
  
   .profil-procent-grafik-bar {
    border-radius: 25px;
    height: 2.4vh;
    width: 16vw;
    padding: 4px 4px;
    background-color: $purpleDark ;
    margin: -4px -4px -4px -4px;
  }
  
  .profil-procent-oversigt {
    margin-top: 4vh;
  }
  
   .profil-procent-tilgaengelig {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: .7rem;
    letter-spacing: 2px;
    text-align: center;
    margin-top: 1.4vh;
  }
    }
</style>
