// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Drag the component to trigger the events @dragging or @dragstop</div>
    <div class="container">
      <VueDragResizeRotate :w="200" :h="200" :r="0" @dragging="onDrag" @dragstop="onDragStop">
        <p>
          {{ dragging ? "you are dragging" : "i will stay here" }}
          <br />
          X: {{ x }} / Y: {{ y }}
        </p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
// #endregion template
// #region script
<script>
export default {
  data() {
    return {
      dragging: false,
      x: 0,
      y: 0
    };
  },
  beforeUnmount: function () {
    clearTimeout(this.timer);
  },
  methods: {
    onDrag: function (x, y) {
      this.dragging = true;
      this.x = x;
      this.y = y;
    },
    onDragStop: function (x, y) {
      console.log(x,y)
      this.dragging = false;
    }
  }
};
</script>
// #endregion script
// #endregion all