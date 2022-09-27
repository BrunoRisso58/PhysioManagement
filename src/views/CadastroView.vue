<template>
    <PageTitle title="Cadastrar" />
    <FormCadastro />
</template>

<script>
import PageTitle from "../components/PageTitle.vue"
import FormCadastro from "@/components/FormCadastro.vue";

export default {
    name: "RegisterView",
    components: {
        PageTitle,
        FormCadastro
    },
}
</script>