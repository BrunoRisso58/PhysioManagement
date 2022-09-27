<template>
    <table class="table">
        <thead>
            <tr>
                <th>Nome</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="patient in patients" :key="patient.id">
                <td>{{ patient.name }}</td>
                <td class="seeMoreData">
                    <button class="seeMoreButton">Perfil</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>

export default {
    name: "PacientesTable",
    data() {
        return {
            patients: []
        }
    },
    methods: {
        async getPatients() {
            const req = await fetch("http://localhost:3000/patients");
            const data = await req.json();

            this.patients = data;
        }
    },
    mounted() {
        this.getPatients();
    }
}

</script>

<style scoped>
    .table {
        border-collapse: collapse;
        width: 90%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        margin: auto;
    }

    .table thead tr {
        background-color: #5CB8E4;
        text-align: left;
    }

    .table th, .table td {
        padding: 12px 15px;
    }

    .table tbody tr {
        border-bottom: thin solid #F2F2F2;
    }

    .table tbody tr:nth-of-type(even) {
        background-color: #F2F2F2;
    }

    .table tbody tr:last-of-type {
        border-bottom: 2px solid #5CB8E4;
    }

    .seeMoreData {
        text-align: right;
    }

    .seeMoreButton {
        background-color: #5CB8E4;
        border: none;
        padding: 10px 30px;
        font-weight: bold;
        border-radius: 5px;
        font-size: 1rem;
        letter-spacing: 0.2px;
    }

    .seeMoreButton:hover {
        background-color: #5cb9e4cb;
        cursor: pointer;
        transition: .2s;
    }
</style>