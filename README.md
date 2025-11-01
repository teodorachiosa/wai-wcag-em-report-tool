# WCAG-EM Report Tool (Modified)

Fork of: [w3c/wai-wcag-em-report-tool](https://github.com/w3c/wai-wcag-em-report-tool)

Live demo: [teodorachiosa.github.io/wai-wcag-em-report-tool](https://teodorachiosa.github.io/wai-wcag-em-report-tool/)

## What's different:

- Report tool theming options (main color, light or dark mode)
- The report is saved to local storage on input changes
- The report can be opened from local storage by using the button titled "Open from local storage" in the Overview step
- The criteria in the audit is sticky (sticks to the top of the screen)
- The sample pages in the auditor are sticky (they stick to the top of the page)
- The details for sample pages are open by default
- In the exported HTML report, the success criteria in the table headers are links to the W3 success criteria
- The styles are refactored to use [layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) for easier customization
- Markdown is supported in the report header fields (e.g. "Scope of the Evaluation" section)
- The outcome (passed, failed etc.) for each success criterion is color coded.
- The final downloaded report has prettier styling. The styles are located in 'src/static/css/default_report-template.css'.
- The final downloaded report can have custom styles. 
  - Only works for local development! 
  - Create a "report_template.css" file in the "src/static/css/report_template" folder, build the app (`npm run build`), serve it (`npm run dev`), use the app (go to 'localhost:10001') and then download your report.
