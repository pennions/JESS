<template>
  <nav
    id="main-nav"
    class="main-navigation py-0"
  >
    <ul class="desktop">
      <li>
        <a href="/">
          <h2 class="header-padding">Jelmers Easy Style System</h2>
        </a>
      </li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/layout">Layout</router-link></li>
      <li><router-link to="/buttons-and-inputs">Buttons and Inputs</router-link></li>
      <li><router-link to="/components">Components</router-link></li>
      <li><router-link to="/typography">Typography</router-link></li>
      <li><router-link to="/utility-classes">Utility classes</router-link></li>
      <li><router-link to="/icons">Icons</router-link></li>
    </ul>
    <div class="mobile w-100">
      <div>
        <a href="/">
          <h2 class="header-padding">Jelmers Easy Style System</h2>
        </a>
      </div>
      <section class="pl-0 three-columns">
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
a[class$="-active"] {
  text-decoration: underline;
}
</style>

