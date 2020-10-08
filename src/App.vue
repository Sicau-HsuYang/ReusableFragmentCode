<!--
 * @Author: JohnYang
 * @Date: 2020-10-08 22:05:47
 * @LastEditors: JohnYang
 * @LastEditTime: 2020-10-08 23:22:19
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    {{ demo }}
    <FormControl type="textarea" v-model="demo" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {},
  data() {
    return {
      demo: ""
    };
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
