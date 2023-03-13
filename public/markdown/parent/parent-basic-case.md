# 父元素的组件限制

无法在其父元素之外拖动或调整大小的组件，使用prop <b>`：parent =“true”`</b>定义。


```html
<template>
  <div class="view-box">
    <div id="toolbar">父级容器基本案例</div>
    <div class="container">
      <VueDragResizeRotate :parent="true">
        <p>你不能将当前组件拖动或调整大小超过父元素容器</p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
```
