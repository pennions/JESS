<script setup>
import { computed, inject, nextTick, onMounted, onUpdated, watch } from "vue";
const props = defineProps(["scrollToId"]);

const components_card =
  '<article class="card normal">\n    <header>\n      <h3>Header</h3>\n    </header>\n    <section>\n      <p>\n        <code class="language-html">class="card normal"</code>\n      </p>\n    </section>\n    <footer>Footer</footer>\n</article>';
const components_notifications =
  '<dialog class="notification" open>\n  <span>Default notification</span> <button class="close">X</button>\n</dialog>\n\n<dialog class="notification warning" open>\n  <span>Warning notification</span> <button class="close">X</button>\n</dialog>\n\n<dialog class="notification success" open>\n  <span>Success notification</span> <button class="close">X</button>\n</dialog>\n\n<dialog class="notification error" open>\n  <div class="icon icon-alert-triangle mr-3"></div>\n  <span>Error notification</span> <button class="close">X</button>\n</dialog>';
const components_modal =
  "<button\n    onclick=\"document.getElementById('demo-modal').setAttribute('open', true)\"\n    >\n    Open modal\n</button>\n\n<dialog\n    id=\"demo-modal\"\n    class=\"modal\"\n    onclick=\"this.removeAttribute('open')\"\n    >\n    <article class=\"card normal w-25\">\n        <header>\n            <h3>Message</h3>\n        </header>\n        <div>I am a modal.</div>\n        <footer>\n            <button\n                onclick=\"document.getElementById('demo-modal').setAttribute('open', false)\"\n            >\n                Close\n            </button>\n        </footer>\n    </article>\n</dialog>\n\n<button\n    onclick=\"document.getElementById('demo-modal-noscroll').setAttribute('open', true); \n             document.getElementsByTagName('body')[0].classList.add('no-scroll')\"\n    >\n    Open modal with no-scroll applied.\n</button>\n\n<dialog\n    id=\"demo-modal-noscroll\"\n    class=\"modal\"\n    onclick=\"this.removeAttribute('open'); \n             document.getElementsByTagName('body')[0].classList.remove('no-scroll')\"\n    >\n    <article class=\"card normal w-25\">\n        <header>\n            <h3>Message</h3>\n        </header>\n        <div>I am a modal.</div>\n        <footer>\n            <button\n                onclick=\"document.getElementById('demo-modal-noscroll').setAttribute('open', false); \n                         document.getElementsByTagName('body')[0].classList.remove('no-scroll')\"\n                >\n                Close\n            </button>\n        </footer>\n    </article>\n</dialog>";
const components_breadcrumb =
  '<nav aria-label="Breadcrumb">\n  <ul>\n    <li><a href="">Home</a></li>\n    <li><a href="">Workshop</a></li>\n    <li><a href="" aria-current="page">Sawbench</a></li>\n  </ul>\n</nav>';
const components_dropdowns =
  "<details>\n  <summary>Menu 1</summary>\n  <nav class='dropdown-container'>\n    <ul>\n      <li><a href>Item one</a></li>\n      <li><a href>Item two</a></li>\n      <li><a href>Item three</a></li>\n      <li><a href>Item four</a></li>\n      <li><a href>Item five</a></li>\n    </ul>\n  </nav>\n</details>\n\n<details class='align-right'>\n  <summary>Right side menu</summary>\n  <nav class='dropdown-container'>\n    <ul>\n      <li><a href>Item one</a></li>\n      <li><a href>Item two</a></li>\n      <li><a href>Item three</a></li>\n      <li><a href>Item four</a></li>\n      <li><a href>Item five</a></li>\n    </ul>\n  </nav>\n</details>\n\n<details class='icon-dropdown'>\n  <summary class='icon-menu'></summary>\n  <nav class='dropdown-container'>\n    <ul>\n      <li><a href>Item one</a></li>\n      <li><a href>Item two</a></li>\n      <li><a href>Item three</a></li>\n      <li><a href>Item four</a></li>\n      <li><a href>Item five</a></li>\n    </ul>\n  </nav>\n</details>\n\n<p>With the <code class='language-html'>accordion</code> class:</p>\n<details class='accordion'>\n  <summary>Lorum ipsum story</summary>\n  <p>Lorem Ipsum is simply dummy text of the printing and typesetting\n    industry. Lorem Ipsum has been the industry's standard dummy text ever\n    since the 1500s, when an unknown printer took a galley of type and\n    scrambled it to make a type specimen book. It has survived not only\n    five centuries, but also the leap into electronic typesetting,\n    remaining essentially unchanged.</p>\n</details>\n\n<details class='button'>\n  <summary>Button dropdown</summary>\n  <nav class='dropdown-container'>\n    <ul>\n      <li><a href>Item one</a></li>\n      <li><a href>Item two</a></li>\n      <li><a href>Item three</a></li>\n      <li><a href>Item four</a></li>\n      <li><a href>Item five</a></li>\n    </ul>\n  </nav>\n</details>";
