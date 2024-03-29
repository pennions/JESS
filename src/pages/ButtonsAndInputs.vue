<script setup>
import { inject, onMounted } from 'vue';

const buttons =
  "<button>A standard button</button>\n<button disabled>A disabled standard button</button>\n<button class='no-border'>A button without a border</button>\n<button class='no-border' disabled>A disabled button without a border</button>\n<button class='no-border outline-hover'>A button with only an outline on hover</button>\n<button class='no-border outline-hover' disabled>A disabled button with only an outline on hover</button>\n<button class='link'>A link button</button>\n<button class='link' disabled>A disabled link button</button>\n<button class='link accent'>An accent colored link button</button>\n<button class='link danger'>A danger colored link button</button>\n<button class='link accent' disabled>A disabled colored link button</button>\n<button class='primary'>A button with primary color</button>\n<button class='accent'>A button with accent color</button>\n<button class='contrast'>A button with contrast color</button>\n<button class='danger'>A button with danger color</button>\n<button class='danger' disabled>A disabled colored button</button>\n<button class=\"icon icon-chevron-right\"></button>\n<button\n  class=\"icon icon-chevron-right\"\n  disabled\n></button>";
const links =
  '<a href>A standard link</a>\n<a href class="accent">An accent colored link</a>\n<a href class="danger">A danger colored link</a>\n<a href class="contrast">A contrast colored link</a>\n<a href class="button">A link as a button</a>\n<a href class="button normal">A link as normal button</a>\n<a href class="button primary">A link as primary button</a>\n<a href class="button accent">A link as accent button</a>\n<a href class="button danger">A link as danger button</a>\n<a href class="button danger disabled">A link as button with the disabled class</a>';
const input_buttons =
  '<input type="button" value="submit" />\n<input type="reset" />\n<input type="submit" />';
const input_checkradio = '<input type="checkbox" />\n<input type="radio" />';
const input_textarea =
  '<textarea cols="30" rows="10"></textarea>\n<textarea cols="6" rows="3" disabled></textarea>\n<textarea cols="6" rows="3" invalid></textarea>';
const input_select =
  '<select name="fruits" id="fruit">\n      <option value="apple">Apple</option>\n      <option value="banana">Banana</option>\n      <option value="pineapple">Pineapple</option>\n      <option value="cherry">Cherry</option>\n</select>\n<select name="fruits" id="fruit" disabled>\n      <option value="apple">Apple</option>\n      <option value="banana">Banana</option>\n      <option value="pineapple">Pineapple</option>\n      <option value="cherry">Cherry</option>\n</select>';
const input_text =
  '<input type="email" />\n<input type="password" />\n<input type="search" />\n<input type="text" />\n<input type="url" />';
const input_numbers =
  '<input type="number" />\n<input type="range" />\n<input type="tel" />';
const input_datetime =
  '<input type="date" />\n<input type="datetime-local" />\n<input type="time" />\n<input type="month" />\n<input type="week" />';
const input_others =
  '<input type="color" />\n<input type="file" />\n<input type="image" />\n<input type="hidden" />';
const input_modifiers =
  '<input type="text" class="underline" placeholder="Input with underline class" />\n<input type="range" disabled />\n<input type="number" disabled />\n<input type="text" invalid />\n<input type="text" invalid="false" />\n<input type="button" value="submit" disabled>\n<input type="text" invalid="false" required />';
const labels =
  '<label>A standard label</label>\n\n<label class="required">Label with required class</label>\n<label required>Label with required attribute</label>\n<label data-tooltip="Custom required text" required>Label with custom tooltip text attribute</label>\n<label required="false">Not required label</label>\n\n<label class="disabled">Label with disabled class</label>\n<label disabled>Label with disabled attribute</label>\n<label disabled="false">Not disabled label</label>\n\n<label class="required" tabindex="0">This is a required field with a tooltip</label>\n<label required tabindex="0">This is a required field with a tooltip</label>\n<label required tabindex="0" data-tooltip="Custom text">Required label with custom tooltip</label>\n';

