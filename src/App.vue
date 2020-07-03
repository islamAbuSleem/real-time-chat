<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import welcome from "./components/welcome";

export default {
  name: "App",
  components: {
    welcome
  }
};
</script>

<style>
</style>
