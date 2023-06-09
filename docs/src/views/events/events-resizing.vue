// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Resize the component to trigger the events @resizing or @resizestop</div>
    <div class="container">
      <VueDragResizeRotate :w="200" :h="200" :x="0" :y="0" :r="0" @resizing="onResize" @resizestop="onResizeStop">
        <p>
          {{ resizing ? "you are resizing" : "this size is okay" }}
          <br />
          X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}
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
      resizing: false,
      x: 0,
      y: 0,
      width: 200,
      height: 200
    };
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.resizing = true;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    onResizeStop: function () {
      this.resizing = false;
      console.log(arguments);
    }
  }
};
</script>
// #endregion script
// #endregion all