<template>
    <nav class="nav-container">
        <a href="/">
            <div class="item-container" id="patients">
                <router-link class="nav-item" to="/">Pacientes</router-link>
            </div>
        </a>
        <a href="/cadastrar">
            <div class="item-container" id="register">
                <router-link class="nav-item" to="/cadastrar">Cadastrar</router-link>
            </div>
        </a>
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
        width: 50%;
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