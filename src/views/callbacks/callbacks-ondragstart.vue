<template>
  <div class="view-box">
    <div id="toolbar">
      <p :style="style">
        I turn red when
        <i>onDragStart</i>
        is called. Callback then prevents activation.
      </p>
    </div>
    <div class="container">
      <VueDragReSizeRotate :on-drag-start="onDragStart"></VueDragReSizeRotate>
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
    onDragStart(e) {
      console.log(e);
      this.style.color = "red";
      return false;
    }
  }
};
</script>
