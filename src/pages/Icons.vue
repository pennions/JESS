<script setup>
import { onMounted } from "vue";

const icon_example =
  '<div class="icon-arrow-big-down icon-small"></div>\n<div class="icon-arrow-big-down text-primary"></div>\n<div class="icon-arrow-big-down icon-medium icon-success"></div>\n<div class="icon-arrow-big-down icon-large text-danger"></div>';

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
          JESS is tooled to make use of the Lucide icons font. Please check their <a href="https://lucide.dev/guide/packages/lucide-static">website</a> for a guide.
        </p>
        <p>
          It has a base font-size of 2.4rem, all the text-color utilities work as well and you can use the following classes to adjust it:
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

        <pre class="border"><code class="language-html">{{ icon_example }}</code></pre>
      </article>
    </section>
  </main>
</template>