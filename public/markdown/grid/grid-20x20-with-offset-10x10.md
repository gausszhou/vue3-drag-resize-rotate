# 网格20x20像素，偏移量为10x10

始终从组件的左上角计算网格。 在此示例中，您可以看到它相对于父元素具有偏移量。 这对于父元素中的成本要求很重要。

```html
<template>
  <div class="view-box">
    <div id="toolbar">Size: {{ width }} x {{ height }}</div>
    <div class="container">
      <div :style="style">
        <VueDragResizeRotate :grid="[20, 20]" :x="10" :y="10" @resizing="onResizing">
          <p>Grid 20x20 starting with a 10x10 offset</p>
        </VueDragResizeRotate>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 200,
      height: 200,
      style: {
        position: "relative",
        height: "100%",
        width: "100%",
        backgroundColor: "#808080",
        background:
          "linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",
        backgroundSize: "20px 20px, 20px 20px",
        backgroundPosition: "10px 10px"
      }
    };
  },
  methods: {
    onResizing(x, y, width, height) {
      this.width = width;
      this.height = height;
    }
  }
};
</script>
```
