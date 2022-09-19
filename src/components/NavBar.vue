<template>
    <nav class="nav-container">
        <div class="item-container" id="register">
            <router-link class="nav-item" to="/cadastrar">Cadastrar</router-link>
        </div>
        <div class="item-container" id="dashboard">
            <router-link class="nav-item" to="/">Dashboard</router-link>
        </div>
        <div class="item-container" id="patients">
            <router-link class="nav-item" to="/pacientes">Pacientes</router-link>
        </div>
    </nav>
</template>

<script>

export default {
    name: "NavBar"
}
</script>

<style scoped>

    .item-container {
        display: inline-block;
        padding: 30px;
        background-color: #F2F2F2;
        text-align: center;
        font-size: 1.1rem;
        font-weight: bold;
        width: 33.3%;
        cursor: pointer
    }

    .item-container:hover {
        background-color: #dcdcdca9
    }

    .nav-item {
        text-decoration: none;
        color: #181818;
        display: inline;
        margin: 0 10vw;
    }

    .highlighted {
        background-color: #5CB8E4;
        transition: .2s
    }

    .highlighted:hover {
        background-color: #5cb9e4cb;
    }
    
</style>