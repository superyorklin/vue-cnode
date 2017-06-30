<template>
  <div id="app">
    <cnode-head></cnode-head>
    <router-view></router-view>
  </div>
</template>

<script>
import cnodeHead from './components/cnodeHead.vue';

console.log(cnodeHead);
export default {
  name: 'app',
  components: {
    cnodeHead
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

#app{
  background: #e1e1e1;
}

</style>
