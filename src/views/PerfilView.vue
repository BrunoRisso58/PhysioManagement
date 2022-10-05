<template>
    <PageTitle title="Perfil" />
    <PerfilPaciente />
</template>

<script>
import PerfilPaciente from "../components/PerfilPaciente.vue";
import PageTitle from "../components/PageTitle.vue";

export default {
    name: "PerfilView",
    components: {
        PerfilPaciente,
        PageTitle
    }
}
</script>