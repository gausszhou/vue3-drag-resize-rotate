# 具有宽高比的组件在父级中被限制

在父级中使用的组件，<b>`lock-aspect-ratio` </b> prop用于在调整大小期间保持组件的宽高比。


```html
<template>
  <div class="view-box">
    <div id="toolbar"></div>
    <div class="container">
      <VueDragResizeRotate :lock-aspect-ratio="true" :parent="true">
        <p>Combine aspect ratio and costrain in parent.</p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
```
