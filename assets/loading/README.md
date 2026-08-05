# Designer loading-state assets

Everything shown in the Designer loading page
(`preview/templates-designer-loading.html`), collected for handoff.

Display color in the loader is **Navy-900 `#081A4D`** (navy). All single-color
SVGs use `currentColor` or are pre-tinted navy — recolor as needed.

```
connectors/  connector logos cycled during "Loading snaps"
toolbar/     toolbar glyphs cycled during "Loading toolbar" (authored here)
```

The Baklava mark shown while loading is the top-level `assets/baklava-mark.svg`
(a neutral white "B" monogram). The loader tints it navy with
`filter: invert(1) brightness(0.16)`.

## connectors/
Cycled in order: Salesforce → AWS → SAP → Azure → Snowflake → Google → Databricks → Slack → Shopify.

| File | Source | License |
|---|---|---|
| `salesforce.svg`, `aws.svg`, `microsoft.svg` (Azure), `google.svg`, `slack.svg`, `shopify.svg` | Font Awesome 6 Free — brands | [CC BY 4.0](https://fontawesome.com/license/free) (attribute Font Awesome) |
| `sap.svg`, `snowflake.svg`, `databricks.svg` | Simple Icons (pre-tinted `#081A4D`) | Icons [CC0](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md) |

**Not available — no icon-library source** (pulled from Simple Icons at the vendors'
request; absent from Font Awesome): **Workday, ServiceNow, NetSuite, Oracle.**
Add licensed SVGs here and to the `steps` array in the loading page to include them.

All connector logos are third-party **trademarks of their respective owners**, used
here to represent Baklava Snaps.

## toolbar/
Authored for this design system (no third-party rights). `currentColor`.

| File | Represents |
|---|---|
| `run.svg` | Execute |
| `configure.svg` | Properties / configuration |
| `validate.svg` | Validate |
| `stats.svg` | Statistics |
