<template>
    <div class="chat">
    
        <div class="chat__wrapper">
            <li class="chat__container">
    
                <div class="chat__name-message-container">
                    <div class="chat__name">{{contact.name.toUpperCase() }} {{contact.age}}
                        <i class="fas fa-arrow-right"></i>
                    </div>
    
                </div>
            </li>
    
    
    
    
    
    
            <ul v-for="(message, index) in messages" :key="index">
    
                <li v-if="message.name == 'Dora'" li class="chat__message-container">
                    <img class="chat__img--small" :src="message.photoUrl">
                    <div class="chat__message-box chat__message-box--left">
                        {{message.content}}
                    </div>
                </li>
    
                <li v-else class="chat__message-container">
                    <div class="chat__message-box">
                        {{message.content}}
                    </div>
                    <img class="chat__img--small" :src="message.photoUrl">
                </li>
    
    
            </ul>
        </div>
    
    
    
    </div>
</template>

<script>
    export default {
        name: 'Chat',
        data() {
            return {
                contact: {
                    name: "Dora",
                    age: 28,
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla assumenda molestiae fugiat, quasi exercitationem asperiores qui saepe magni porro illum, cumque dolor, itaque distinctio architecto dolores repellat vel sequi.",
                    photoUrl: "https://randomuser.me/api/portraits/thumb/women/9.jpg"
                },
    
                messages: [{
                        content: "Lorem ipsum dolor sit amet consectetur adipisicing",
                        name: "Dora",
                        timestamp: 1574235153284,
                        photoUrl: "https://randomuser.me/api/portraits/thumb/women/9.jpg"
    
                    },
                    {
                        content: "Lorem ipsum dolor sit amet",
                        name: "John",
                        timestamp: 1574235153286,
                        photoUrl: 'https://randomuser.me/api/portraits/thumb/women/72.jpg'
                    },
                    {
                        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla",
                        name: "Dora",
                        timestamp: 1574235153289,
                        photoUrl: 'https://randomuser.me/api/portraits/thumb/women/72.jpg'
                    },
                    {
                        content: "Lorem ipsum dolor",
                        name: "John",
                        timestamp: 1574235153290,
                        photoUrl: "https://randomuser.me/api/portraits/thumb/women/9.jpg"
                    }
                ]
            }
        }
    }
</script>