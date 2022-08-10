<template>
  <div class="view-box">
    <div id="toolbar">
      <p :style="style">
        I turn red when
        <i>onResize</i>
        is called. Callback then prevents resizing.
      </p>
    </div>
    <div class="container">
      <VueDragReSizeRotate :on-resize="onResize"></VueDragReSizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: {
        color: "black"
      }
    };
  },
  methods: {
    onResize(e) {
      console.log(e)
      this.style.color = "red";
      return false;
    }
  }
};
</script>
