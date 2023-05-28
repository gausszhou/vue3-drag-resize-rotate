# 组件是否可以拖动位置

一个基本组件，<b>`draggable` </b> prop设置为`false`，因此它不可拖动。


```html
<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="draggable" id="draggable" />
      Toggle draggable
    </div>
    <div class="container">
      <VueDragResizeRotate :draggable="draggable">
        <p v-if="draggable">现在可以被拖动位置了，走起!!!</p>
        <p v-else>虽然不能拖动位置，但是可以调整大小(默认开启)</p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      draggable: false
    };
  }
};
</script>
```
