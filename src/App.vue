<script setup>
import MenuBar from './partials/MenuBar.vue';
import FooterBar from './partials/FooterBar.vue';
</script>

<template>
  <menu-bar />
  <RouterView />
  <footer-bar class="mt-auto" />
</template>
