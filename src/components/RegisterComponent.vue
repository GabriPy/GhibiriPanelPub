<template>
    <div class="register-container">
        <form @submit.prevent="register">
            <h2>Registrazione</h2>
            <input type="text" v-model="username" placeholder="Username" required>
            <input type="password" v-model="password" placeholder="Password" required>
            <button type="submit">Registra</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        async register() {
            try {
                const response = await axios.post('http://localhost:3000/register', {
                    username: this.username,
                    password: this.password
                });
                if (response.data.success) {
                    alert('Registrazione riuscita');
                } else {
                    alert('Registrazione fallita');
                }
            } catch (error) {
                console.error('Errore:', error);
            }
        }
    }
};
</script>

<style scoped>
/* Aggiungi qui il tuo stile */
</style>
