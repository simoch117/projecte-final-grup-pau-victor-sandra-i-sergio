<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<template>
  <div>
    <RouterLink class="btn btn-primary" to="/ejercicio">Ejercicio</RouterLink>
    <RouterLink class="btn btn-primary" to="/alimentacion"
      >Alimentación</RouterLink
    >
    <RouterLink class="btn btn-primary" to="/saludmental"
      >Salud Mental y Descanso</RouterLink
    >

    <RouterView />
  </div>
</template>
