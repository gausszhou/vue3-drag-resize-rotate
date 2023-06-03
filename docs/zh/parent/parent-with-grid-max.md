<parentWithGridMax/>

# 具有网格限制的组件在父级中具有maxWidth和maxHeight

附加到网格的组件，无法在其父元素之外拖动或调整大小，使用<b> maxWidth </b>和<b> maxHeight </b>来限制其大小。 __Notice__使用`20`作为`grid` prop为<b> y轴</b>，元素的`maxHeight`是`280`而不是`290`。

::: code-group
<<< @/src/views/parent/parent-with-grid-max.vue#template[Template]
<<< @/src/views/parent/parent-with-grid-max.vue#script[Script]
<<< @/src/style/grid.scss[Style]
:::