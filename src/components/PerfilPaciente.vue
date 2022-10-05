<template>
    <div class="perfil">
        <img class="img" src="../../public/img/user.png" alt="Foto do Usuário">
        <a class="credits" href="https://www.flaticon.com/free-icons/user" title="user icons" target="_blank">User icons created by Smashicons - Flaticon</a>
        <div class="info">
            <label class="label-title">Nome</label>
            <p>{{ name }}</p>
        </div>
        <div class="info">
            <label class="label-title">Gênero</label>
            <p>{{ gender }}</p>
        </div>
        <div class="info">
            <label class="label-title">Data de Nascimento</label>
            <p>{{ birthday }}</p>
        </div>
        <div class="info">
            <label class="label-title">Endereço</label>
            <p>Rua {{ address.street }}, número {{ address.number }}, bairro {{ address.neighborhood }}</p>
            <p>{{ address.city }} / {{ address.state }}</p>
        </div>
        <div class="info">
            <label class="label-title">Plano</label>
            <p>Básico - Seção 10 / 20</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PerfilPaciente",
    data() {
        return {
            id: null,
            name: null,
            gender: null,
            birthday: null,
            address: [],
            planId: null,
            section: null,
            url: null
        }
    },
    methods: {
        async getPatientInformation() {
            let url = window.location.href;
            this.id = url.substr(29);

            const req = await fetch(`http://localhost:3000/patients/${this.id}`);
            const res = await req.json();
            
            this.name = res.name;
            console.log(this.name)
            this.gender = res.gender;
            console.log(this.gender)
            this.birthday = res.birthday;
            this.address = res.address;
            this.planId = res.planId;
            this.section = res.section
        }
    },
    mounted() {
        this.getPatientInformation();
    }
}
</script>

<style scoped>
    .perfil {
        margin: 50px
    }

    .img {
        width: 256px
    }

    .credits {
        font-size: 12px
    }
</style>