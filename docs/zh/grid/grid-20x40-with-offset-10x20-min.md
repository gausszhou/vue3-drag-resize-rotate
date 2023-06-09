<grid20x40WithOffset10x20Min/>

# 网格20x40像素，具有10x10偏移和minHeight，minWidth值

如果您提供的`minHeight`和`minWidth`值低于相应的网格值，您可以注意到调整大小会停止到最低的合适值。 例如，在`x`轴上，尊重`minWidth`和`grid [x]`约束的最低有效值是40.同样适用于`y`轴。

::: code-group
<<< @/src/views/grid/grid-20x40-with-offset-10x20-min.vue#template[Template]
<<< @/src/views/grid/grid-20x40-with-offset-10x20-min.vue#script[Script]
<<< @/src/style/grid.scss[Style]
:::