<template>
    <div class="dashboard-container">
        <h2>Benvenuto nella tua area personale!</h2>
        <p>Contenuto della dashboard...</p>
        <button @click="logout">Logout</button>
        <router-link to="/register">Registra un nuovo utente</router-link>
    </div>

    <div class="columns container-ghibiri">
        <div style="height: 100vh"></div>
        <div class="column"></div>
        <div class="column is-4">
            <form class="box">
                <div class="content">
                    <!-- <div class="columns"> -->
                        <!-- <div class="column"></div> -->
                        <div style="text-align:center" class=""><h1>Dashboard Ghibiri</h1></div>
                        <!-- <div class="column"></div> -->
                    <!-- </div> -->
                </div>
                <div class="field">
                    <div class="columns" style="text-align:center; align-items: center">
                        <div class="column">
                            <button @click="this.$router.push('/register')" class="button is-primary btn-75-width" type="submit">Registra un utente</button>
                        </div>
                        <div class="column">
                            <button class="button is-primary btn-75-width" type="submit">Work In Progress</button>
                        </div>
                        <div class="column">
                            <button class="button is-primary btn-75-width" type="submit">Work In Progress</button>
                        </div>
                    </div>
                    
                </div>
                <div class="control">
                    <div class="columns">
                        <div class="column"></div>
                        <div class="column">
                            <button @click="logout" class="button is-danger btn-max-width" type="submit" style="text-align:center; align-items: center">Logout</button>
                        </div>
                        <div class="column"></div>
                    </div>
                    
                </div>
            </form>
        </div>
        <div class="column"></div>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem('user');
            this.$router.push('/');
        }
    }
};
</script>

<style scoped>
/* Aggiungi qui il tuo stile */
.btn-max-width {
    width: 100%;
}

.btn-75-width {
    width: 90%;
}
</style>
