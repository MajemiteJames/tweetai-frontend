<template>
    <div>
        <h2>Autobots</h2>
        <ul>
            <li v-for="autobot in autobots" :key="autobot.id">
                <router-link :to="{ name: 'AutobotPosts', params: { id: autobot.id } }">
                    {{ autobot.name }}
                </router-link>
            </li>
        </ul>
        <button @click="prevPage" :disabled="page === 1">Previous</button>
        <button @click="nextPage">Next</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            autobots: [],
            page: 1,
        };
    },
    created() {
        this.fetchAutobots();
    },
    methods: {
        async fetchAutobots() {
            try {
                const response = await axios.get(`http://localhost:3000/autobots?page=${this.page}`);
                this.autobots = response.data;
            } catch (error) {
                console.error('Error fetching autobots:', error);
            }
        },
        nextPage() {
            this.page += 1;
            this.fetchAutobots();
        },
        prevPage() {
            this.page -= 1;
            this.fetchAutobots();
        },
    },
};
</script>
