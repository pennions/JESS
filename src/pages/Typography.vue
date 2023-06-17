<script setup>
import { onMounted } from 'vue';

const typography_blockquote =
  '<blockquote class="w-16">\n  A famous quote of someone, spanning multiple lines.\n  <cite>Anonymous</cite>\n</blockquote>\n\n<article class="p-0 w-16 card">\n  <blockquote>\n    A famous quote of someone, spanning multiple lines.\n    <cite>Anonymous</cite>\n  </blockquote>\n</article>';

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <main class="flex-layout">
    <section class="px-3">
      <article class="flex-layout px-3 card">
        <header>
          <h1>Typography</h1>
        </header>
        <div class="body column gap-3">
          <p>
            JESS uses the following font-size, based on a 62.5% of the default
            font-size. <br />
            This translates to 0.1rem equals 1px.
          </p>
          <section class="flex-layout two-columns">
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>Specified font-size</th>
                    <th>Computed pixels</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>h1</td>
                    <td>3.2rem</td>
                    <td>32px</td>
                  </tr>
                  <tr>
                    <td>h2</td>
                    <td>2.4rem</td>
                    <td>24px</td>
                  </tr>
                  <tr>
                    <td>h3</td>
                    <td>1.8rem</td>
                    <td>18px</td>
                  </tr>
                  <tr>
                    <td>h4</td>
                    <td>-</td>
                    <td>16px</td>
                  </tr>
                  <tr>
                    <td>h5</td>
                    <td>-</td>
                    <td>13.28px</td>
                  </tr>
                  <tr>
                    <td>label</td>
                    <td>1.4rem</td>
                    <td>14px</td>
                  </tr>
                  <tr>
                    <td>small</td>
                    <td>-</td>
                    <td>13.3333px</td>
                  </tr>
                  <tr>
                    <td>p</td>
                    <td>-</td>
                    <td>16px</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h1>Header 1</h1>
              <h2>Header 2</h2>
              <h3>Header 3</h3>
              <h4>Header 4</h4>
              <h5>Header 5</h5>
              <label>label</label> <br />
              <small>small</small>
              <p>Normal text in a paragraph</p>
            </div>
          </section>

          <section class="flex-layout gap-3 my-2">
            <header>
              <h2>Blockquote</h2>
            </header>

            <p>
              Blockquote will have 100% width. To shorten it, use a width
              utility class. In this case
              <code class="language-html">w-16</code> is applied:
            </p>

            <blockquote class="w-16">
              A famous quote of someone, spanning multiple lines.
              <cite>Anonymous</cite>
            </blockquote>
            <p>
              Blockquote directly inside an article, which has the
              <code class="language-html">p-0</code> class and a width utility
              class:
            </p>

            <article class="p-0 w-16 card">
              <blockquote>
                A famous quote of someone, spanning multiple lines.
                <cite>Anonymous</cite>
              </blockquote>
            </article>

            <pre
              class="border"><code class="language-html">{{ typography_blockquote }}</code></pre>
          </section>

          <section>
            <header>
              <h2>Text modifiers</h2>
            </header>
            <section class="flex-layout two-columns pt-3">
              <table class="border-left">
                <thead>
                  <th>Tag</th>
                  <th>Result</th>
                </thead>
                <tbody>
                  <tr>
                    <td><code class="language-html">abbr</code></td>
                    <td><abbr title="Abbreviation">Abbr.</abbr></td>
                  </tr>
                  <tr>
                    <td>
                      <code class="language-html">strong</code>
                      <code class="language-html">b</code>
                    </td>
                    <td><strong>Bold</strong></td>
                  </tr>
                  <tr>
                    <td>
                      <code class="language-html">i</code>
                      <code class="language-html">em</code>
                      <code class="language-html">cite</code>
                    </td>
                    <td><em>Italic</em></td>
                  </tr>
                  <tr>
                    <td><code class="language-html">del</code></td>
                    <td><del>Deleted</del></td>
                  </tr>
                  <tr>
                    <td><code class="language-html">ins</code></td>
                    <td><ins>Inserted</ins></td>
                  </tr>
                  <tr>
                    <td>
                      <code class="language-html">kbd</code>
                      <code class="language-html">code</code>
                    </td>
                    <td><kbd>Ctrl + S</kbd></td>
                  </tr>
                </tbody>
              </table>

              <table class="border-left">
                <thead>
                  <th>Tag</th>
                  <th>Result</th>
                </thead>
                <tbody>
                  <tr>
                    <td><code class="language-html">mark</code></td>
                    <td><mark>Highlighted</mark></td>
                  </tr>
                  <tr>
                    <td>
                      <code class="language-html">strike</code>
                      <code class="language-html">s</code>
                    </td>
                    <td><s>Strikethrough</s></td>
                  </tr>
                  <tr>
                    <td>
                      <code class="language-html">small</code>
                    </td>
                    <td><small>Small </small></td>
                  </tr>
                  <tr>
                    <td><code class="language-html">sub</code></td>
                    <td>Text <sub>sub</sub></td>
                  </tr>
                  <tr>
                    <td><code class="language-html">sup</code></td>
                    <td>Text <sup>sup</sup></td>
                  </tr>
                  <tr>
                    <td><code class="language-html">u</code></td>
                    <td><u>Underline</u></td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
        </div>
      </article>
    </section>
  </main>
</template>
