# 带拖动句柄的基本组件

一个基本组件，只能通过一个句柄拖动，由prop <b>`drag-handle` </b>和一个有效的CSS选择器来指定，只能通过该DOM元素来拖动组件。


```html
<template>
  <div class="view-box">
    <div id="toolbar">限制允许拖动的范围</div>
    <div class="container">
      <VueDragResizeRotate style="border: 1px solid black" :drag-handle="'.drag-handle'">
        <div class="drag-handle">Drag Only Here</div>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
```
