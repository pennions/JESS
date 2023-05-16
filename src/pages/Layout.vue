<script setup>
import { inject, onMounted } from "vue";

const block_100 = "<section>\n    <div>Block 100% width</div>\n</section>";
const block_50 =
  '<section class="two-columns">\n    <div>Block 50% width</div>\n    <div>Block 50% width</div>\n</section>';
const block_33 =
  '<section class="three-columns">\n    <div>Block 33.336% width</div>\n    <div>Block 33.336% width</div>\n    <div>Block 33.336% width</div>\n</section>';
const block_25 =
  '<section class="four-columns">\n    <div>Block 25% width</div>\n</section>';
const block_20 =
  '<section class="five-columns">\n    <div>Block 20% width</div>\n    <div>Block 20% width</div>\n    <div>Block 20% width</div>\n    <div>Block 20% width</div>\n    <div>Block 20% width</div>\n</section>';
const block_16 =
  '<section class="six-columns">\n    <div>Block 16.667% width</div>\n    <div>Block 16.667% width</div>\n    <div>Block 16.667% width</div>\n    <div>Block 16.667% width</div>\n    <div>Block 16.667% width</div>\n    <div>Block 16.667% width</div>\n</section>';
const block_8 =
  '<section class="twelve-columns">\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n    <div>Block 8.3333% width</div>\n</section>';
const aside_layout =
  "<main>\n    <aside>\n        Element with auto width\n    </aside>\n    <section>\n        Element that takes the remaining space\n    </section>\n</main>";
const nav_layout =
  "<body>\n    <nav>Navigation bar</nav>\n    ...\n</body>\n\n<body>\n  <nav>\n    <ul>\n      <li><a href>Link 1</a></li>\n      <li><a href>Link 2</a></li>\n      <li><a href>Link 3</a></li>\n    </ul>\n  </nav>\n  ...\n</body>\n\n<!-- or -->\n\n<body>\n  <header>\n    <nav>\n      <ul>\n        <li><a href>Link 1</a></li>\n        <li><a href>Link 2</a></li>\n        <li><a href>Link 3</a></li>\n      </ul>\n    </nav>\n  </header>\n  ...\n</body>";
const footer_layout = "<body>\n    ...\n    <footer>Footer</footer>\n</body>";
const mixed_layout =
  '<section>\n  <div class="demo-block">Block</div>\n  <section class="p-0 two-columns">\n    <section class="five-columns">\n      <div class="demo-block">Block</div>\n      <div class="demo-block">Block</div>\n      <div class="demo-block">Block</div>\n      <div class="demo-block">Block</div>\n      <div class="demo-block">Block</div>\n    </section>\n    <div class="demo-block">Block</div>\n  </section>\n  <section class="row p-0">\n    <div class="demo-block w-75">Block</div>\n    <div class="demo-block w-25">Block</div>\n  </section>\n</section>';

const scrollTo = inject("scrollTo");

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <main>
    <aside>
      <nav class="sticky">
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

    <section>
      <article>
        <header>
          <h1>Layout elements</h1>
        </header>
        <p>
          The elements
          <code class="language-html">&lt;main&gt;</code>,
          <code class="language-html">&lt;section&gt;</code> and
          <code class="language-html">&lt;fieldset&gt;</code> are all displayed
          with <code class="language-css">display:flex</code>.
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
      <article id="single-column">
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
          Add <code class="language-html">class="two-columns"</code> to get a
          double column layout.
        </p>
        <ul>
          <li>
            It will display two columns when the viewport has
            <code class="language-css">min-width:576px;</code>
          </li>
        </ul>
        <section class="two-columns">
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
          Add <code class="language-html">class="three-columns"</code> to get a
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
        <section class="three-columns">
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
          Add <code class="language-html">class="four-columns"</code> to get a
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

        <section class="four-columns">
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
          Add <code class="language-html">class="five-columns"</code> to get a
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
        <section class="five-columns">
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
          Add <code class="language-html">class="six-columns"</code> to get a
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
        <section class="six-columns">
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
        <section class="twelve-columns">
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
          The aside layout can be used if you want to have a small - wide
          layout. horizontal layout. <br />
          The aside element has a
          <code class="language-css">width:auto;</code><br />
          The element on the right will have
          <code class="language-css">flex:1;</code> and take the remaining
          space. <br />
          Only the first element must be
          <code class="language-html">&lt;aside&gt;</code>, the right side can
          be any element.
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
          When you include a
          <code class="language-html">&lt;nav&gt;</code> element directly inside
          a <code class="language-html">&lt;body&gt;</code> element it will:
        </p>
        <ul>
          <li>Have a box-shadow</li>
          <li>Have <code class="language-css">max-height: 6rem;</code></li>
          <li>Have <code class="language-css">padding: 1.5rem;</code></li>
        </ul>
        <hr />
        <small>
          <b>N.B</b> you can also wrap the
          <code class="language-html">&lt;nav&gt;</code> element inside a
          <code class="language-html">&lt;header&gt;</code> element.
        </small>
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
          When you include a
          <code class="language-html">&lt;footer&gt;</code> element directly
          inside a <code class="language-html">&lt;body&gt;</code> element it
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
        <section>
          <div class="demo-block">Block</div>
          <section class="p-0 two-columns">
            <section class="five-columns">
              <div class="demo-block">Block</div>
              <div class="demo-block">Block</div>
              <div class="demo-block">Block</div>
              <div class="demo-block">Block</div>
              <div class="demo-block">Block</div>
            </section>
            <div class="demo-block">Block</div>
          </section>
          <section class="row p-0">
            <div class="demo-block w-75">Block</div>
            <div class="demo-block w-25">Block</div>
          </section>
        </section>
        <pre class="border"><code class="language-html">{{ mixed_layout }}</code></pre>
      </article>
    </section>
  </main>
</template>
