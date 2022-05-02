<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import HomeEjercicio from "@/view/HomeEjercicio.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/ejercicio">Ejercicio</RouterLink>
        <RouterLink to="/alimentacion">Alimentación</RouterLink>
        <RouterLink to="/saludmentalydescanso"
          >Salud Mental y Descanso</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
</style>
