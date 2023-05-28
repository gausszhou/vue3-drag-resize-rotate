# 父级中具有网格约束的组件

附加到网格的组件，不能在其父元素之外拖动或调整大小，使用prop <b>`：parent =“true”`</b>定义。 在这种情况下，父级的大小完全匹配网格。


```html
<template>
  <div class="view-box">
    <div id="toolbar">父级+网格</div>
    <div class="container">
      <div :style="style">
        <VueDragResizeRotate :parent="true" :grid="[20, 20]">
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
      style: {
        position: "relative",
        backgroundColor: "#808080",
        background:
          "linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",
        backgroundSize: "20px 20px, 20px 20px",
        height: "100%",
        width: "100%"
      }
    };
  }
};
</script>
```
