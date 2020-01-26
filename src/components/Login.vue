<template>
  <div class="login">
    <div class="grid-container">
      <div class="item1">
        <div class="textBoxVelkommen">VELKOMMEN</div>
        <div class="opret-bruger">OPRET BRUGER</div>
      </div>
      <div class="item2">
        <router-link :to="{name: 'CreateProfileNameAgeSexuality'}">
          <div class="btn-facebook"> Facebook</div>
        </router-link>
      </div>
      <div class="item3">
        <router-link :to="{name: 'CreateProfileNameAgeSexuality'}">
          <div class="btn-google"> Google</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
  
      }
    }, created(){
      let vh = window.innerHeight * 0.01;

      document.documentElement.style.setProperty('--vh', `${vh}px`);
  
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .item1 {
    height: 40vh;
    height: calc(var(--vh, 1vh) * 40);
  }
  
  .item2 {
    height: 10vh;
    height: calc(var(--vh, 1vh) * 10);
  }
  
  .item3 {
    height: 50vh;
    height: calc(var(--vh, 1vh) * 50);
      }
  
  .login .textBoxVelkommen {
    padding-top: 14.5vh;
    font-family: "Montserrat";
    font-size: 25px;
    font-weight: 610;
    letter-spacing: 5px;
    text-align: center;
  }
  
  .login .opret-bruger {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 4px;
    text-align: center;
    padding-top: 10vh;
  }
  
  .login .btn-facebook {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 5px;
    text-align: center;
    background-color: #7D95CF;
    color: white;
    border-radius: 7px;
    width: 47vw;
    padding: 10px 7px;
    margin: 0 auto;
    margin-top: 2.5vh;
  }
  
  .login .btn-google {
    font-family: 'Montserrat';
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 5px;
    text-align: center;
    background-color: #C37573;
    color: white;
    border-radius: 7px;
    width: 47vw;
    padding: 10px 7px;
    margin: 0 auto;
   
  }
  
  .login a {
    text-decoration: none;
  }
  
  .login .grid-container {
    display: grid;
  }
  
  .login .grid-container>div {
    text-align: center;
    padding: 0px 0;
    font-size: 30px; 
  }
</style>
