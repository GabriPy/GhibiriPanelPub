<template>
    <!-- <div class="login-container">
        <form @submit.prevent="login">
            <h2>Login</h2>
            <input type="text" v-model="username" placeholder="Username" required>
            <input type="password" v-model="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    </div> -->

    <div class="columns container-ghibiri">
        <div style="height: 100vh"></div>
        <div class="column"></div>
        <div class="column is-4">
            <form @submit.prevent="login" class="box">
                <div class="content">
                    <!-- <div class="columns"> -->
                        <!-- <div class="column"></div> -->
                        <div style="text-align:center" class=""><h1>Effettua il Login</h1></div>
                        <!-- <div class="column"></div> -->
                    <!-- </div> -->
                </div>
                <div class="field">
                    <label for="" class="label">Username</label>
                    <div class="control">
                        <input type="text" v-model="username" class="input" placeholder="es. MarioRossi11">
                    </div>
                </div>
                <div class="field">
                    <label for="" class="label">Password</label>
                    <div class="control">
                        <input type="password" v-model="password" class="input" placeholder="********">
                    </div>
                </div>
                <div class="control">
                    <button class="button is-primary" type="submit">Login</button>
                </div>
            </form>
        </div>
        <div class="column"></div>
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
        async login() {
            try {
                const response = await axios.post('http://localhost:3000/login', {
                    username: this.username,
                    password: this.password
                });
                if (response.data.success) {
                    localStorage.setItem('user', this.username);
                    this.$router.push('/dashboard');
                } else {
                    alert('Login fallito');
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
.container-ghibiri {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
