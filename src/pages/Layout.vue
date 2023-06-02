<script setup>
import { inject, onMounted } from "vue";

const block_100 =
  '<section class="flex-layout">\n    <div>Block 100% width</div>\n</section>';
const block_50 =
  '<section class="flex-layout two-columns">\n    <div>Block 50% width</div>\n    <div>Block 50% width</div>\n</section>';
const block_33 =
  '<section class="flex-layout three-columns">\n    <div>Block 33.336% width</div>\n    <div>Block 33.336% width</div>\n    <div>Block 33.336% width</div>\n</section>';
const block_25 =
  '<section class="flex-layout four-columns">\n    <div>Block 25% width</div>\n</section>';
const block_20 =
  '<section class="flex-layout five-columns">\n    <div>Block 20% width</div>\n    <div>Block 20% width</div>\n    <div>Block 20% width</div>\n    <div>Block 20% width</div>\n    <div>Block 20% width</div>\n</section>';
const block_16 =
  '<section class="flex-layout six-columns">\n    <div>Block 16.667% width</div>\n    <div>Block 16.667% width</div>\n    <div>Block 16.667% width</div>\n    <div>Block 16.667% width</div>\n    <div>Block 16.667% width</div>\n    <div>Block 16.667% width</div>\n</section>';
const block_8 =
  '<section class="flex-layout twelve-columns">\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n</section>';
const aside_layout =
  '<main>\n    <aside class="sidebar">\n        Element with auto width\n    </aside>\n    <section class="main">\n        Element that takes the remaining space\n    </section>\n</main>';
const nav_layout =
  '<nav class="main-navigation">\n    <ul>\n      <li><a href>Link 1</a></li>\n      <li><a href>Link 2</a></li>\n      <li><a href>Link 3</a></li>\n    </ul>\n</nav>';
const footer_layout = '<footer class="main-footer">Footer</footer>';
const mixed_layout =
  '<section class="flex-layout">\n  <div class="demo-block">Block</div>\n  <section class="flex-layout two-columns">\n    <section class="flex-layout five-columns">\n      <div class="demo-block">Block</div>\n      <div class="demo-block">Block</div>\n      <div class="demo-block">Block</div>\n      <div class="demo-block">Block</div>\n      <div class="demo-block">Block</div>\n    </section>\n    <div class="demo-block">Block</div>\n  </section>\n  <section class="row">\n    <div class="demo-block w-75">Block</div>\n    <div class="demo-block w-25">Block</div>\n  </section>\n</section>';

