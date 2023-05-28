# 父级和网格上的组件约束，具有10x10偏移量

组件附加到具有小偏移的网格。 它的起始位置与父级的左上角不完全对齐。


```html
<template>
  <div class="view-box">
    <div id="toolbar">父级限制+网格+偏移</div>
    <div class="container">
      <div :style="style">
        <VueDragResizeRotate :parent="true" :grid="[20, 20]" :x="10" :y="10" :h="400" :w="400">
          <p>You cannot move me or resize me outside my parent. And my edges cannot touch the parent element.</p>
        </VueDragResizeRotate>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
};
</script>
```
