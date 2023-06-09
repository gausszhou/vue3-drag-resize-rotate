<parentWithGrid/>

# Components with grid constraints in parent

Components that are attached to the grid and cannot be dragged or resized outside of their parent element, defined using prop <b>`:parent="true"`</b>. In this case the size of the parent exactly matches the grid.

::: code-group
<<< @/src/views/parent/parent-with-grid.vue#template[Template]
<<< @/src/views/parent/parent-with-grid.vue#script[Script]
<<< @/src/style/grid.scss[Style]
:::