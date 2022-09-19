<template>
    <h1 id="page-title">{{ title }}</h1>
</template>

<script>
export default { 
    name: "PageTitle",
    props: {
        title: String
    },
}
</script>