const scrollTo = inject("scrollTo");

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <main class="flex-layout pl-0 pt-3 pr-3">
    <aside class="sidebar mr-3">
      <nav class="sticky p-3">
        <ul>
          <li><a @click="scrollTo('single-column')">Single column</a></li>
          <li><a @click="scrollTo('two-columns')">Two columns</a></li>
          <li><a @click="scrollTo('three-columns')">Three columns</a></li>
          <li><a @click="scrollTo('four-columns')">Four columns</a></li>
          <li><a @click="scrollTo('five-columns')">Five columns</a></li>
          <li><a @click="scrollTo('six-columns')">Six columns</a></li>
          <li><a @click="scrollTo('twelve-columns')">Twelve columns</a></li>
          <li><a @click="scrollTo('aside')">Aside</a></li>
          <li><a @click="scrollTo('nav')">Nav</a></li>
          <li><a @click="scrollTo('footer')">Footer</a></li>
          <li><a @click="scrollTo('nested')">Nested sections example</a></li>
          <li>
            <a
              @click="scrollTo('main-nav')"
              class="button normal desktop"
            >Back to top</a>
          </li>
        </ul>
      </nav>
    </aside>

    <section class="flex-layout main">
      <article class="p-3">
        <header>
          <h1>Layout elements</h1>
        </header>
        <p>
          Use the class
          <code class="language-html">flex-layout</code> as a base for an easy flex layout.
          It will apply <code class="language-css">display:flex</code> and will unlock more classes that can be used on the child elements.
          <br />
          The child elements are all displayed by default at
          <code class="language-css">width: 100%</code> which results in a
          single column. <br />
          All columns will be automatically scaled down and wrapped when the
          viewport can not fit all the columns properly. <br />
          You can try it by resizing the browser.
        </p>
        <hr />
        <small>
          <b>N.B.</b> The blue fill texture is for demonstration purpose only.
        </small>
      </article>
      <article
        id="single-column"
        class="p-3"
      >
        <header>
          <h2>Single column</h2>
        </header>
        <p>
          All child elements start out as
          <code class="language-css">width:100%;</code> and will take up more
          space if there is room, up to their specified maximum.
        </p>
        <section>
          <div class="demo-block">Block 100% width</div>
        </section>
        <pre class="border"><code class="language-html">{{ block_100 }}</code></pre>
      </article>

      <article id="two-columns">
        <header>
          <h2>Two columns</h2>
        </header>
        <p>
          Add <code class="language-html">class="flex-layout two-columns"</code> to get a
          double column layout.
        </p>
        <ul>
          <li>
            It will display two columns when the viewport has
            <code class="language-css">min-width:576px;</code>
          </li>
        </ul>
        <section class="flex-layout two-columns">
          <div class="demo-block">Block 50% width</div>
          <div class="demo-block">Block 50% width</div>
        </section>
        <pre class="border"><code class="language-html">{{ block_50 }}</code></pre>
      </article>

      <article id="three-columns">
        <header>
          <h2>Three columns</h2>
        </header>
        <p>
          Add <code class="language-html">class="flex-layout three-columns"</code> to get a
          three column layout.
        </p>
        <ul>
          <li>
            It will display three columns when the viewport has
            <code class="language-css">min-width:768px;</code>
          </li>
          <li>
            It will display two columns when the viewport has
            <code class="language-css">min-width:576px;</code>
          </li>
        </ul>
        <section class="flex-layout three-columns">
          <div class="demo-block">Block 33.336% width</div>
          <div class="demo-block">Block 33.336% width</div>
          <div class="demo-block">Block 33.336% width</div>
        </section>
        <pre class="border"><code class="language-html">{{ block_33 }}</code></pre>
      </article>

      <article id="four-columns">
        <header>
          <h2>Four columns</h2>
        </header>
        <p>
          Add <code class="language-html">class="flex-layout four-columns"</code> to get a
          four column layout.
        </p>
        <ul>
          <li>
            It will display four columns when the viewport has
            <code class="language-css">min-width:992px;</code>
          </li>
          <li>
            It will display three columns when the viewport has
            <code class="language-css">min-width:768px;</code>
          </li>
          <li>
            It will display two columns when the viewport has
            <code class="language-css">min-width:576px;</code>
          </li>
        </ul>

        <section class="flex-layout four-columns">
          <div class="demo-block">Block 25% width</div>
          <div class="demo-block">Block 25% width</div>
          <div class="demo-block">Block 25% width</div>
          <div class="demo-block">Block 25% width</div>
        </section>
        <pre class="border"><code class="language-html">{{ block_25 }}</code></pre>
      </article>

      <article id="five-columns">
        <header>
          <h2>Five columns</h2>
        </header>
        <p>
          Add <code class="language-html">class="flex-layout five-columns"</code> to get a
          five column layout.
        </p>
        <ul>
          <li>
            It will display five columns when the viewport has
            <code class="language-css">min-width:1200px;</code>
          </li>
          <li>
            It will display four columns when the viewport has
            <code class="language-css">min-width:992px;</code>
          </li>
          <li>
            It will display three columns when the viewport has
            <code class="language-css">min-width:768px;</code>
          </li>
          <li>
            It will display two columns when the viewport has
            <code class="language-css">min-width:576px;</code>
          </li>
        </ul>
        <section class="flex-layout five-columns">
          <div class="demo-block">Block 20% width</div>
          <div class="demo-block">Block 20% width</div>
          <div class="demo-block">Block 20% width</div>
          <div class="demo-block">Block 20% width</div>
          <div class="demo-block">Block 20% width</div>
        </section>
        <pre class="border"><code class="language-html">{{ block_20 }}</code></pre>
      </article>

      <article id="six-columns">
        <header>
          <h2>Six columns</h2>
        </header>
        <p>
          Add <code class="language-html">class="flex-layout six-columns"</code> to get a
          six column layout.
        </p>
        <ul>
          <li>
            It will display six columns when the viewport has
            <code class="language-css">min-width:1400px;</code>
          </li>
          <li>
            It will display five columns when the viewport has
            <code class="language-css">min-width:1200px;</code>
          </li>
          <li>
            It will display four columns when the viewport has
            <code class="language-css">min-width:992px;</code>
          </li>
          <li>
            It will display three columns when the viewport has
            <code class="language-css">min-width:768px;</code>
          </li>
          <li>
            It will display two columns when the viewport has
            <code class="language-css">min-width:576px;</code>
          </li>
        </ul>
        <section class="flex-layout six-columns">
          <div class="demo-block">Block 16.667% width</div>
          <div class="demo-block">Block 16.667% width</div>
          <div class="demo-block">Block 16.667% width</div>
          <div class="demo-block">Block 16.667% width</div>
          <div class="demo-block">Block 16.667% width</div>
          <div class="demo-block">Block 16.667% width</div>
        </section>
        <pre class="border"><code class="language-html">{{ block_16 }}</code></pre>
      </article>

      <article id="twelve-columns">
        <header>
          <h2>Twelve columns</h2>
        </header>
        <p>
          Add <code class="language-html">class="twelve-columns"</code> to get a
          twelve column layout.
        </p>
        <ul>
          <li>
            It will display twelve columns when the viewport has
            <code class="language-css">min-width:1400px;</code>
          </li>
          <li>
            It will display six columns when the viewport has
            <code class="language-css">min-width:1200px;</code>
          </li>
          <li>
            It will display five columns when the viewport has
            <code class="language-css">min-width:992px;</code>
          </li>
          <li>
            It will display four columns when the viewport has
            <code class="language-css">min-width:768px;</code>
          </li>
          <li>
            It will display three columns when the viewport has
            <code class="language-css">min-width:576px;</code>
          </li>
        </ul>
        <section class="flex-layout twelve-columns">
          <div class="demo-block">Block 8.3333% width</div>
          <div class="demo-block">Block 8.3333% width</div>
          <div class="demo-block">Block 8.3333% width</div>
          <div class="demo-block">Block 8.3333% width</div>
          <div class="demo-block">Block 8.3333% width</div>
          <div class="demo-block">Block 8.3333% width</div>
          <div class="demo-block">Block 8.3333% width</div>
          <div class="demo-block">Block 8.3333% width</div>
          <div class="demo-block">Block 8.3333% width</div>
          <div class="demo-block">Block 8.3333% width</div>
          <div class="demo-block">Block 8.3333% width</div>
          <div class="demo-block">Block 8.3333% width</div>
        </section>
        <pre class="border"><code class="language-html">{{ block_8 }}</code></pre>
      </article>

      <article id="aside">
        <header>
          <h2>Aside layout</h2>
        </header>
        <p>
          The <code class="language-css">.sidebar</code> can be used if you want to have a small - wide layout or wide - small layout for that matter.
          <br />
          It will apply:
          <code class="language-css">width:auto;</code><br />
          The element with the <code class="language-css">.main</code> class will have
          <code class="language-css">flex:1;</code>applied and take the remaining
          space. <br />
        </p>
        <pre class="border"><code class="language-html">{{ aside_layout }}</code></pre>
        <hr />
        <small>
          <b>Fun fact:</b> the current page uses this aside layout for having a
          vertical navigation bar.
        </small>
      </article>

      <article id="nav">
        <header>
          <h2>Nav</h2>
        </header>
        <p>
          When you apply
          a <code class="language-css">.main-navigation</code> to a <code class="language-html">nav</code> element it will:
        </p>
        <ul>
          <li>Have a box-shadow</li>
          <li>Have <code class="language-css">max-height: 6rem;</code></li>
          <li>Have <code class="language-css">padding: 1.5rem;</code></li>
        </ul>
        <hr />
        <section>
          <nav class="demo-navbar">Navigation bar</nav>
        </section>
        <p>
          A navigation bar with links using
          <code class="language-html">ul</code> and
          <code class="language-html">li</code>:
        </p>
        <section>
          <nav class="demo-navbar">
            <ul>
              <li><a href>Link 1</a></li>
              <li><a href>Link 2</a></li>
              <li><a href>Link 3</a></li>
            </ul>
          </nav>
        </section>
        <hr />
        <pre class="border"><code class="language-html">{{ nav_layout }}</code></pre>
      </article>

      <article id="footer">
        <header>
          <h2>Footer</h2>
        </header>
        <p>
          When you add the class
          <code class="language-css">.main-footer</code> to a <code class="language-html">&lt;footer&gt;</code> element it
          will:
        </p>
        <ul>
          <li>Have a box-shadow</li>
          <li>Have <code class="language-css">min-height: 5rem;</code></li>
          <li>Have <code class="language-css">padding: 1.5rem;</code></li>
        </ul>
        <hr />
        <section>
          <footer class="demo-footer">Footer</footer>
        </section>
        <pre class="border"><code class="language-html">{{ footer_layout }}</code></pre>
      </article>

      <article id="nested">
        <header>
          <h2>Nested sections example</h2>
        </header>
        <section class="flex-layout mb-0">
          <div class="demo-block">Block</div>
          <section class="flex-layout two-columns">
            <section class="flex-layout five-columns">
              <div class="demo-block">Block</div>
              <div class="demo-block">Block</div>
              <div class="demo-block">Block</div>
              <div class="demo-block">Block</div>
              <div class="demo-block">Block</div>
            </section>
            <div class="demo-block">Block</div>
          </section>
          <section class="row">
            <div class="demo-block w-75">Block</div>
            <div class="demo-block w-25">Block</div>
          </section>
        </section>
        <pre class="border mt-0"><code class="language-html">{{ mixed_layout }}</code></pre>
      </article>
    </section>
  </main>
</template>
