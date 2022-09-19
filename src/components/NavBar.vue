<template>
    <nav class="nav-container">
        <!-- <ul> -->
            <div class="item-container">
                <router-link class="nav-item" id="register" to="/cadastro">Cadastrar</router-link>
            </div>
            <div class="item-container">
                <router-link class="nav-item" id="dashboard" to="/">Dashboard</router-link>
            </div>
            <div class="item-container">
                <router-link class="nav-item" id="patients" to="/pacientes">Pacientes</router-link>
            </div>
        <!-- </ul> -->
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
            if (this.url.includes("/dashboard")) {
                let itemContainer = document.querySelector("#dashboard");
            }
        }
    }
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
    }

    .highlighted:hover {
        background-color: #5cb9e4cb;
    }
    
</style>