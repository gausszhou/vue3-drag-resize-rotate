# 限制可拖动的轴

一个基本组件，使用`axis`来控制可拖动的轴。 合适的值是`x`，`y`或`both`。

```html
<template>
  <div class="view-box">
    <div id="toolbar">
      <label>
        <input type="checkbox" v-model="x" />
        X
      </label>
      <label>
        <input type="checkbox" v-model="y" />
        Y
      </label>
    </div>
    <div class="container">
      <VueDragReSizeRotate :axis="axis">
        <p>Draggable on {{ axis }} axis.</p>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: true,
      y: true
    };
  },
  computed: {
    axis() {
      if (this.x && this.y) return "both";
      if (this.x) return "x";
      if (this.y) return "y";
      return false;
    }
  }
};
</script>
```
