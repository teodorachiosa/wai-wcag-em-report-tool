<!-- @Layout:Base -->
<div class="Controls default-grid">
  <LanguageSelect locales="{locales}" />
</div>

<div id="site-header" class="site-header">
  <div class="default-grid">
    <div class="tool-header">
      <div class="tool-header-name">
        WCAG-EM R<span class="display-phablet">eport </span>T<span class="display-phablet">ool</span>
      </div>
      <div class="tool-header-logo">
        <a href="http://w3.org/"><img
            alt="W3C"
            src="{`${$basepath}/images/w3c.svg`}"
            width="50"
            height="24"
          /></a>
        <a href="http://w3.org/WAI/"><img
            alt="Web Accessibility Initiative"
            src="{`${$basepath}/images/wai.svg`}"
            width="90"
            height="24"
          /></a>
      </div>
      <div class="tool-header-color-options">
        <div class="base-color-control">
          <label for="base-color">Base color</label>
          <input
            type="color"
            id="base-color"
            value="{defaultColor}"
            on:input="{onColorChange}"
          />
        </div>
        <div class="dark-mode-control">
          <label for="dark-mode">Dark mode</label>
          <input
            type="checkbox"
            checked="{defaultMode}"
            id="dark-mode"
            on:change="{onDarkModeToggle}"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<NavigationBar />

<slot />

{#if !isAcknowledgements}
  <Pager label="{TRANSLATED.STEP}" context="{pagerContext}" />
{/if}

<!-- /@Layout -->

<style>
  .site-header .tool-header {
    grid-column: 2 / 10;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tool-header-color-options {
    display: flex;
    gap: 1rem;
  }
  .base-color-control,
  .dark-mode-control {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
  .base-color-control input {
    margin: 0 !important;
    padding: 0 !important;
  }
  .dark-mode-control input {
    margin: 0 !important;
  }
  .BaseLayout {
    padding: 2em 1em;
  }

  .Controls {
    font-size: 0.8125em;
  }

  @media (min-width: 60em) {
    .BaseLayout {
      padding: 2em 0;
    }
  }
</style>

<script>
  import { getContext } from 'svelte';
  import { useLocation } from 'svelte-navigator';

  import { routes, basepath } from '@app/stores/appStore.js';
  import locales from '@app/locales/index.json';

  import LanguageSelect from '@app/components/ui/LanguageSelect.svelte';
  import NavigationBar from '@app/components/ui/NavigationBar.svelte';
  import Pager from '@app/components/ui/Pager.svelte';

  const { translate } = getContext('app');
  const location = useLocation();

  const defaultColor = initializeColor();
  const defaultMode = initializeDarkMode();

  $: TRANSLATED = {
    STEP: $translate('UI.NAV.STEP', { default: 'step' })
  };

  $: isAcknowledgements = $location.pathname === $routes.ACKNOWLEDGEMENTS.path;

  $: pagerContext = Object.keys($routes).map((key) => {
    return $routes[key];
  });

  function initializeColor() {
    const savedColorCookie = getCookie('baseColor');
    const defaultColor = savedColorCookie ?? '#011265';

    if (savedColorCookie) {
      document.documentElement.style.setProperty('--base-color', savedColorCookie);
    }

    return defaultColor;
  }

  function initializeDarkMode() {
    const savedModeCookie = getCookie('darkMode');
    const defaultDarkMode = savedModeCookie === 'true';

    document.documentElement.style.setProperty(
      'color-scheme',
      defaultDarkMode ? 'dark' : 'light'
    );

    return defaultDarkMode;
  }

  function onColorChange(event) {
    const color = event.target.value;
    document.documentElement.style.setProperty('--base-color', color);
    setCookie('baseColor', color);
  }

  function onDarkModeToggle(event) {
    const isChecked = event.target.checked;
    document.documentElement.style.setProperty(
      'color-scheme',
      isChecked ? 'dark' : 'light'
    );
    setCookie('darkMode', isChecked ? 'true' : 'false');
  }

  function setCookie(name, value) {
    const expires = new Date(
      Date.now() + 365 * 24 * 60 * 60 * 1000
    ).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
</script>
