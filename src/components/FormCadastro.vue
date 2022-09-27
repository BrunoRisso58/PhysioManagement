<template>
    <form id="create-patient-form" @submit="createPatient">
        <div class="field">
            <label for="name" class="label-title">Nome</label><br>
            <input type="text" id="name" v-model="name">
        </div>
        <div class="field">
            <label for="gender" class="label-title">Gênero</label><br>
            <input type="radio" name="gender" id="male">
            <label for="male">Masculino</label>
            <input type="radio" name="gender" id="female">
            <label for="female">Feminino</label>
        </div>
        <div class="field">
            <label for="birthday">Data de Nascimento</label><br>
            <input type="date" name="birthday" id="birthday">
        </div>
        <div class="field">
            <label for="address">Endereço</label><br>
            Rua: <input type="text" name="street" id="street"><br>
            Número: <input type="text" name="number" id="number"><br>
            Bairro: <input type="text" name="neighborhood" id="neighborhood"><br>
            Cidade: <input type="text" name="city" id="city"><br>
            Estado: <input type="text" name="state" id="state"><br>
        </div>
        <div class="field">
            <label for="plan">Plano</label><br>
            <select name="plans" id="plans">
                <option value="">Selecione o plano</option>
                <option value="1">Básico</option>
                <option value="2">Intermediário</option>
                <option value="3">Avançado</option>
            </select>
        </div>

        <br>
        <input type="submit" value="Cadastrar">
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
        }
    }
}
</script>

<style scoped>
    #create-patient-form {
        margin: 50px
    }
</style>