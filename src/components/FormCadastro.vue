<template>
    <form id="create-patient-form" @submit="createPatient">
        <div class="field">
            <label for="name" class="label-title">Nome</label><br>
            <input type="text" class="input input-text" id="name" placeholder="Nome..." v-model="name">
        </div>
        <div class="field">
            <label for="gender" class="label-title">Gênero</label><br>
            <input type="radio" class="input-radio" name="gender" id="male">
            <label for="male">Masculino</label>
            <input type="radio" class="input-radio" name="gender" id="female">
            <label for="female">Feminino</label>
        </div>
        <div class="field">
            <label for="birthday" class="label-title">Data de Nascimento</label><br>
            <input type="date" class="input" name="birthday" id="birthday">
        </div>
        <div class="field">
            <label for="address" class="label-title">Endereço</label><br>
            Rua: <br><input type="text" placeholder="Rua..." name="street" class="input input-text" id="street"><br>
            Número: <br><input type="text" placeholder="Número..." name="number" class="input input-text" id="number"><br>
            Bairro: <br><input type="text" placeholder="Bairro..." name="neighborhood" class="input input-text" id="neighborhood"><br>
            Cidade: <br><input type="text" placeholder="Cidade..." name="city" class="input input-text" id="city"><br>
            Estado: <br><input type="text" placeholder="Estado..." name="state" class="input input-text" id="state"><br>
        </div>
        <div class="field">
            <label for="plan" class="label-title">Plano</label><br>
            <select class="input" name="plans" id="plans">
                <option value="">Selecione o plano</option>
                <option value="1">Básico</option>
                <option value="2">Intermediário</option>
                <option value="3">Avançado</option>
            </select>
        </div>
        <input type="submit" class="input input-submit" value="Cadastrar">
    </form>
</template>

<script>
export default {
    name: "FormCadastro",
    data() {
        return {
            name: null
        }
    },
    methods: {
        createPatient(e) {
            e.preventDefault();
            console.log("Enviou!");
        }
    }
}
</script>

<style scoped>
    #create-patient-form {
        margin: 50px
    }

    .label-title {
        font-size: 1.3rem;
        font-weight: bold;
        display: inline-block;
        margin: 10px 0
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
</style>