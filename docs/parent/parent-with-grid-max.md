<parentWithGridMax/>

# Components with grid constraints have maxWidth and maxHeight in the parent

Components attached to the grid, which cannot be dragged or resized outside of their parent element, use <b> maxWidth </b> and <b> maxHeight </b> to limit their size. __Notice__ Using `20` as `grid` prop for <b>y-axis</b>, element's `maxHeight` is `280` instead of `290`.

::: code-group
<<< @/src/views/parent/parent-with-grid-max.vue#template[Template]
<<< @/src/views/parent/parent-with-grid-max.vue#script[Script]
<<< @/src/style/grid.scss[Style]
:::