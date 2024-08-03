<template>
    <div>
        <h2>Posts by Autobot</h2>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <router-link :to="{ name: 'PostComments', params: { postId: post.id } }">
                    {{ post.title }}
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
            posts: [],
            page: 1,
        };
    },
    created() {
        this.fetchPosts();
    },
    methods: {
        async fetchPosts() {
            try {
                const response = await axios.get(`http://localhost:3000/autobots/${this.$route.params.id}/posts?page=${this.page}`);
                this.posts = response.data;
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        },
        nextPage() {
            this.page += 1;
            this.fetchPosts();
        },
        prevPage() {
            this.page -= 1;
            this.fetchPosts();
        },
    },
};
</script>
