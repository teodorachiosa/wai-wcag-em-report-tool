<img width="1899" height="1079" alt="A screenshot of WCAG Report Tool in light mode, as modified by this fork. More details about the changes can be found in the list below." src="https://github.com/user-attachments/assets/1d47ed85-3ecc-495d-96af-e97a0f4e4c73" />
<img width="1897" height="1079" alt="A screenshot of WCAG Report Tool in dark mode, as modified by this fork. More details about the changes can be found in the list below." src="https://github.com/user-attachments/assets/5d12f058-fbe1-489e-96a9-85d5fe030086" />


# WCAG-EM Report Tool (Modified)

Fork of: [w3c/wai-wcag-em-report-tool](https://github.com/w3c/wai-wcag-em-report-tool)

Live demo: [teodorachiosa.github.io/wai-wcag-em-report-tool](https://teodorachiosa.github.io/wai-wcag-em-report-tool/)

## What's different:

- Report tool theming options. To change the color, change the input labelled "Base color". Make sure you pick a contrasting color!
- Light or dark mode. To toggle between light or dark mode, toggle the checkbox labelled "Dark mode". Make sure you pick a contrasting "Base color"!
- The report is saved to local storage on input changes in order to avoid losing progress on browser crash.
- The report can be opened from local storage by using the button titled "Open from local storage" in the "Overview" step.
- The success criteria in the auditor ("Audit Sample" step) is sticky - it sticks to the top of the screen.
- The sample pages in the auditor are sticky (they stick to the top of the page).
- The details for sample pages are open by default.
- In the exported HTML report, the success criteria in the table headers are actual links to the W3 success criteria.
- The styles are refactored to use [layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) for easier customization.
- Markdown is supported in the report header fields (e.g. "Scope of the Evaluation" section).
- The outcome (passed, failed etc.) for success criteria is color coded.
- The final downloaded report has prettier styling. The styles are located in 'src/static/css/default_report_template.css'.
- The final downloaded report can have custom styles.
  - Only works for local development!
  - Create a "report_template.css" file in the "src/static/css/report_template" folder and then follow the [Local development](https://github.com/w3c/wai-wcag-em-report-tool?tab=readme-ov-file#local-development) steps to run the app.
