# 具有网格限制的组件在父级中具有maxWidth和maxHeight

附加到网格的组件，无法在其父元素之外拖动或调整大小，使用<b> maxWidth </b>和<b> maxHeight </b>来限制其大小。 __Notice__使用`20`作为`grid` prop为<b> y轴</b>，元素的`maxHeight`是`280`而不是`290`。


```html
<template>
  <div class="view-box">
    <div id="toolbar">Size: {{ width }} x {{ height }}</div>
    <div class="container">
      <div :style="style">
        <VueDragResizeRotate
          :parent="true"
          :max-width="290"
          :max-height="290"
          @resizing="onResizing"
          :grid="[10, 20]"
        >
          <p>
            Component costrained in parent with
            <b>maxWidth</b>
            and
            <b>maxHeight</b>
            equal to 290.
          </p>
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
        backgroundColor: "#808080",
        background:
          "linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",
        backgroundSize: "10px 20px, 10px 20px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box"
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
