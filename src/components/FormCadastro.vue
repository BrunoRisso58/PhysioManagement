<template>
    <span v-show="this.msg" class="msg">{{ this.msg }}</span>
    <form id="create-patient-form" @submit="createPatient">
        <div class="field">
            <label for="name" class="label-title">Nome</label><br>
            <input type="text" v-model="name" class="input input-text" id="name" placeholder="Nome..." required>
        </div>
        <div class="field">
            <label for="gender" class="label-title">Gênero</label><br>
            <input type="radio" v-model="gender" value="M" class="input-radio" name="gender" id="male">
            <label for="male">Masculino</label>
            <input type="radio" v-model="gender" value="F" class="input-radio" name="gender" id="female" required>
            <label for="female" required>Feminino</label>
        </div>
        <div class="field">
            <label for="birthday" class="label-title">Data de Nascimento</label><br>
            <input type="date" v-model="birthday" class="input" name="birthday" id="birthday" required>
        </div>
        <div class="field">
            <label for="name" class="label-title">Imagem</label><br>
            <input type="text" v-model="urlImg" class="input input-text" id="name" placeholder="Url da imagem..." required>
        </div>
        <div class="field">
            <label for="address" class="label-title">Endereço</label><br>
            <input type="text" v-model="street" placeholder="Nome da Rua..." name="street" class="input input-text" id="street" required><br>
            <input type="text" v-model="number" placeholder="Número da residência..." name="number" class="input input-text" id="number" required><br>
            <input type="text" v-model="neighborhood" placeholder="Nome do Bairro..." name="neighborhood" class="input input-text" id="neighborhood" required><br>
            <input type="text" v-model="city" placeholder="Cidade..." name="city" class="input input-text" id="city" required><br>
            <input type="text" v-model="state" placeholder="Estado..." name="state" class="input input-text" id="state" required><br>
        </div>
        <div class="field">
            <label for="plan" class="label-title">Plano</label><br>
            <select v-model="plan" class="input" name="plans" id="plans" required>
                <option value="1">Básico</option>
                <option value="2">Intermediário</option>
                <option value="3">Avançado</option>
            </select>
        </div>
        <div class="field">
            Seção: <br><input type="number" v-model="section" class="input input-text" id="section" placeholder="Seção..." min="0" max="40" required>
        </div>
        <input type="submit" class="input input-submit" value="Cadastrar">
    </form>
</template>

<script>
export default {
    name: "FormCadastro",
    data() {
        return {
            name: null,
            gender: null,
            birthday: null,
            urlImg: null,
            street: null,
            number: null,
            neighborhood: null,
            city: null,
            state: null,
            plan: null,
            msg: null,
            section: 0
        }
    },
    methods: {
        async createPatient(e) {
            e.preventDefault();
            const data = {
                name: this.name,
                birthday: this.birthday,
                gender: this.gender,
                urlImg: this.urlImg,
                address: {
                    street: this.street,
                    number: this.number,
                    neighborhood: this.neighborhood,
                    city: this.city,
                    state: this.state
                },
                planId: this.plan,
                section: this.section
            }
            const dataJson = JSON.stringify(data);

            const req = await fetch("http://localhost:3000/patients", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: dataJson
            });
            const res = await req.json();
            console.log(res);

            this.msg = "Paciente adicionado com sucesso!";
            
            setTimeout(() => {
                this.msg = null;
            }, 4000)

            this.name = null,
            this.gender = null,
            this.birthday = null,
            this.urlImg = null,
            this.street = null,
            this.number = null,
            this.neighborhood = null,
            this.city = null,
            this.state = null,
            this.plan = null
            this.section = 0
        }
    }
}
</script>

<style scoped>
    #create-patient-form {
        margin: 50px;
        text-align: center;
    }

    .label-title {
        font-size: 1.3rem;
        font-weight: bold;
        margin: 10px 0;
    }

    .input {
        margin: 15px 0;
        font-size: 1rem;
        padding: 10px;
        border-radius: 5px;
        width: 50%;
        border: 2px solid #181818;
    }

    .input-radio {
        margin: 15px 10px;
    }

    label[for="male"] {
        margin-right: 30px
    }

    #birthday {
        padding: 10px
    }

    .input-submit {
        border: none;
        width: 15%;
        background-color: #5CB8E4;
        cursor: pointer;
        font-weight: bold;
        letter-spacing: 0.2px
    }

    .input-submit:hover {
        background-color: #5cb9e4cb;
    }

    .msg {
        background-color: #2ECC71;
        border-radius: 15px;
        padding: 10px;
        position: fixed;
        top: 20px;
        right: 20px;
    }
</style>