<script setup>
import { RouterLink, RouterView } from "vue-router";
export default {
  components: {
    Header,
  },
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink class="btn btn-primary" to="/">Home</RouterLink>
      <RouterLink class="btn btn-primary" to="/ejercicio">Ejercicio</RouterLink>
      <RouterLink class="btn btn-primary" to="/alimentacion"
        >Alimentación</RouterLink
      >
      <RouterLink class="btn btn-primary" to="/saludmentalydescanso"
        >Salud Mental y Descanso</RouterLink
      >
    </nav>
    <!-- <RouterView /> -->
  </div>
</template>

<style>
</style>
