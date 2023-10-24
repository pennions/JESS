<script setup>
import { inject, onMounted } from 'vue';

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
  '<main class="flex-layout">\n    <aside class="sidebar">\n        Element with auto width\n    </aside>\n    <section class="main">\n        Element that takes the remaining space\n    </section>\n</main>';
const nav_layout =
  '<nav class="main-navigation">\n    <ul>\n      <li><a href>Link 1</a></li>\n      <li><a href>Link 2</a></li>\n      <li><a href>Link 3</a></li>\n    </ul>\n</nav>';
const footer_layout = '<footer class="main-footer">Footer</footer>';
const mixed_layout =
  '<section class="flex-layout gap-3">\n  <div class="demo-block">Block</div>\n  <section class="flex-layout two-columns">\n    <section class="flex-layout five-columns">\n      <div class="demo-block">Block</div>\n      <div class="demo-block">Block</div>\n      <div class="demo-block">Block</div>\n      <div class="demo-block">Block</div>\n      <div class="demo-block">Block</div>\n    </section>\n    <div class="demo-block">Block</div>\n  </section>\n  <section class="row">\n    <div class="demo-block w-75">Block</div>\n    <div class="demo-block w-25">Block</div>\n  </section>\n</section>';

const table =
  '<table>\n  <thead>\n    <tr>\n      <th>Column header 1</th>\n      <th>Column header 2</th>\n      <th>Column header 3</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>A</td>\n      <td>B</td>\n      <td>C</td>\n    </tr>\n    <tr>\n      <td>D</td>\n      <td>E</td>\n      <td>F</td>\n    </tr>\n    <tr>\n      <td>G</td>\n      <td>H</td>\n      <td>I</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan="3">Table footer with colspan 3</td>\n    </tr>\n  </tfoot>\n</table>\n\n<table class="table">\n  <thead>\n    <tr>\n      <th>Column header 1</th>\n      <th>Column header 2</th>\n      <th>Column header 3</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>A</td>\n      <td>B</td>\n      <td>C</td>\n    </tr>\n    <tr>\n      <td>D</td>\n      <td>E</td>\n      <td>F</td>\n    </tr>\n    <tr>\n      <td>G</td>\n      <td>H</td>\n      <td>I</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan="3">Table footer with colspan 3</td>\n    </tr>\n  </tfoot>\n</table>\n\n<div class="table-container" style="height: 12vh">\n  <table class="table sticky-header">\n    <thead>\n      <tr>\n        <th>Column 1</th>\n        <th>Column 2</th>\n        <th>Column 3</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>A</td>\n        <td>B</td>\n        <td>C</td>\n      </tr>\n      <tr>\n        <td>D</td>\n        <td>E</td>\n        <td>F</td>\n      </tr>\n      <tr>\n        <td>G</td>\n        <td>H</td>\n        <td>I</td>\n      </tr>\n      <tr>\n        <td>J</td>\n        <td>K</td>\n        <td>L</td>\n      </tr>\n      <tr>\n        <td>M</td>\n        <td>N</td>\n        <td>O</td>\n      </tr>\n      <tr>\n        <td>P</td>\n        <td>Q</td>\n        <td>R</td>\n      </tr>\n      <tr>\n        <td>S</td>\n        <td>T</td>\n        <td>U</td>\n      </tr>\n      <tr>\n        <td>V</td>\n        <td>W</td>\n        <td>X</td>\n      </tr>\n      <tr>\n        <td>Y</td>\n        <td>Z</td>\n        <td>-</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <td colspan="3">Table footer with colspan 3</td>\n      </tr>\n    </tfoot>\n  </table>\n</div>\n\n<table class="table striped">\n  <thead>\n    <tr>\n      <th>Column header 1</th>\n      <th>Column header 2</th>\n      <th>Column header 3</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>A</td>\n      <td>B</td>\n      <td>C</td>\n    </tr>\n    <tr>\n      <td>D</td>\n      <td>E</td>\n      <td>F</td>\n    </tr>\n    <tr>\n      <td>G</td>\n      <td>H</td>\n      <td>I</td>\n    </tr>\n  </tbody>\n</table>';

