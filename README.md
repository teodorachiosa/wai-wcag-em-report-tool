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
- Added markdown support in report header fields (e.g. "Scope of the Evaluation" section)
- Color coded the outcome selection (Passed, Failed etc.)
- Custom CSS can be added to the final downloaded report by adding a "report_template.css" file in the path: "src/static/css/report_template".
