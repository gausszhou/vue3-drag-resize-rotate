// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Rotate the component to trigger the events @rotating or @rotatestop</div>
    <div class="container">
      <VueDragResizeRotate
        :w="200"
        :h="200"
        :x="0"
        :y="0"
        :rotatable="true"
        @rotating="onRotating"
        @rotatestop="onRotateStop"
      >
        <p>
          {{ rotating ? "你正在旋转" : "这个角度刚刚好" }}
          <br />
          Rotate: {{ rotate }}
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
      rotating: false,
      x: 0,
      y: 0,
      width: 200,
      height: 200,
      rotate: 0
    };
  },
  methods: {
    onRotating: function (degree) {
      this.resizing = true;
      this.rotate = degree;
    },
    onRotateStop: function (degree) {
      this.resizing = false;
      this.rotate = degree;
    }
  }
};
</script>
// #endregion script
// #endregion all