const scrollTo = inject('scrollTo');

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <main class="flex-layout gap-3">
    <aside class="sidebar">
      <nav class="sticky">
        <ul>
          <li>
            <a @click="scrollTo('buttons')">Buttons</a>
          </li>
          <li>
            <a @click="scrollTo('links')">Links</a>
          </li>
          <li>
            <a @click="scrollTo('input')">Inputs</a>
          </li>
          <li>
            <a @click="scrollTo('select')">Select</a>
          </li>
          <li>
            <a @click="scrollTo('text-area')">Textarea</a>
          </li>
          <li>
            <a @click="scrollTo('label')">Labels</a>
          </li>
          <li>
            <a @click="scrollTo('main-nav')" class="button normal desktop"
              >Back to top</a
            >
          </li>
        </ul>
      </nav>
    </aside>

    <section class="flex-layout main mr-3 gap-3">
      <article class="p-3 card">
        <header>
          <h1>Elements</h1>
        </header>
        <p class="body">
          All the elements on this page are fully controlled by the theme.
          <br />
          Here you will find the elements from the default theme.
        </p>
      </article>

      <article id="buttons" class="flex-layout card">
        <header>
          <h2>Buttons</h2>
        </header>
        <section class="body column no-stretch gap-5">
          <button>A standard button</button>
          <button disabled>A disabled standard button</button>
          <button class="no-border">A button without a border</button>
          <button class="no-border" disabled>
            A disabled button without a border
          </button>
          <button class="no-border outline-hover">
            A button with only an outline on hover
          </button>
          <button class="no-border outline-hover" disabled>
            A disabled button with only an outline on hover
          </button>
          <button class="link">A link button</button>
          <button class="link" disabled>A disabled link button</button>
          <button class="link accent">An accent colored link button</button>
          <button class="link danger">A danger colored link button</button>
          <button class="link accent" disabled>
            A disabled colored link button
          </button>
          <button class="primary">A button with primary color</button>
          <button class="accent">A button with accent color</button>
          <button class="contrast">A button with contrast color</button>
          <button class="danger">A button with danger color</button>
          <button class="danger" disabled>A disabled colored button</button>
          <p class="mb-0">Icon button</p>
          <button class="icon icon-chevron-right"></button>
          <p class="mb-0">Disabled icon button</p>
          <button class="icon icon-chevron-right" disabled></button>
        </section>
        <pre
          class="border"><code class="language-html">{{ buttons }}</code></pre>
      </article>

      <article id="links" class="card column">
        <header>
          <h2>Links</h2>
        </header>
        <div class="body">
          <section class="column no-stretch gap-5">
            <a href>A standard link</a>
            <a href class="accent">An accent colored link</a>
            <a href class="danger">A danger colored link</a>
            <a href class="contrast">A contrast colored link</a>
            <a href class="button">A link as a button</a>
            <a href class="button normal">A link as normal button</a>
            <a href class="button primary">A link as primary button</a>
            <a href class="button accent">A link as accent button</a>
            <a href class="button contrast">A link as contrast button</a>
            <a href class="button danger">A link as danger button</a>
            <a href class="button danger disabled"
              >A link as button with the disabled class</a
            >
          </section>
          <pre
            class="border mt-5"><code class="language-html">{{ links }}</code></pre>
        </div>
      </article>

      <article id="input" class="card column">
        <header>
          <h2>Inputs</h2>
        </header>

        <nav>
          <ul>
            <li>
              <a @click="scrollTo('input_checkradio')"
                >Checkbox and Radiobutton</a
              >
            </li>
            <li>
              <a @click="scrollTo('input_buttons')">Button inputs</a>
            </li>
            <li>
              <a @click="scrollTo('input_text')">Text inputs</a>
            </li>
            <li>
              <a @click="scrollTo('input_numbers')">Number inputs</a>
            </li>
            <li>
              <a @click="scrollTo('input_datetime')"
                >Date, Time and Datetime inputs</a
              >
            </li>
            <li>
              <a @click="scrollTo('input_others')">Other inputs</a>
            </li>
            <li>
              <a @click="scrollTo('input_modifiers')">Input modifiers</a>
            </li>
          </ul>
        </nav>
        <div class="body">
          <section class="column no-stretch gap-5">
            <h3 id="input_checkradio">Checkbox and Radiobutton inputs</h3>
            <hr />
            <section class="row gap-3">
              <input type="checkbox" />
              <input type="radio" />
            </section>
            <router-link to="/components/custom-inputs"
              >Click here for custom inputs for checkbox and
              radiobutton.</router-link
            >

            <pre
              class="border stretch"><code class="language-html">{{ input_checkradio }}</code></pre>

            <h3 id="input_buttons" class="mt-1">Button inputs</h3>
            <hr />
            <input type="button" value="submit" />
            <input type="reset" />
            <input type="submit" />

            <pre
              class="border stretch"><code class="language-html">{{ input_buttons }}</code></pre>

            <h3 id="input_text" class="mt-1">Text inputs</h3>
            <hr />

            <table>
              <tbody>
                <tr>
                  <td class="pr-1">Email</td>
                  <td><input type="email" /></td>
                </tr>
                <tr>
                  <td class="pr-1">Password</td>
                  <td><input type="password" /></td>
                </tr>
                <tr>
                  <td class="pr-1">Search</td>
                  <td><input type="search" /></td>
                </tr>
                <tr>
                  <td class="pr-1">Text</td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <td class="pr-1">Url</td>
                  <td><input type="url" /></td>
                </tr>
              </tbody>
            </table>

            <pre
              class="border stretch"><code class="language-html">{{ input_text }}</code></pre>

            <h3 id="input_numbers" class="mt-1">Number inputs</h3>
            <hr />
            <table>
              <tbody>
                <tr>
                  <td class="pr-1">Number</td>
                  <td><input type="number" /></td>
                </tr>
                <tr>
                  <td class="pr-1">Range</td>
                  <td><input type="range" class="w-100" /></td>
                </tr>
                <tr>
                  <td class="pr-1">Tel (Phonenumber)</td>
                  <td><input type="tel" /></td>
                </tr>
              </tbody>
            </table>

            <pre
              class="border stretch"><code class="language-html">{{ input_numbers }}</code></pre>

            <h3 id="input_datetime" class="mt-1">Date / Datetime inputs</h3>
            <hr />

            <table>
              <tbody>
                <tr>
                  <td class="pr-1">Date</td>
                  <td><input type="date" /></td>
                </tr>
                <tr>
                  <td class="pr-1">Datetime local</td>
                  <td><input type="datetime-local" /></td>
                </tr>
                <tr>
                  <td class="pr-1">Time</td>
                  <td><input type="time" /></td>
                </tr>
                <tr>
                  <td class="pr-1">Month</td>
                  <td><input type="month" /></td>
                </tr>
                <tr>
                  <td class="pr-1">Week</td>
                  <td><input type="week" /></td>
                </tr>
              </tbody>
            </table>

            <pre
              class="border stretch"><code class="language-html">{{ input_datetime }}</code></pre>

            <h3 id="input_others" class="mt-1">Other inputs</h3>
            <hr />

            <table>
              <tbody>
                <tr>
                  <td class="pr-1">Color</td>
                  <td><input type="color" /></td>
                </tr>
                <tr>
                  <td class="pr-1">File</td>
                  <td><input type="file" /></td>
                </tr>
                <tr>
                  <td class="pr-1">Image</td>
                  <td><input type="image" /></td>
                </tr>
                <tr>
                  <td class="pr-1">Hidden</td>
                  <td><input type="hidden" /></td>
                </tr>
              </tbody>
            </table>
            <pre
              class="border stretch"><code class="language-html">{{ input_others }}</code></pre>

            <h3 id="input_modifiers" class="mt-1">Input modifiers</h3>
            <hr />

            <p>
              You can create a very minimalistic input by adding the
              <code class="language-html">underline</code> class.
            </p>

            <input
              type="text"
              class="underline"
              placeholder="Input with underline class" />

            <p>
              The invalid and disabled attributes work on all inputs, even
              textarea.
            </p>

            <p>
              To disable an input add the
              <code class="language-html">disabled</code> attribute:
            </p>

            <input type="text" disabled />
            <input type="range" disabled />
            <input type="number" disabled />
            <input type="button" value="submit" disabled />

            <p>
              To show that an input is invalid add the
              <code class="language-html">invalid</code> attribute <br />
              adding
              <code class="language-html">invalid="false"</code> attribute will
              make it normal again (visual only):
            </p>

            <input type="text" invalid />
            <input type="text" invalid="false" />

            <p>
              When you want to use the
              <code class="language-html">required</code> attribute on an input,
              you need to add the
              <code class="language-html">invalid="false"</code> attribute as
              well <br />
              and alter the state of the field with JavaScript when using client
              side validation to avoid the box being marked invalid directly
              when rendered.
            </p>
            <p>
              Input with
              <code class="language-html">required invalid="false"</code>
              attributes:
            </p>
            <input type="text" invalid="false" required />

            <p>
              Input with
              <code class="language-html">required invalid="true"</code>
              attributes:
            </p>
            <input type="text" invalid="true" required />

            <p>
              Input with only
              <code class="language-html">required</code> attribute:
            </p>
            <input type="text" required />

            <p>
              Or type a letter in the number input to trigger the webbrowsers
              built-in invalidation:
            </p>
            <input type="number" />

            <pre
              class="border stretch"><code class="language-html">{{ input_modifiers }}</code></pre>
          </section>
        </div>
      </article>

      <article id="select" class="card column">
        <header>
          <h2>Select</h2>
        </header>
        <div class="body no-stretch column">
          <p>A default select element:</p>

          <select name="fruits" id="fruit">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="pineapple">Pineapple</option>
            <option value="cherry">Cherry</option>
          </select>

          <p>A disabled select element:</p>

          <select name="fruits" id="fruit" disabled>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="pineapple">Pineapple</option>
            <option value="cherry">Cherry</option>
          </select>

          <pre
            class="border stretch"><code class="language-html">{{ input_select }}</code></pre>

          <div>
            For modifiers checkout the
            <a @click="scrollTo('input_modifiers')">input modifiers section</a>
          </div>
        </div>
      </article>

      <article id="text-area" class="card column">
        <header>
          <h2>Textarea</h2>
        </header>
        <div class="body column no-stretch">
          <p>A default resizable textarea element:</p>

          <textarea cols="30" rows="10"></textarea>

          <p>A disabled textarea element:</p>

          <textarea cols="6" rows="3" disabled></textarea>

          <p>An invalid textarea element:</p>

          <textarea cols="6" rows="3" invalid></textarea>

          <pre
            class="border stretch"><code class="language-html">{{ input_textarea }}</code></pre>
          <div>
            For modifiers checkout the
            <a @click="scrollTo('input_modifiers')">input modifiers section</a>
          </div>
        </div>
      </article>

      <article id="label" class="card column">
        <header>
          <h2>Labels</h2>
        </header>
        <div class="body column">
          <p>
            Labels render with a
            <code class="language-css">font-size: 1.2rem;</code> which results
            in 12px by default. <br />
            And have a <code class="language-css">font-weigth: 600;</code>
          </p>
          <label>A standard label</label> <br />
          <p>
            Their presentation can be altered by a some classes or attributes:
          </p>
          <label class="required">Label with required class</label> <br />
          <label class="disabled">Label with disabled class</label> <br />
          <p>
            If you add <code class="language-html">tabindex="0"</code> as well
            as the required class, you get a tooltip which can be focussed:
          </p>
          <label class="required" tabindex="0"
            >This is a required field with a tooltip</label
          ><br />
          <label data-tooltip="Custom required text" required
            >Label with custom tooltip text attribute</label
          >

          <div class="row">
            <label class="required ml-auto" tabindex="0"
              >This is a required field with a tooltip on the edge which
              illustrates it does not move around when hovered</label
            ><br />
          </div>
          <p>
            You can modify the tooltip by providing
            <code class="language-html">data-tooltip="Your text"</code>
          </p>
          <label
            class="required"
            tabindex="0"
            data-tooltip="Custom tooltip text."
            >This is a required field with a custom tooltip</label
          ><br />

          <p>
            You can also use the attribute
            <code class="language-html">disabled</code> /
            <code class="language-html">disabled="true"</code> or
            <code class="language-html">required</code> /
            <code class="language-html">required="true"</code> for the same
            effect of adding the class. <br />
            You can then set these to false to remove the effect. <br />
            <code class="language-html">disabled="false"</code> and
            <code class="language-html">required="false"</code> respectively.
          </p>
          <pre
            class="border"><code class="language-html">{{ labels }}</code></pre>
        </div>
      </article>
         
    </section>
  </main>
</template>
