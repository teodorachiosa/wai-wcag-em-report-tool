export function downloadFileHTML({ contents, name = 'download.txt', type = 'text/plain', lang = 'en' }) {
  const _a = document.createElement('a');

  const htmlDocument = document.implementation.createHTMLDocument(name);
  htmlDocument.body.innerHTML = contents.innerHTML;

  // set charset
  const meta = document.createElement("meta");
  meta.setAttribute("charset", "utf-8");
  htmlDocument.head.appendChild(meta);

  // set lang 
  htmlDocument.documentElement.setAttribute('lang', lang);

  // remove certain elements
  Array.from(
    htmlDocument.querySelectorAll("button, input, aside, footer, .Controls, #site-header, .Nav, .strip")
  ).forEach((el) => {
    el.parentNode.removeChild(el);
  });

  // remove certain attributes
  Array.from(
    htmlDocument.querySelectorAll("[tabindex], [class]")
  ).forEach((el) => {
    el.removeAttribute("tabindex");
    el.removeAttribute("class");
  });

  // add CSS 
  const styleEl = document.createElement("style");
  const styleElContents = document.createTextNode(`
  table {
    border-collapse: collapse;
    width: 100%;
  }
  table,
  td,
  th {
    border: 1px solid #3b3b3b;
  }
  td:not(:last-child),
  th {
    padding: 1em;
    vertical-align: top;
    text-align: left;
  }
  td:not([class]):last-child {
    padding: 0 1em;
  }
  dd *:first-child {margin-top: 0;}
  dd *:last-child {margin-bottom: 0;}
  `);
  styleEl.appendChild(styleElContents);
  htmlDocument.head.append(styleEl);

  // add more custom CSS
  const customStyleEl = document.createElement('style');

  let customStyleElContents = '';

  fetch('/bundles/report_template.css')
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      customStyleElContents = data;

      if (customStyleElContents) {
        customStyleEl.appendChild(document.createTextNode(customStyleElContents));
        htmlDocument.head.append(customStyleEl);
      }
    })
    .catch((error) => {
      console.log(
        'No custom report styles were found.',
        error
      );
    })
    .finally(() => {
      const file = new Blob(
        [`<!doctype HTML>${htmlDocument.documentElement.outerHTML}`],
        {
          type: 'text/html'
        }
      );

      _a.href = URL.createObjectURL(file);

      _a.download = name;

      _a.click();
    });
}

export function downloadFileJSON({ contents, name = 'download.txt', type = 'text/plain' }) {
  const _a = document.createElement('a');
  const file = new Blob([contents], { type });

  _a.href = URL.createObjectURL(file);
  _a.download = name;

  _a.click();
}
