<grid20x40WithOffset10x20Min/>

# Grid 20x40 pixels with 10x10 offset and minHeight, minWidth values

If you provide minHeight and minWidth values lower than the corresponding grid values, you can notice that the resizing stops at the lowest suitable value. For example, on the `x` axis, the minimum valid value to respect `minWidth` and `grid[x]` constraints is 40. The same applies to the `y` axis.

::: code-group
<<< @/src/views/grid/grid-20x40-with-offset-10x20-min.vue#template[Template]
<<< @/src/views/grid/grid-20x40-with-offset-10x20-min.vue#script[Script]
<<< @/src/style/grid.scss[Style]
:::