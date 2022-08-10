# 具有宽高比的组件在20x20网格上进行了受限

使用`lock-aspect-ratio`时，在网格上使用组件的成本并不是很好。 您可以通过拖动（例如右手柄或底部手柄）来注意到您有不同的结果。


```html
<template>
  <div class="view-box">
    <div id="toolbar"></div>
    <div class="container">
      <div :style="style">
        <VueDragReSizeRotate :w="400" :h="200" :lock-aspect-ratio="true" :grid="[20, 20]">
          <p>Keep aspect ratio in component costrained on grid.</p>
        </VueDragReSizeRotate>
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
        height: "100%",
        background:
          "linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",
        backgroundSize: "20px 20px, 20px 20px"
      }
    };
  }
};
</script>
```
