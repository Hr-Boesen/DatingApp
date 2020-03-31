<template>
    <base-view title="Profile test">
        <div class="create-your-profile">
            <div class="btn-build">
                <button v-if="count !== -1" @click="changeView('yourCube')" class="button button--gradient">Test Cube</button>
            </div>

            <div class="center">
                <section v-if="count === 0">
                    <input v-model="age" class="input__field" type="number" placeholder="Enter your age">
                    <br>
                    <button @click="firstQuestion()" class="button button--gradient">save</button>
                </section>
                <section v-if="count !== 0 && count !== -1">
                    <h3>{{this.questionsAndAnswersAll[this.count].question}}</h3>
                    <br>
                    <button @click="nextQuestion('yes')" class="button button--gradient">yes</button>
                    <button @click="nextQuestion('no')" class="button button--gradient">no</button>
                </section>
            </div>

            <section v-if="count === -1">
                <div class=" grid-container">
                    <div class="btn-grid"> <button v-if="count === -1" @click="changeView('buildCube')" class="button button--gradient">Test questions</button></div>
                    <div class="grid-item" v-for="cube in testCube" :key="cube.id"
<<<<<<< HEAD
                     :style="{'background-color': cube.color}" @click="modifyCube(cube.id)" :id="'cubeIdItem' +cube.id">
                       <h3 v-if="cube.open == true && cube.editMode == false" >{{cube.cubeText}}</h3> 
                       <input v-if="cube.editMode == true" type="text" @keyup="editCube($event, cube.id)" :value="cube.cubeText" :style="{'background-color': cube.color}">
                       <h3 v-if="cube.open == false && cube.editMode == false">{{cube.likes}}</h3>
                       <img class="cube-img" :src="cube.imgURL">
=======
                        :style="{'background-color': cube.color}">
                        <h3 v-if="cube.open == true">{{cube.cubeText}}</h3> 
                        <h3 v-if="cube.open == false">{{cube.likes}}</h3>
                        <img class="cube-img" :src="cube.imgURL">
>>>>>>> master
                    </div>
                </div>
            </section>
        </div>
    </base-view>
</template>

<script>
    import {
        questionsAndAnswers, questionsBasic
    } from '../common/questionsAndAnswers.js'
    import {
        randomColorArray, testImages
    } from '../common/testArrays.js'
    export default {
        name: 'HomeView',
    
        data() {
            return {
                count: 0,
                countMemory: null,
                age: null,
                questionsAndAnswersAll: questionsBasic.concat(questionsAndAnswers),
                questionsAndAnswers: questionsAndAnswers,
                randomColorArray: randomColorArray,
                testImages: testImages
             
            }
        },
        methods: {
            firstQuestion() {
               
                this.questionsAndAnswersAll[this.count].answer = this.age;
                this.questionsAndAnswersAll[this.count].cubeText = this.age;
                this.count++;
            },
            nextQuestion(answer) {
                this.questionsAndAnswersAll[this.count].answer = answer;
                this.count++;
            },
            changeView(view) {
                console.log(view)
                if (view === "yourCube") {
                    //Save the count number
                    this.countMemory = this.count;
                    this.count = -1;
                    console.log(this.countMemory);
                }else{
                    this.count = this.countMemory;   
                }
    
            }, 
            modifyCube(id){
                for(let cube of questionsAndAnswers){
                    if(cube.id == id){
                       cube.editMode = true;
                    }else{
                        cube.editMode = false; 
                    }
                }
                 questionsAndAnswers.push({});
                 questionsAndAnswers.pop({});
                console.log(questionsAndAnswers)

            }, 
            editCube(event, id){

                 for(let cube of questionsAndAnswers){
                    if(cube.id == id){
                       cube.cubeText = event.target.value;
                    }
                }
                questionsAndAnswers.push({});
                 questionsAndAnswers.pop({});

            },
            changeItemColorAndLikesRandom(){
                return this.questionsAndAnswers.filter(item => {
                    
                    if(item.imgURL === null){
                        item.color =  randomColorArray[Math.floor(Math.random() * 30)]
                    }
                     if(item.open === false && item.imgURL === null){
                      
                       if(item.id%3  === 0 ){
                        item.likes = Math.floor(Math.random() * 20) 
                       }
                    }
                       return (item);
                })
            }
        },
        computed: {
            testCube() {
                return this.questionsAndAnswers.filter(item => {
                    
                      if(item.id%2  === 0 ){
                        item.open = true;
                    }
                    return (item);
                })
            }
    
        }, 
        created(){
            this.changeItemColorAndLikesRandom();
        }
    }
</script>