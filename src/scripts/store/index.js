import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: null,
        // user: { name: '@hello'},
        chats: [{
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
    },
    getters: {},
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        login({commit}, {email, password}) {
            return new Promise((resolve, reject) => {
                commit('setUser', {
                    name: '@pussy_1954',
                    email,
                    password
                });
                resolve();
            })
        },
        registration({commit}, {name, email, password}) {
            return new Promise((resolve, reject) => {
                commit('setUser', {
                    name,
                    email,
                    password
                });
                resolve();
            })
        },
        logout({commit}) {
            return new Promise((resolve, reject) => {
                commit('setUser', null);
                resolve();
            })
        }
    }
});

export default store;