const components_checkbox =
  '<label class="custom-input">\n  Custom checkbox with full color control.\n  <input type="checkbox" checked="checked" />\n  <span class="checkmark"></span>\n</label>\n\n<label class="custom-input ml-1">\n  Unchecked version.\n  <input type="checkbox" />\n  <span class="checkmark"></span>\n</label>\n\n<label class="custom-input margin">\n  Disabled version.\n  <input type="checkbox" name="custom" disabled />\n  <span class="checkmark"></span>\n</label>\n\n<label class="custom-input label-left">\n  Custom checkbox with the label on the left.\n  <input type="checkbox" checked="checked" />\n  <span class="checkmark"></span>\n</label>';
const components_radio =
  '<label class="custom-input">\n  Custom radiobutton with full color control.\n  <input type="radio" checked="checked" name="custom" />\n  <span class="checkmark"></span>\n</label>\n\n<label class="custom-input ml-1">\n  Unchecked version.\n  <input type="radio" name="custom" />\n  <span class="checkmark"></span>\n</label>\n\n<label class="custom-input margin">\n  Disabled version.\n  <input type="radio" name="custom" disabled />\n  <span class="checkmark"></span>\n</label>\n\n<label class="custom-input label-left">\n  Custom radiobutton with label on the left.\n  <input type="radio" name="custom" />\n  <span class="checkmark"></span>\n</label>';
const components_switch =
  '<label class="switch">\n    <input type="checkbox" />\n    <span class="toggle"></span>\n    <span class="toggle-background"></span>\n</label>\n\n<label class="switch">\n    <input type="checkbox" disabled />\n    <span class="toggle"></span>\n    <span class="toggle-background"></span>\n</label>\n\n<label class="switch">\n    <input type="checkbox" checked disabled />\n    <span class="toggle"></span>\n    <span class="toggle-background"></span>\n</label>\n\n<label class="switch">\n    <input type="checkbox" />\n    <span class="toggle"></span>\n    <span\n        class="toggle-background"\n        data-label="Off"\n        data-label-on="On"\n    ></span>\n</label>\n\n<label class="switch">\n    <input type="checkbox" />\n    <span class="toggle"></span>\n    <span\n        class="toggle-background label-left"\n        data-label="Off"\n        data-label-on="On"\n    ></span>\n</label>\n\n<label class="switch">\n    <input type="checkbox" />\n    <span class="toggle"></span>\n    <span class="toggle-background" data-label="Off state only"></span>\n</label>\n\n<label class="switch">\n    <input type="checkbox" checked />\n    <span class="toggle"></span>\n    <span class="toggle-background" data-label-on="On state only"></span>\n</label>';

const scrollTo = inject("scrollTo");

onMounted(() => {
  Prism.highlightAll();

  document.getElementById("indeterminateExample").indeterminate = true;
  document.getElementById("indeterminateExampleDisabled").indeterminate = true;

  /** added the last path as a prop in the router. Then wait for the browser to render, then scroll */
  if (props.scrollToId) {
    const timer = setTimeout(() => {
      scrollTo(props.scrollToId);
      clearTimeout(timer);
    }, 100);
  }
});
</script>

