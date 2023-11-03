<template>
  <nav id="main-nav" class="main-navigation">
    <ul class="large-screen row no-wrap align-center">
      <li>
        <router-link to="/" class="no-deco">
          <h2>Jelmers Easy Style System</h2>
        </router-link>
      </li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/layout">Layout</router-link></li>
      <li>
        <router-link to="/buttons-and-inputs">Buttons and Inputs</router-link>
      </li>
      <li><router-link to="/components">Components</router-link></li>
      <li><router-link to="/typography">Typography</router-link></li>
      <li><router-link to="/utility-classes">Utility classes</router-link></li>
      <li><router-link to="/icons">Icons</router-link></li>
    </ul>
    <div class="small-screen">
      <div>
        <router-link to="/" class="no-deco">
          <h2 class="pb-3">Jelmers Easy Style System</h2>
        </router-link>
      </div>
      <section class="flex-layout three-columns gap-3">
        <router-link to="/">Home</router-link>
        <router-link to="/layout">Layout</router-link>
        <router-link to="/buttons-and-inputs">Buttons and Inputs</router-link>
        <router-link to="/components">Components</router-link>
        <router-link to="/typography">Typography</router-link>
        <router-link to="/utility-classes">Utility classes</router-link>
        <router-link to="/icons">Icons</router-link>
      </section>
    </div>
  </nav>
</template>
<style scoped>
a[class$='-active'] {
  text-decoration: underline;
}
.no-deco {
  text-decoration: none;
}
</style>
