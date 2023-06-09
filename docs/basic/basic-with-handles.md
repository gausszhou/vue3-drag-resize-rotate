<basicWithHandles/>

# Basic components with handle props

You can choose which handles to give your component with the <b>`handles` </b> prop, which accepts an array of handles. For example, if you want cost adjustments only on the horizontal axis, you can only provide left and right handles `:handles="['ml','mr']"`.

::: code-group
<<< @/src/views/basic/basic-with-handles.vue#template[Template]
<<< @/src/views/basic/basic-with-handles.vue#script[Script]
<<< @/src/views/basic/basic-with-handles.vue#style[Style]
:::