<template>
  <main class="flex-layout pl-0 pt-3">
    <aside class="sidebar">
      <nav class="sticky">
        <ul>
          <li>
            <a @click="scrollTo('card')">Card</a>
          </li>
          <li>
            <a @click="scrollTo('notification')">Notification</a>
          </li>
          <li>
            <a @click="scrollTo('modal')">Modal</a>
          </li>
          <li>
            <a @click="scrollTo('breadcrumb')">Breadcrumb</a>
          </li>
          <li>
            <a @click="scrollTo('dropdown')">Dropdown</a>
          </li>
          <li>
            <a @click="scrollTo('custom-inputs')">Custom inputs</a>
          </li>
          <li>
            <a
              @click="scrollTo('main-nav')"
              class="button normal desktop"
            >Back to top</a>
          </li>
        </ul>
      </nav>
    </aside>

    <section class="flex-layout main px-3 pb-3">
      <article class="card">
        <header>
          <h1>Components</h1>
        </header>
        <p>
          Here you will find elements that are more customized and can consist
          of multiple elements combined.
        </p>
      </article>

      <article
        class="card"
        id="card"
      >
        <header>
          <h2>Card</h2>
        </header>

        <p>
          Apply the
          <code class="language-html">class="card"</code> to get a nice card effect which has built-in styling for header and footer. <br />
          It also applies the default-margin distance on the bottom of each child element except the last one. <br />
          For the examples I have set a max-width of 25%.
        </p>

        <article class="card w-25">This is a default card</article>

        <article class="card w-25">
          <header>
            <h3>Card header</h3>
          </header>
          <section>
            <p>
              This is a default card with a
              <code class="language-html">&lt;header&gt;</code> and a
              <code class="language-html">&lt;footer&gt;</code> element.
            </p>
          </section>
          <footer>Card footer</footer>
        </article>
        <hr />
        <h4>More specialized cards:</h4>
        <section class="flex-layout four-columns no-stretch">
          <article class="card normal">
            <header>
              <h3>Header</h3>
            </header>
            <section>
              <p>
                <code class="language-html">class="card normal"</code>
              </p>
            </section>
            <footer>Footer</footer>
          </article>

          <article class="card primary">
            <header>
              <h3>Header</h3>
            </header>
            <section>
              <p>
                <code class="language-html">class="card primary"</code>
              </p>
            </section>
            <footer>Footer</footer>
          </article>

          <article class="card accent">
            <header>
              <h3>Header</h3>
            </header>
            <section>
              <p><code class="language-html">class="card accent"</code></p>
            </section>
            <footer>Footer</footer>
          </article>
          <article class="card danger">
            <header>
              <h3>Header</h3>
            </header>
            <section>
              <p><code class="language-html">class="card danger"</code></p>
            </section>
            <footer>Footer</footer>
          </article>

          <article class="card primary inverse">
            <header>
              <h3>Header</h3>
            </header>
            <section>
              <p>
                <code class="language-html">class="card primary inverse"</code>
              </p>
            </section>
            <footer>Footer</footer>
          </article>

          <article class="card accent inverse">
            <header>
              <h3>Header</h3>
            </header>
            <section>
              <p>
                <code class="language-html">class="card accent inverse"</code>
              </p>
            </section>
            <footer>Footer</footer>
          </article>

          <article class="card danger inverse">
            <header>
              <h3>Header</h3>
            </header>
            <section>
              <p><code class="language-html">class="card danger inverse"</code></p>
            </section>
            <footer>Footer</footer>
          </article>
        </section>
        <pre class="border stretch mt-1"><code class="language-html">{{ components_card }}</code></pre>

      </article>

      <article
        id="notification"
        class="card"
      >
        <header>
          <h2>Notification</h2>
        </header>
        <p>
          A notification is a
          <code class="language-html">&lt;dialog&gt;</code> that is directly
          inside a <code class="language-html">&lt;body&gt;</code> and under a
          <code class="language-html">&lt;nav&gt;</code> element to make it a
          top notification
          <br />
          and stick to the top when scrolling.
          <br />
          Or inside <code class="language-html">&lt;body&gt;</code> and above
          the <code class="language-html">&lt;footer&gt;</code> with the
          additional <code class="language-html">bottom</code> class to make it
          appear above the footer and make it stick to the bottom when
          scrolling. <br />
          You can add or remove the
          <code class="language-html">open</code> attribute to show / hide the
          notification.
        </p>

        <p>Variants:</p>
        <dialog
          class="notification"
          open
        >
          <span>Default notification</span> <button class="close">X</button>
        </dialog>

        <dialog
          class="notification warning"
          open
        >
          <span>Warning notification</span> <button class="close">X</button>
        </dialog>

        <dialog
          class="notification success"
          open
        >
          <span>Success notification</span> <button class="close">X</button>
        </dialog>

        <p>
          If you add a lucide font icon, it will have a contrasting color, matching
          the notification:
        </p>
        <dialog
          class="notification error"
          open
        >
          <div class="icon icon-alert-triangle mr-3">
          </div>
          <span>Error notification</span> <button class="close">X</button>
        </dialog>

        <pre class="border stretch mt-1"><code class="language-html">{{ components_notifications }}</code></pre>
      </article>

      <article
        id="modal"
        class="card"
      >
        <header>
          <h2>Modal</h2>
        </header>
        <p>
          A modal is a <code class="language-html">&lt;dialog&gt;</code> with a
          <code class="language-html">class="modal"</code>. <br />
          It opens when it has a property
          <code class="language-html">open</code> or
          <code class="language-html">open="true"</code>.
          <br />
          It closes when the property is removed or set to false. <br />
          You could use a card (article) for the modal as demonstrated below.
        </p>

        <button onclick="document.getElementById('demo-modal').setAttribute('open', true)">
          Open modal
        </button>

        <dialog
          id="demo-modal"
          class="modal"
          onclick="this.removeAttribute('open')"
        >
          <article class="card normal w-25">
            <header>
              <h3>Message</h3>
            </header>
            <div>I am a modal.</div>
            <footer>
              <button onclick="document.getElementById('demo-modal').setAttribute('open', false)">
                Close
              </button>
            </footer>
          </article>
        </dialog>

        <p>
          If you want to disable scroll on the body add the
          <code class="language-html">no-scroll</code> class on the body.
        </p>
        <button onclick="document.getElementById('demo-modal-noscroll').setAttribute('open', true); 
                   document.getElementsByTagName('body')[0].classList.add('no-scroll')">
          Open modal with no-scroll applied.
        </button>

        <dialog
          id="demo-modal-noscroll"
          class="modal"
          onclick="this.removeAttribute('open'); 
                   document.getElementsByTagName('body')[0].classList.remove('no-scroll')"
        >
          <article class="card normal w-25">
            <header>
              <h3>Message</h3>
            </header>
            <div>I am a modal.</div>
            <footer>
              <button onclick="document.getElementById('demo-modal-noscroll').setAttribute('open', false); 
                         document.getElementsByTagName('body')[0].classList.remove('no-scroll')">
                Close
              </button>
            </footer>
          </article>
        </dialog>

        <pre class="border stretch mt-1"><code class="language-html">{{ components_modal }}</code></pre>

        <small><b>N.B.</b> You can also set a close on the outside of the modal. As
          done in the example. Try it!</small>
      </article>

      <article
        id="breadcrumb"
        class="card"
      >
        <header>
          <h2>Breadcrumb</h2>
        </header>
        <p>A simple breadcrumb interface:</p>

        <nav aria-label="Breadcrumb">
          <ul>
            <li><a href="#breadcrumb">Home</a></li>
            <li><a href="#breadcrumb">Workshop</a></li>
            <li><a
                href="#breadcrumb"
                aria-current="page"
              >Sawbench</a></li>
          </ul>
        </nav>

        <pre class="border stretch mt-1"><code class="language-html">{{ components_breadcrumb }}</code></pre>
      </article>

      <article
        id="dropdown"
        class="card"
      >
        <header>
          <h2>Dropdown</h2>
        </header>
        <p>
          There are two types of dropdown in JESS, the accordion and the
          dropdown menu. Both use a
        </p>
        <p>
          Both use a <code class="language-html">&lt;details&gt;</code> element,
          with a nested
          <code class="language-html">&lt;summary&gt;</code> followed by the
          contents that should be visible on click. <br />
          The contents inside the
          <code class="language-html">&lt;summary&gt;</code> tag is the visible
          part when it is closed.
        </p>

        <p>Default:</p>

        <details>
          <summary>Menu 1</summary>
          <nav class="dropdown-container">
            <ul>
              <li><a href>Item one</a></li>
              <li><a href>Item two</a></li>
              <li><a href>Item three</a></li>
              <li><a href>Item four</a></li>
              <li><a href>Item five</a></li>
            </ul>
          </nav>
        </details>

        <p>
          With the <code class="language-html">align-right</code> class it can
          be used on the other side of the screen:
        </p>

        <details class="align-right">
          <summary>Right side menu</summary>
          <nav class="dropdown-container">
            <ul>
              <li><a href>Item one</a></li>
              <li><a href>Item two</a></li>
              <li><a href>Item three</a></li>
              <li><a href>Item four</a></li>
              <li><a href>Item five</a></li>
            </ul>
          </nav>
        </details>

        <p>Or with an icon:</p>

        <details class="icon-dropdown">
          <summary class="icon-menu"></summary>
          <nav class="dropdown-container">
            <ul>
              <li><a href>Item one</a></li>
              <li><a href>Item two</a></li>
              <li><a href>Item three</a></li>
              <li><a href>Item four</a></li>
              <li><a href>Item five</a></li>
            </ul>
          </nav>
        </details>

        <p>With the <code class="language-html">accordion</code> class:</p>
        <details class="accordion">
          <summary>Lorum ipsum story</summary>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.</p>
        </details>

        <p>
          As a button by using the the
          <code class="language-html">button</code> class:
        </p>

        <details class="button">
          <summary>Button dropdown</summary>
          <nav class="dropdown-container">
            <ul>
              <li><a href>Item one</a></li>
              <li><a href>Item two</a></li>
              <li><a href>Item three</a></li>
              <li><a href>Item four</a></li>
              <li><a href>Item five</a></li>
            </ul>
          </nav>
        </details>

        <pre class="border stretch mt-1"><code class="language-html">{{ components_dropdowns }}</code></pre>
      </article>

      <article
        id="custom-inputs"
        class="card"
      >
        <header>
          <h2>Custom inputs</h2>
        </header>

        <h3 class="pt-1">Checkbox</h3>
        <hr />

        <label class="custom-input">
          Custom checkbox with full color control.
          <input
            type="checkbox"
            checked="checked"
          />
          <span class="checkmark"></span>
        </label>

        <label class="custom-input ml-1">
          Unchecked version.
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <label class="custom-input m-1">
          Disabled version.
          <input
            type="checkbox"
            name="custom"
            disabled
          />
          <span class="checkmark"></span>
        </label>

        <label class="custom-input m-1">
          Disabled checked version.
          <input
            type="checkbox"
            name="custom"
            disabled
            checked
          />
          <span class="checkmark"></span>
        </label>

        <p>You can use Javascript to add the indeterminate property to make it look indeterminate</p>
        <label class="custom-input ml-1">
          Indeterminate checkbox
          <input
            type="checkbox"
            id="indeterminateExample"
          />
          <span class="checkmark"></span>
        </label>

        <label class="custom-input ml-1">
          Disabled indeterminate checkbox
          <input
            type="checkbox"
            id="indeterminateExampleDisabled"
            disabled
          />
          <span class="checkmark"></span>
        </label>
        <br />

        <p>Or with the <code class="language-html">label-left</code> class:</p>

        <label class="custom-input label-left">
          Custom checkbox with the label on the left.
          <input
            type="checkbox"
            checked="checked"
          />
          <span class="checkmark"></span>
        </label>

        <pre class="border stretch mt-1"><code class="language-html">{{ components_checkbox }}</code></pre>
        <br />

        <h3 class="pt-1">Radiobutton</h3>
        <hr />

        <label class="custom-input">
          A chekced custom radiobutton with full color control.
          <input
            type="radio"
            name="custom"
            checked
          />
          <span class="checkmark"></span>
        </label>

        <label class="custom-input ml-1">
          Unchecked version.
          <input
            type="radio"
            name="custom"
          />
          <span class="checkmark"></span>
        </label>

        <label class="custom-input m-1">
          Disabled version.
          <input
            type="radio"
            name="custom"
            disabled
          />
          <span class="checkmark"></span>
        </label>

        <label class="custom-input m-1">
          Disabled checked version.
          <input
            type="radio"
            name="custom-disabled"
            disabled
            checked
          />
          <span class="checkmark"></span>
        </label>

        <p>Or with the <code class="language-html">label-left</code> class:</p>

        <label class="custom-input label-left">
          Custom radiobutton with label on the left.
          <input
            type="radio"
            name="custom"
          />
          <span class="checkmark"></span>
        </label>

        <pre class="border stretch mt-1"><code class="language-html">{{ components_radio }}</code></pre>
        <br />

        <h3>Switch</h3>
        <hr />
        <p>A switch is a checkbox with some additional styling.</p>

        <p>A normal switch:</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="toggle"></span>
          <span class="toggle-background"></span>
        </label>

        <p>An unchecked disabled switch:</p>
        <label class="switch">
          <input
            type="checkbox"
            disabled
          />
          <span class="toggle"></span>
          <span class="toggle-background"></span>
        </label>

        <p>A checked disabled switch:</p>
        <label class="switch">
          <input
            type="checkbox"
            checked
            disabled
          />
          <span class="toggle"></span>
          <span class="toggle-background"></span>
        </label>

        <p>
          A switch with <code class="lang-html">data-label="Off"</code> and
          <code class="lang-html">data-label-on="On"</code>:
        </p>
        <label class="switch">
          <input type="checkbox" />
          <span class="toggle"></span>
          <span
            class="toggle-background"
            data-label="Off"
            data-label-on="On"
          ></span>
        </label>

        <p>
          A switch with <code class="language-html">data-label="Off"</code> and
          <code class="language-html">data-label-on="On"</code> and class
          <code class="language-html">label-left</code>:
        </p>

        <label class="switch switch-margin">
          <input type="checkbox" />
          <span class="toggle"></span>
          <span
            class="toggle-background label-left"
            data-label="Off"
            data-label-on="On"
          ></span>
        </label>
        <p>
          A switch with only
          <code class="language-html">data-label</code>, shows only a label when
          unchecked:<br />
          <small>label-left can also be applied</small>
        </p>

        <label class="switch">
          <input type="checkbox" />
          <span class="toggle"></span>
          <span
            class="toggle-background"
            data-label="Off state only"
          ></span>
        </label>

        <p>
          A switch with only
          <code class="language-html">data-label-on</code>, shows only a label
          when checked:<br />
          <small>label-left can also be applied</small>
        </p>
        <label class="switch">
          <input
            type="checkbox"
            checked
          />
          <span class="toggle"></span>
          <span
            class="toggle-background"
            data-label-on="On state only"
          ></span>
        </label>

        <pre class="border stretch mt-1">
          <code class="language-html">
            {{ components_switch }}
          </code>
        </pre>

        <hr />
        <small>
          <b>N.B.</b> The data-label attribute is rendered as a pseudo element,
          make sure it will fit by applying the correct margins around the
          switch.
        </small>
      </article>
    </section>
  </main>
</template>