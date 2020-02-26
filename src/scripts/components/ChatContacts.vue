<template>
    <div class="chat-contacts">
         <router-link :to="{name: 'Profile'}">
            <span class="btn-back btn-back--black">
                    <i class="fas fa-arrow-left"></i> TILBAGE
                </span>
             </router-link>
        <div class="chat-contacts__wrapper">
            <!-- Looping div -->
            <ul v-for="(contact, index) in contacts" :key="index">
                <li class="chat-contacts__container">
                    <img class="chat-contacts__img" :src="contact.photoUrl">
                    <div class="chat-contacts__name-message-container">
                        <div class="chat-contacts__name">{{contact.name.toUpperCase() }} {{contact.age}}</div>
                        <div>{{contact.message | snippet}}...</div>
                    </div>
                </li>
    
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ChatContacts',
        data() {
            return {
                contacts: [{
                        name: "Dora",
                        age: 28,
                        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla assumenda molestiae fugiat, quasi exercitationem asperiores qui saepe magni porro illum, cumque dolor, itaque distinctio architecto dolores repellat vel sequi.",
                        photoUrl: "https://randomuser.me/api/portraits/thumb/women/9.jpg"
                    },
                    {
                        name: "Amelia",
                        age: 22,
                        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla assumenda molestiae fugiat, quasi exercitationem asperiores qui saepe magni porro illum, cumque dolor, itaque distinctio architecto dolores repellat vel sequi.",
                        photoUrl: "https://randomuser.me/api/portraits/thumb/women/72.jpg"
                    },
                    {
                        name: "Kristin",
                        age: 25,
                        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla assumenda molestiae fugiat, quasi exercitationem asperiores qui saepe magni porro illum, cumque dolor, itaque distinctio architecto dolores repellat vel sequi.",
                        photoUrl: "https://randomuser.me/api/portraits/thumb/women/45.jpg"
                    }
                ]
            }
        }
    }
</script>