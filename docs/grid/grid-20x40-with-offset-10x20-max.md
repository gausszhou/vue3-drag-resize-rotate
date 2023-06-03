<grid20x40WithOffset10x20Max/>

# Grid 20x40 pixels with 10x10 offset and maxHeight, maxWidth values

If the provided `maxHeight` and `maxWidth` values are higher than the corresponding grid values, you can notice that resizing stops to lower suitable values. For example, on the `x` axis, the lowest valid value to respect `maxWidth` and `grid[x]` constraints is 80. The same applies to the `y` axis.

::: code-group
<<< @/src/views/grid/grid-20x40-with-offset-10x20-max.vue#template[Template]
<<< @/src/views/grid/grid-20x40-with-offset-10x20-max.vue#script[Script]
<<< @/src/style/grid.scss[Style]
:::