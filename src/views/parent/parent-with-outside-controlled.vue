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
        <VueDragReSizeRotate
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
        </VueDragReSizeRotate>
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
