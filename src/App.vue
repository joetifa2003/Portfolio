<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import Nav from "@/components/Nav";
export default Vue.extend({
  components: {
    Nav,
  },
});
</script>

<style></style>
