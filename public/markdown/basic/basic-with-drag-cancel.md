# 组件拖动取消的基本组件

一个基本组件，无法通过句柄拖动，由prop <b>`drag-cancel` </b>和有效的CSS选择器来指定，该范围无法将无法拖动组件。


```html
<template>
  <div class="view-box">
    <div id="toolbar">限制禁止拖动的范围</div>
    <div class="container">
      <VueDragResizeRotate style="border: 1px solid black" :drag-cancel="'.drag-cancel'">
        <div class="drag-cancel">Cannot Drag Here</div>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
```
