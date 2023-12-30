# 基本组件

最基本的组件，没有任何道具，甚至可以在父元素之外自由移动。


```html
<template>
  <div class="view-box">
    <div id="toolbar">基本组件</div>
    <div class="container">
      <VueDragResizeRotate :x="0" :y="0" :w="200" :h="200">
        <p>你可以拖着我，按照自己的意愿调整大小。1</p>
      </VueDragResizeRotate>
      <VueDragResizeRotate :x="200" :y="200" :w="200" :h="200">
        <p>你可以拖着我，按照自己的意愿调整大小。2</p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
```
