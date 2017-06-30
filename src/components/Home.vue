<template id="home">
    <div class="container">
        <div class="side"></div>
        <div class="main">
            <div v-for="item in content">
                <router-link to="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  '/hello': 'Hello'
}
</script>

<style>
.container{
    width: 90%;
    min-width: 960px;
    margin: 15px auto;
}
.side{
    float: right;
    width:280px;
    height: 1000px;
    background: #555;
}
.main{
    margin-right: 305px;
    height: 100px;
    background: #ccc;
}
</style>


