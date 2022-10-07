<template>
    <div class="perfil">
        <img class="img" :src="urlImg" alt="Foto do Usuário">
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
            <p>{{ (birthday.getDate()+1) + " / " + (birthday.getMonth()+1) + " / " + birthday.getFullYear()}}</p>
        </div>
        <div class="info">
            <label class="label-title">Endereço</label>
            <p>{{ address.street }}, {{ address.number }}, {{ address.neighborhood }}</p>
            <p>{{ address.city }} / {{ address.state }}</p>
        </div>
        <div class="info">
            <label class="label-title">Plano</label>
            <p  v-if="planId == 1">Básico - Seção {{ section }} / 20</p>
            <p  v-else-if="planId == 2">Intermediário - Seção {{ section }} / 30</p>
            <p  v-else-if="planId == 3">Avançado - Seção {{ section }} / 40</p>
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
            urlImg: null,
            address: null,
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
            
            this.id = res.id;
            this.name = res.name;
            res.gender == "M" ? this.gender = "Masculino" : this.gender = "Feminino";
            this.birthday = new Date(res.birthday);
            this.urlImg = res.urlImg;
            this.address = res.address;
            this.planId = res.planId;
            this.section = res.section;
        }
    },
    created() {
        this.getPatientInformation();
    }
}
</script>

<style scoped>
    .perfil {
        margin: auto;
        width: 60%;
        text-align: center
    }

    .img {
        width: 256px;
        border-radius: 50%;
    }

    .info {
        margin: 20px 0;
        text-align: left
    }

    .credits {
        font-size: 12px
    }
</style>