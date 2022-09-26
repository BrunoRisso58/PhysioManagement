<template>
    <PageTitle title="Pacientes" />
    <PacientesTable />
</template>

<script>
import PageTitle from "../components/PageTitle.vue"
import PacientesTable from "@/components/PacientesTable.vue";

export default {
    name: "PacientesView",
    components: {
        PageTitle,
        PacientesTable
    }
}
</script>