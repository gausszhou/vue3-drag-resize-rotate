<template>
  <div class="view-box">
    <div id="toolbar">
      <p :style="style">
        I turn red when
        <i>onDrag</i>
        is called. Callback then prevents draging.
      </p>
    </div>
    <div class="container">
      <VueDragResizeRotate :onDrag="onDrag"></VueDragResizeRotate>
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
    onDrag(e) {
      console.log(e);
      this.style.color = "red";
      return false;
    }
  }
};
</script>
