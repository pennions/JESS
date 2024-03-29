<template>
  <main>
    <section class="flex-layout mx-3 gap-3">
      <article class="card">
        <header>
          <h1>Utility classes</h1>
        </header>
        <div class="body column">
          <p>
            Here are the classes you can use to modify or override default
            behaviour, which are not mentioned in any of the other categories.
          </p>

          <section class="flex-layout two-columns">
            <div>
              <h2 class="mb-1">Border utilities</h2>

              <code class="language-html"> border </code> <br />
              <code class="language-html"> border-bottom </code> <br />
              <code class="language-html"> border-top </code> <br />
              <code class="language-html"> border-left </code> <br />
              <code class="language-html"> border-right </code> <br />

              <h3 class="mt-4 mb-2">Border colour classes</h3>
              <code class="language-html"> border-primary </code> <br />
              <code class="language-html"> border-accent </code> <br />
              <code class="language-html"> border-danger </code> <br />
              <code class="language-html"> border-success </code> <br />
              <code class="language-html"> border-black </code> <br />
              <code class="language-html"> border-white </code> <br />
              <code class="language-html"> border-light </code> <br />
            </div>

            <div>
              <p>Examples:</p>
              <div class="border p-3 mt-3">Element with border</div>
              <div class="border-bottom p-3 my-3">
                Element with border-bottom
              </div>
              <div class="border-top p-3 my-3">Element with border-top</div>
              <div class="border border-primary p-3 mb-3">
                Element with border and border-primary
              </div>
              <div class="border border-accent p-3 mb-3">
                Element with border and border-accent
              </div>
              <div class="border border-danger p-3 mb-3">
                Element with border and border-danger
              </div>
              <div class="border border-success p-3 mb-3">
                Element with border and border-success
              </div>
              <div class="border border-black p-3 mb-3">
                Element with border and border-black
              </div>
              <div class="bg-black p-3">
                <div class="border border-white p-3">
                  Element with border and border-white
                </div>
              </div>
              <div class="border border-light p-3 my-3">
                Element with border and border-light
              </div>
            </div>
          </section>
          <section class="flex-layout two-columns">
            <div>
              <h2 class="mb-3">Background colour utilities</h2>

              <code class="language-html">bg-grey </code> <br />
              <code class="language-html">bg-grey-dark </code> <br />
              <code class="language-html">bg-black </code> <br />
              <code class="language-html">bg-white </code> <br />
              <code class="language-html">bg-primary </code> <br />
              <code class="language-html">bg-accent </code> <br />
              <code class="language-html">bg-danger </code> <br />
              <code class="language-html">bg-error </code> <br />
              <code class="language-html">bg-warning </code> <br />
              <code class="language-html">bg-success </code> <br />
            </div>
            <div>
              <p>Examples:</p>
              <div class="bg-grey p-3 mt-3">grey background</div>
              <div class="bg-grey-dark p-3">dark grey background</div>
              <div class="bg-black p-3">
                black background with auto colour adjustment
              </div>
              <div class="bg-white p-3">white background</div>
              <div class="bg-primary p-3">
                primary background with auto colour adjustment
              </div>
              <div class="bg-accent p-3">
                accent background with auto colour adjustment
              </div>
              <div class="bg-danger p-3">
                danger background with auto colour adjustment
              </div>
              <div class="bg-warning p-3">
                warning background with auto colour adjustment
              </div>
              <div class="bg-error p-3">
                error background with auto colour adjustment
              </div>
              <div class="bg-success p-3">
                success background with auto colour adjustment
              </div>
            </div>
          </section>
          <section class="flex-layout two-columns">
            <div>
              <h2 class="mb-3">Text colour utilities</h2>
              <code class="language-html">text-black </code> <br />
              <code class="language-html">text-white </code> <br />
              <code class="language-html">text-primary </code> <br />
              <code class="language-html">text-accent </code> <br />
              <code class="language-html">text-danger </code> <br />
              <code class="language-html">text-success </code> <br />
              <code class="language-html">text-grey </code> <br />
              <small>* these can also be applied on an icon</small>
            </div>
            <div>
              <p>Examples:</p>
              <div class="bg-primary text-black p-3">black text</div>
              <div class="bg-black text-white p-3">white text</div>
              <div class="bg-grey-dark text-primary p-3">primary text</div>
              <div class="bg-black text-accent p-3">accent text</div>
              <div class="bg-accent text-danger p-3">danger text</div>
              <div class="text-success p-3">success text</div>
              <div class="text-grey p-3">grey text</div>
            </div>
          </section>
          <section class="flex-layout two-columns">
            <div>
              <h2 class="mb-3">Text utilities</h2>
              <table>
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code class="language-html">text-normal</code></td>
                    <td>Makes the text normal font-weight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </article>

      <article id="utility-classes" class="card column">
        <header>
          <h2>Layout utility classes</h2>
        </header>
        <div class="body column">
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code class="language-html">sticky</code></td>
                <td>Makes it stick to the top when scrolling down.</td>
              </tr>
              <tr>
                <td><code class="language-html">no-scroll</code></td>
                <td>
                  Remove all scrollbars, handy to apply on the body when opening
                  a modal.
                </td>
              </tr>

              <tr>
                <td><code class="language-html">overflow-horizontal</code></td>
                <td>
                  Make an element crollable on the x-axis if the contents is too
                  large.
                </td>
              </tr>

              <tr>
                <td><code class="language-html">no-stretch</code></td>
                <td>
                  Apply this to a flex layout item like
                  <code class="language-html">section</code>,
                  <code class="language-html">main</code> or
                  <code class="language-html">fieldset</code> <br />
                  to have its children keep their own size.
                </td>
              </tr>

              <tr>
                <td><code class="language-html">stretch</code></td>
                <td>
                  Apply this to a flex layout item like
                  <code class="language-html">section</code>,
                  <code class="language-html">main</code> or
                  <code class="language-html">fieldset</code> <br />
                  to have its children take up as much space as there is.
                </td>
              </tr>

              <tr>
                <td><code class="language-html">row</code></td>
                <td>
                  Make an element display flex with the default row direction.
                </td>
              </tr>

              <tr>
                <td><code class="language-html">column</code></td>
                <td>Make an element display flex with the column direction</td>
              </tr>

              <tr>
                <td>
                  <code class="language-html">align-center</code>
                </td>
                <td>
                  Applies:
                  <code class="language-html">align-items: center;</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code class="language-html">align-end</code>
                </td>
                <td>
                  Applies:
                  <code class="language-html">align-items: flex-end;</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code class="language-html">align-start </code>
                </td>
                <td>
                  Applies:
                  <code class="language-html">align-items: flex-start; </code>
                </td>
              </tr>

              <tr>
                <td>
                  <code class="language-html">align-stretch </code>
                </td>
                <td>
                  Applies:
                  <code class="language-html">align-items: stretch; </code>
                </td>
              </tr>
              <tr>
                <td>
                  <code class="language-html">justify-center </code>
                </td>
                <td>
                  Applies:
                  <code class="language-html">justify-content: center; </code>
                </td>
              </tr>
              <tr>
                <td>
                  <code class="language-html">justify-around </code>
                </td>
                <td>
                  Applies:
                  <code class="language-html"
                    >justify-content: space-around;
                  </code>
                </td>
              </tr>
              <tr>
                <td>
                  <code class="language-html">justify-evenly </code>
                </td>
                <td>
                  Applies:
                  <code class="language-html"
                    >justify-content: space-evenly;
                  </code>
                </td>
              </tr>
              <tr>
                <td>
                  <code class="language-html">justify-end </code>
                </td>
                <td>
                  Applies:
                  <code class="language-html">justify-content: flex-end; </code>
                </td>
              </tr>
              <tr>
                <td>
                  <code class="language-html">justify-between </code>
                </td>
                <td>
                  Applies:
                  <code class="language-html"
                    >justify-content: space-between;
                  </code>
                </td>
              </tr>
              <tr>
                <td>
                  <code class="language-html">justify-start </code>
                </td>
                <td>
                  Applies:
                  <code class="language-html"
                    >justify-content: flex-start;
                  </code>
                </td>
              </tr>
              <tr>
                <td><code class="language-html">self-auto</code></td>
                <td>Makes an element align-self and justify-self to start.</td>
              </tr>
              <tr>
                <td><code class="language-html">gap-0</code></td>
                <td>Sets the gap of a flex container to 0.</td>
              </tr>
              <tr>
                <td><code class="language-html">gap-1</code></td>
                <td>Sets the gap of a flex container the same as p-1 / m-1.</td>
              </tr>
              <tr>
                <td><code class="language-html">gap-2</code></td>
                <td>Sets the gap of a flex container the same as p-2 / m-2.</td>
              </tr>
              <tr>
                <td><code class="language-html">gap-3</code></td>
                <td>Sets the gap of a flex container the same as p-3 / m-3.</td>
              </tr>
              <tr>
                <td><code class="language-html">gap-4</code></td>
                <td>Sets the gap of a flex container the same as p-4 / m-4.</td>
              </tr>
              <tr>
                <td><code class="language-html">gap-5</code></td>
                <td>Sets the gap of a flex container the same as p-5 / m-5.</td>
              </tr>

              <tr>
                <td><code class="language-html">no-wrap</code></td>
                <td>Makes a text not wrap.</td>
              </tr>
              <tr>
                <td><code class="language-html">inline-block</code></td>
                <td>
                  Applies:
                  <code class="language-html">display: inline-block;</code>
                </td>
              </tr>
              <tr>
                <td><code class="language-html">inline-flex</code></td>
                <td>
                  Applies:
                  <code class="language-html">display: inline-flex;</code>
                </td>
              </tr>
              <tr>
                <td><code class="language-html">full-height</code></td>
                <td>
                  Applies:
                  <code class="language-html">height: 100vh;</code>
                </td>
              </tr>
            </tbody>
          </table>

          <section class="flex-layout overflow-horizontal mt-5">
            <h3>Width classes</h3>
            <hr />
            <p>
              Width classes that set the
              <code class="language-css">width</code> and
              <code class="language-css">min-width</code>, with safeguards for
              the padding <br />
              and out-of-the-box responsive fallback based on viewport
              max-width:
            </p>
            <br />

            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>CSS</th>
                  <th>w-100</th>
                  <th>w-75</th>
                  <th>w-50</th>
                  <th>w-33</th>
                  <th>w-25</th>
                  <th>w-20</th>
                  <th>w-16</th>
                  <th>w-8</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code class="language-css">w-100</code></td>
                  <td>100%</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td><code class="language-css">w-75</code></td>
                  <td>calc(75% - 0.5rem)</td>
                  <td>415px</td>
                  <td>576px</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td><code class="language-css">w-50</code></td>
                  <td>calc(50% - 0.75rem)</td>
                  <td>415px</td>
                  <td>-</td>
                  <td>576px</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td><code class="language-css">w-33</code></td>
                  <td>calc(33.3333% - 1rem)</td>
                  <td>415px</td>
                  <td>-</td>
                  <td>576px</td>
                  <td>768px</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td><code class="language-css">w-25</code></td>
                  <td>calc(25% - 1.13rem)</td>
                  <td>415px</td>
                  <td>-</td>
                  <td>576px</td>
                  <td>768px</td>
                  <td>992px</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td><code class="language-css">w-20</code></td>
                  <td>calc(20% - 1.2rem)</td>
                  <td>415px</td>
                  <td>-</td>
                  <td>576px</td>
                  <td>768px</td>
                  <td>992px</td>
                  <td>1200px</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td><code class="language-css">w-16</code></td>
                  <td>calc(16.6667% - 1.25rem)</td>
                  <td>415px</td>
                  <td>-</td>
                  <td>576px</td>
                  <td>768px</td>
                  <td>992px</td>
                  <td>1200px</td>
                  <td>1400px</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td><code class="language-css">w-8</code></td>
                  <td>calc(8.3333% - 1.375rem)</td>
                  <td>415px</td>
                  <td>-</td>
                  <td>-</td>
                  <td>576px</td>
                  <td>768px</td>
                  <td>992px</td>
                  <td>1200px</td>
                  <td>1400px</td>
                </tr>
                <tr>
                  <td><code class="language-css">w-auto</code></td>
                  <td colspan="9">Sets min-width, width to auto</td>
                </tr>

                <tr></tr>
              </tbody>
            </table>
          </section>
          <section class="column overflow-horizontal mt-5">
            <h3>Hide / show for Mobile and Desktop layout</h3>
            <hr />

            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>415px</th>
                  <th>576px</th>
                  <th>768px</th>
                  <th>992px</th>
                  <th>1200px</th>
                  <th>1400px</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>mobile</td>
                  <td>X</td>
                  <td>X</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>tablet</td>
                  <td>-</td>
                  <td>-</td>
                  <td>X</td>
                  <td>X</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>desktop</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>small-screen</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>large-screen</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
              </tbody>
            </table>
            <div class="column mt-3">
              <span>Resize the screen to see it in action:</span>
              <div class="mobile bg-danger p-3">Mobile</div>
              <div class="tablet bg-accent p-3">Tablet</div>
              <div class="desktop bg-primary p-3">desktop</div>
              <div class="small-screen bg-grey p-3">small-screen</div>
              <div class="large-screen bg-grey-dark p-3">large-screen</div>
            </div>
          </section>

          <section class="column overflow-horizontal mt-5">
            <h3>Height classes</h3>
            <hr />
            <p>
              Height classes that set the
              <code class="language-css">height</code> property.
            </p>
            <br />

            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>CSS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code class="language-css">h-100</code></td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td><code class="language-css">h-75</code></td>
                  <td>75%</td>
                </tr>
                <tr>
                  <td><code class="language-css">h-50</code></td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td><code class="language-css">h-33</code></td>
                  <td>33.333333333333333333333333333333%</td>
                </tr>
                <tr>
                  <td><code class="language-css">h-25</code></td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td><code class="language-css">h-20</code></td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td><code class="language-css">h-16</code></td>
                  <td>16.666666666666666666666666666667%</td>
                </tr>
                <tr>
                  <td><code class="language-css">h-8</code></td>
                  <td>8.3333333333333333333333333333333%</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section class="column overflow-horizontal gap-3 mt-5">
            <h3>Padding / Margin utilities</h3>
            <hr />
            <p>
              Each version has a number ranging from 0 and 5 and auto. 0 means
              no padding or margin for that direction. <br />
            </p>
            <ol>
              <li>
                is the default distance divided by 3 (so 1.5rem / 3 = 0.5rem)
              </li>
              <li>
                is the default distance - the distance of one (so 1.5rem -
                0.5rem = 1rem)
              </li>
              <li>is the default distance</li>
              <li>
                is the default distance times one and a halve. (1.5rem * 1.5 =
                2.25rem)
              </li>
              <li>is the default distance times two. (1.5rem * 2 = 3rem)</li>
            </ol>
            <hr />
            <table class="table">
              <thead>
                <tr>
                  <th>Padding class</th>
                  <th>Margin class</th>
                  <th>Top</th>
                  <th>Right</th>
                  <th>Bottom</th>
                  <th>Left</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>p-0</td>
                  <td>m-0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>p-1</td>
                  <td>m-1</td>
                  <td>0.5rem</td>
                  <td>0.5rem</td>
                  <td>0.5rem</td>
                  <td>0.5rem</td>
                </tr>
                <tr>
                  <td>pt-auto</td>
                  <td>mt-auto</td>
                  <td>auto</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>pt-0</td>
                  <td>mt-0</td>
                  <td>0</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>pt-1</td>
                  <td>mt-1</td>
                  <td>0.5rem</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>pb-auto</td>
                  <td>mb-auto</td>
                  <td>-</td>
                  <td>-</td>
                  <td>auto</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>pb-0</td>
                  <td>mb-0</td>
                  <td>-</td>
                  <td>-</td>
                  <td>0</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>pb-1</td>
                  <td>mb-1</td>
                  <td>-</td>
                  <td>-</td>
                  <td>0.5rem</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>pl-auto</td>
                  <td>ml-auto</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>auto</td>
                </tr>
                <tr>
                  <td>pl-0</td>
                  <td>ml-0</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>pl-1</td>
                  <td>ml-1</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>0.5rem</td>
                </tr>
                <tr>
                  <td>pr-auto</td>
                  <td>mr-auto</td>
                  <td>-</td>
                  <td>auto</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>pr-0</td>
                  <td>mr-0</td>
                  <td>-</td>
                  <td>0</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>pr-1</td>
                  <td>mr-1</td>
                  <td>-</td>
                  <td>0.5rem</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>px-auto</td>
                  <td>mx-auto</td>
                  <td>unchanged</td>
                  <td>auto</td>
                  <td>unchanged</td>
                  <td>auto</td>
                </tr>
                <tr>
                  <td>px-0</td>
                  <td>mx-0</td>
                  <td>unchanged</td>
                  <td>0</td>
                  <td>unchanged</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>px-1</td>
                  <td>mx-1</td>
                  <td>-</td>
                  <td>0.5rem</td>
                  <td>-</td>
                  <td>0.5rem</td>
                </tr>
                <tr>
                  <td>py-auto</td>
                  <td>my-auto</td>
                  <td>auto</td>
                  <td>unchanged</td>
                  <td>auto</td>
                  <td>unchanged</td>
                </tr>
                <tr>
                  <td>py-0</td>
                  <td>my-0</td>
                  <td>0</td>
                  <td>unchanged</td>
                  <td>0</td>
                  <td>unchanged</td>
                </tr>
                <tr>
                  <td>py-1</td>
                  <td>my-1</td>
                  <td>0.5rem</td>
                  <td>-</td>
                  <td>0.5rem</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </article>
    </section>
  </main>
</template>
