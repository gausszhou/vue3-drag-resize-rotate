<template>
  <div class="view-box">
    <div id="toolbar">Size: {{ width }} x {{ height }}</div>
    <div class="container">
      <VueDragResizeRotate :lock-aspect-ratio="true" :maxWidth="300" :maxHeight="250" @resizing="onResizing">
        <p>
          Keep aspect ratio and set
          <b>maxWidth</b>
          to 300 and
          <b>maxHeight</b>
          to 250.
        </p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 200,
      height: 200
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
