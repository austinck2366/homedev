<template>
<div>
<Header/>
<div
    <h1>The Home Component</h1>

</div>
</template>


<script>
import Header from "./Header.vue";
export default {
        name: "Home",
        components: {
            Header
        }
    }

</script>

<style>
    body{
        padding: 30px;
    }
</style>