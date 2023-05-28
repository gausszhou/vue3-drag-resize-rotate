# 父元素控制的组件与网格

一个基本的父控制组件，<b>`x` </b>，<b>`y` </b>，<b>`w` </b>和<b>`h` </b> 用于控制组件位置和大小的道具。 __Notice__使用`grid` prop，组件只会对网格值的有效倍数作出反应。


```html
<template>
  <div class="view-box">
    <div id="toolbar">
      X:
      <input type="number" v-model.number="x" />
      Y:
      <input type="number" v-model.number="y" />
      Width:
      <input type="number" v-model.number="w" />
      Height:
      <input type="number" v-model.number="h" />
    </div>
    <div class="container">
      <div :style="style">
        <VueDragResizeRotate
          :parent="true"
          :grid="[20, 20]"
          :x="x"
          :y="y"
          :h="h"
          :w="w"
          @dragging="onDrag"
          @resizing="onResize"
        >
          <p>You cannot move me or resize me outside my parent.</p>
        </VueDragResizeRotate>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 10,
      y: 10,
      w: 100,
      h: 100,
      style: {
        position: "relative",
        backgroundColor: "#808080",
        background:
          "linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",
        backgroundSize: "20px 20px, 20px 20px",
        backgroundPosition: "10px 10px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box"
      }
    };
  },
  methods: {
    onDrag(left, top) {
      this.x = left;
      this.y = top;
    },
    onResize(left, top, width, height) {
      this.x = left;
      this.y = top;
      this.w = width;
      this.h = height;
    }
  }
};
</script>
```
