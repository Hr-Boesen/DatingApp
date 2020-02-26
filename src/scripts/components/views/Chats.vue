<template>
    <base-view title="messages">
        <div class="chat-contacts">
            <!-- <router-link :to="{name: 'profile'}">
                <span class="btn-back btn-back--black">
                    <i class="fas fa-arrow-left"></i> TILBAGE
                </span>
            </router-link> -->
            <div class="chat-contacts__wrapper">
                <!-- Looping div -->
                <ul v-for="(chat, index) in chats" :key="index">
                    <li class="chat-contacts__container" @click="openChat(index)">
                        <img class="chat-contacts__img" :src="chat.photoUrl">
                        <div class="chat-contacts__name-message-container">
                            <div class="chat-contacts__name">{{chat.name.toUpperCase() }} {{chat.age}}</div>
                            <div>{{chat.message | snippet}}...</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </base-view>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Chats',

    computed: {
        ...mapState([
            'chats'
        ])
    },

    methods: {
        openChat(id) {
            this.$router.push(`/chats/${id}`);
        }
    }
}
</script>