<parentWithGrid/>

# 父级中具有网格约束的组件

附加到网格的组件，不能在其父元素之外拖动或调整大小，使用prop <b>`：parent =“true”`</b>定义。 在这种情况下，父级的大小完全匹配网格。

::: code-group
<<< @/src/views/parent/parent-with-grid.vue#template[Template]
<<< @/src/views/parent/parent-with-grid.vue#script[Script]
<<< @/src/style/grid.scss[Style]
:::