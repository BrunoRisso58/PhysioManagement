<template>
    <nav class="nav-container">
        <ul>
            <li class="nav-item"><router-link to="/cadastro">Cadastrar</router-link></li>
            <li class="nav-item highlighted"><router-link to="/">Dashboard</router-link></li>
            <li class="nav-item"><router-link to="/pacientes">Pacientes</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default { 
    name: "NavBar",
    data() {
        return {
            url: window.location.href
        }
    },
    mounted() {
        setTimeout(() => {
            this.highlightNavItem();
        }, 500)
    },
    methods: {
        highlightNavItem() {
            // destacar dinamicamente o item certo da navbar
        }
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        background-color: #F2F2F2;
        text-align: center;
        padding: 32px 0;
        font-size: 1.2rem;
    }

    .nav-item {
        display: inline;
        margin: 0 10vw;
    }

    .nav-item a {
        text-decoration: none;
        color: #181818;
        font-weight: bold;
    }

    .highlighted {
        background-color: #fff
    }
</style>