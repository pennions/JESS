<script setup>
import MenuBar from "./components/MenuBar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>

<template>
  <menu-bar />
  <RouterView />
  <footer-bar class="mt-auto" />
</template>
