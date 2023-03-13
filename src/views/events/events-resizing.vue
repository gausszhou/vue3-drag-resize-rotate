<template>
  <div class="view-box">
    <div id="toolbar">调整大小触发事件resizing和停止调整resizestop</div>
    <div class="container">
      <VueDragResizeRotate :w="200" :h="200" :x="0" :y="0" :r="0" @resizing="onResize" @resizestop="onResizeStop">
        <p>
          {{ resizing ? "你正在调整大小" : "这个大小还行" }}
          <br />
          X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}
        </p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>

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
