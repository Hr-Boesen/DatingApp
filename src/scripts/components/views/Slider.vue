<template>
    <div class="slider">
    
        <router-link :to="{name: 'Profile'}">
            <span class="btn-back">
                <i class="fas fa-arrow-left"></i> TILBAGE
            </span>
            <span class="slidingWord">{{words[count]}}</span>
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