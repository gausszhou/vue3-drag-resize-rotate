<grid20x40WithOffset10x20Max/>

# 网格20x40像素，具有10x10偏移和maxHeight，maxWidth值

如果提供的`maxHeight`和`maxWidth`值高于相应的网格值，则可以注意到调整大小会停止到较低的合适值。 例如，在`x`轴上，尊重`maxWidth`和`grid [x]`约束的最低有效值是80.这同样适用于`y`轴。

::: code-group
<<< @/src/views/grid/grid-20x40-with-offset-10x20-max.vue#template[Template]
<<< @/src/views/grid/grid-20x40-with-offset-10x20-max.vue#script[Script]
<<< @/src/style/grid.scss[Style]
:::