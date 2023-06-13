<script setup>
import { onBeforeMount, onMounted } from 'vue';

const icon_example =
  '<div class="icon-arrow-big-down icon-small"></div>\n<div class="icon-arrow-big-down text-primary"></div>\n<div class="icon-arrow-big-down icon-medium icon-success"></div>\n<div class="icon-arrow-big-down icon-large text-danger"></div>';

const coloured_icon_example =
  '<div class="icon-coffee icon-grey"></div>\n<div class="icon-coffee icon-grey-dark"></div>\n<div class="icon-coffee icon-primary"></div>\n<div class="icon-coffee icon-accent"></div>\n<div class="icon-coffee icon-danger"></div>\n<div class="icon-coffee icon-success"></div>\n<div class="icon-coffee icon-black"></div>\n  \n<div class="bg-black">\n  <div class="icon-coffee icon-white"></div>\n</div>';

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <main>
    <section class="p-3">
      <article class="card">
        <header>
          <h1>Icons</h1>
        </header>

        <p>
          JESS is tooled to make use of the Lucide icons font. Please check
          their
          <a href="https://lucide.dev/guide/packages/lucide-static">website</a>
          for a guide.
        </p>
        <p>
          It has a base font-size of 2.4rem and you can use the following
          classes to adjust it:
        </p>

        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Font size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code class="language-html">icon-small</code></td>
              <td>2rem</td>
            </tr>
            <tr>
              <td><code class="language-html">icon-medium</code></td>
              <td>3.6rem</td>
            </tr>
            <tr>
              <td><code class="language-html">icon-large</code></td>
              <td>4.6rem</td>
            </tr>
          </tbody>
        </table>
        <p><b>Example:</b></p>
        <div class="icon-arrow-big-down icon-small"></div>
        <div class="icon-arrow-big-down text-primary"></div>
        <div class="icon-arrow-big-down icon-medium icon-success"></div>
        <div class="icon-arrow-big-down icon-large text-danger"></div>

        <pre
          class="border"><code class="language-html">{{ icon_example }}</code></pre>
      </article>

      <article class="card flex-layout two-columns justify-between">
        <div>
          <h2 class="mb-3">Icon colour utilities</h2>
          <code class="language-html">icon-grey </code> <br />
          <code class="language-html">icon-grey-dark </code> <br />
          <code class="language-html">icon-primary </code><br />
          <code class="language-html">icon-accent </code><br />
          <code class="language-html">icon-danger </code><br />
          <code class="language-html">icon-success </code><br />
          <code class="language-html">icon-black </code><br />
          <code class="language-html">icon-white </code><br />
          <small>* you can also apply any text-color utility class</small>
        </div>
        <div>
          <p>Examples:</p>
          <div class="row align-center mt-2 p-2">
            <div class="icon-coffee icon-grey"></div>
            Grey icon
          </div>

          <div class="row align-center mt-2 p-2">
            <div class="icon-coffee icon-grey-dark"></div>
            Dark Grey icon
          </div>

          <div class="row align-center mt-2 p-2">
            <div class="icon-coffee icon-primary"></div>
            Primary icon
          </div>

          <div class="row align-center mt-2 p-2">
            <div class="icon-coffee icon-accent"></div>
            Accent icon
          </div>

          <div class="row align-center mt-2 p-2">
            <div class="icon-coffee icon-danger"></div>
            Danger icon
          </div>
          <div class="row align-center mt-2 p-2">
            <div class="icon-coffee icon-success"></div>
            Success icon
          </div>

          <div class="row align-center mt-2 p-2">
            <div class="icon-coffee icon-black"></div>
            Black icon
          </div>

          <div class="bg-black text-white row align-center mt-2 p-2">
            <div class="icon-coffee icon-white"></div>
            White icon
          </div>
        </div>

        <pre
          class="border w-100"><code class="language-html">{{ coloured_icon_example }}</code></pre>
      </article>
    </section>
  </main>
</template>
