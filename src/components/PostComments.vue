<template>
    <div>
        <h2>Comments on Post</h2>
        <ul>
            <li v-for="comment in comments" :key="comment.id">
                <p>{{ comment.body }}</p>
                <small>By: {{ comment.email }}</small>
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
            comments: [],
            page: 1,
        };
    },
    created() {
        this.fetchComments();
    },
    methods: {
        async fetchComments() {
            try {
                const response = await axios.get(`http://localhost:3000/autobots/posts/${this.$route.params.postId}/comments?page=${this.page}`);
                this.comments = response.data;
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        },
        nextPage() {
            this.page += 1;
            this.fetchComments();
        },
        prevPage() {
            this.page -= 1;
            this.fetchComments();
        },
    },
};
</script>