const scrollTo = inject('scrollTo');

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <main class="flex-layout pl-0 gap-3">
    <aside class="sidebar">
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
          <li><a @click="scrollTo('hr')">Horizontal rule</a></li>
          <li><a @click="scrollTo('table')">Table</a></li>
          <li>
            <a @click="scrollTo('main-nav')" class="button normal desktop"
              >Back to top</a
            >
          </li>
        </ul>
      </nav>
    </aside>

    <section class="flex-layout main column mr-3">
      <article class="card column">
        <header>
          <h1>Layout elements</h1>
        </header>
        <div class="body column">
          <p>
            Use the class
            <code class="language-html">flex-layout</code> as a base for an easy
            flex layout. It will apply
            <code class="language-css">display:flex</code> and will unlock more
            classes that can be used on the child elements.
            <br />
            The child elements are all displayed by default at
            <code class="language-css">width: 100%</code> which results in a
            single column. <br />
            All columns will be automatically scaled down and wrapped when the
            viewport can not fit all the columns properly. <br />
            You can try it by resizing the browser. <br />
            If you do not want it to have an automatic row layout where the
            children have 100% width you can apply the
            <code class="language-html">auto</code> class. e.g.
            <code class="language-html">class="flex-layout auto"</code>
          </p>
          <hr />
          <small>
            <b>N.B.</b> The blue fill texture is for demonstration purpose only.
          </small>
        </div>
      </article>

      <article id="single-column" class="card column">
        <header>
          <h2>Single column</h2>
        </header>
        <div class="body column">
          <p>
            All child elements start out as
            <code class="language-css">width:100%;</code> and will take up more
            space if there is room, up to their specified maximum.
          </p>
          <section class="flex-layout">
            <div class="demo-block">Block 100% width</div>
          </section>
        </div>
        <pre
          class="border"><code class="language-html">{{ block_100 }}</code></pre>
      </article>

      <article id="two-columns" class="card column">
        <header>
          <h2>Two columns</h2>
        </header>
        <p>
          Add
          <code class="language-html">class="flex-layout two-columns"</code> to
          get a double column layout.
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
        <pre
          class="border"><code class="language-html">{{ block_50 }}</code></pre>
      </article>

      <article id="three-columns" class="card column">
        <header>
          <h2>Three columns</h2>
        </header>
        <p>
          Add
          <code class="language-html">class="flex-layout three-columns"</code>
          to get a three column layout.
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
        <pre
          class="border"><code class="language-html">{{ block_33 }}</code></pre>
      </article>

      <article id="four-columns" class="card column">
        <header>
          <h2>Four columns</h2>
        </header>
        <p>
          Add
          <code class="language-html">class="flex-layout four-columns"</code> to
          get a four column layout.
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
        <pre
          class="border"><code class="language-html">{{ block_25 }}</code></pre>
      </article>

      <article id="five-columns" class="card column">
        <header>
          <h2>Five columns</h2>
        </header>
        <p>
          Add
          <code class="language-html">class="flex-layout five-columns"</code> to
          get a five column layout.
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
        <pre
          class="border"><code class="language-html">{{ block_20 }}</code></pre>
      </article>

      <article id="six-columns" class="card column">
        <header>
          <h2>Six columns</h2>
        </header>
        <p>
          Add
          <code class="language-html">class="flex-layout six-columns"</code> to
          get a six column layout.
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
        <pre
          class="border"><code class="language-html">{{ block_16 }}</code></pre>
      </article>

      <article id="twelve-columns" class="card column">
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
        <pre
          class="border"><code class="language-html">{{ block_8 }}</code></pre>
      </article>

      <article id="aside" class="card column">
        <header>
          <h2>Aside layout</h2>
        </header>
        <p>
          The <code class="language-css">sidebar</code> can be used if you want
          to have a small - wide layout or wide - small layout for that matter.
          <br />
          It will apply:
          <code class="language-css">width:auto;</code><br />
          The element with the
          <code class="language-css">main</code> class will have
          <code class="language-css">flex:1;</code>applied and take the
          remaining space. <br />
        </p>
        <pre
          class="border"><code class="language-html">{{ aside_layout }}</code></pre>
        <hr />
        <small>
          <b>Fun fact:</b> the current page uses this aside layout for having a
          vertical navigation bar.
        </small>
      </article>

      <article id="nav" class="card column">
        <header>
          <h2>Nav</h2>
        </header>
        <p>
          When you apply a <code class="language-css">.main-navigation</code> to
          a <code class="language-html">nav</code> element it will:
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
        <pre
          class="border"><code class="language-html">{{ nav_layout }}</code></pre>
      </article>

      <article id="footer" class="card column">
        <header>
          <h2>Footer</h2>
        </header>
        <p>
          When you add the class
          <code class="language-css">.main-footer</code> to a
          <code class="language-html">&lt;footer&gt;</code> element it will:
        </p>
        <ul>
          <li>Have a box-shadow</li>
          <li>Have <code class="language-css">min-height: 5rem;</code></li>
          <li>Have <code class="language-css">padding: 1.5rem;</code></li>
        </ul>
        <hr />
        <section>
          <footer class="main-footer"><span>Footer</span></footer>
        </section>
        <pre
          class="border"><code class="language-html">{{ footer_layout }}</code></pre>
      </article>

      <article id="nested" class="card column">
        <header>
          <h2>Nested sections example</h2>
        </header>
        <section class="flex-layout gap-3">
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
        <pre
          class="border mt-0"><code class="language-html">{{ mixed_layout }}</code></pre>
      </article>

      <article id="hr" class="card column">
        <header>
          <h1>Horizontal rule</h1>
        </header>
        <div class="body column">
          <p>
            A default <code class="language-html">&lt;hr&gt;</code> element will
            render with <code class="language-css">width:100%;</code>
          </p>
          <p>Example:</p>
          <section>
            <hr />
          </section>
        </div>
      </article>

      <article id="table" class="card column">
        <header>
          <h1>Table</h1>
        </header>
        <div class="body column no-stretch gap-3">
          <p>Default table</p>

          <table>
            <thead>
              <tr>
                <th>Column header 1</th>
                <th>Column header 2</th>
                <th>Column header 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>B</td>
                <td>C</td>
              </tr>
              <tr>
                <td>D</td>
                <td>E</td>
                <td>F</td>
              </tr>
              <tr>
                <td>G</td>
                <td>H</td>
                <td>I</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">Table footer with colspan 3</td>
              </tr>
            </tfoot>
          </table>

          <p>
            A table with the <code class="language-html">table</code> class.
          </p>

          <table class="table">
            <thead>
              <tr>
                <th>Column header 1</th>
                <th>Column header 2</th>
                <th>Column header 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>B</td>
                <td>C</td>
              </tr>
              <tr>
                <td>D</td>
                <td>E</td>
                <td>F</td>
              </tr>
              <tr>
                <td>G</td>
                <td>H</td>
                <td>I</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">Table footer with colspan 3</td>
              </tr>
            </tfoot>
          </table>

          <p>With a sticky header:</p>

          <div class="table-container" style="height: 12vh">
            <table class="table sticky-header">
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>E</td>
                  <td>F</td>
                </tr>
                <tr>
                  <td>G</td>
                  <td>H</td>
                  <td>I</td>
                </tr>
                <tr>
                  <td>J</td>
                  <td>K</td>
                  <td>L</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>N</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>P</td>
                  <td>Q</td>
                  <td>R</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>T</td>
                  <td>U</td>
                </tr>
                <tr>
                  <td>V</td>
                  <td>W</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>Y</td>
                  <td>Z</td>
                  <td>-</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3">Table footer with colspan 3</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p>
            A table with the <code class="language-html">table</code> and
            <code class="language-html">striped</code> class.
          </p>

          <table class="table striped">
            <thead>
              <tr>
                <th>Column header 1</th>
                <th>Column header 2</th>
                <th>Column header 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>B</td>
                <td>C</td>
              </tr>
              <tr>
                <td>D</td>
                <td>E</td>
                <td>F</td>
              </tr>
              <tr>
                <td>G</td>
                <td>H</td>
                <td>I</td>
              </tr>
            </tbody>
          </table>
        </div>
        <pre class="border"><code class="language-html">{{ table }}</code></pre>
      </article>
    </section>
  </main>
</template>
