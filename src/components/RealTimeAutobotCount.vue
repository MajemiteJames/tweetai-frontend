<template>
    <div>
        <h2>Current Autobot Count: {{ autobotCount }}</h2>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            autobotCount: 0,
        };
    },
    created() {
        this.fetchAutobotCount();
        setInterval(this.fetchAutobotCount, 5000); // Update every 5 seconds
    },
    methods: {
        async fetchAutobotCount() {
            try {
                const response = await axios.get('http://localhost:3000/autobots');
                this.autobotCount = response.data.length;
            } catch (error) {
                console.error('Error fetching autobot count:', error);
            }
        },
    },
};
</script>
