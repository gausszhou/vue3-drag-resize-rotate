// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">
      Max Width:
      <input type="number" v-model.number="maxWidth" />
      Max Height:
      <input type="number" v-model.number="maxHeight" />
    </div>
    <div class="container">
      <VueDragResizeRotate
        :max-width="maxWidth"
        :max-height="maxHeight"
        :w="200"
        :h="200"
        @resizing="onResize"
        @resizestop="onResize"
      >
        <div>
          <p>Basic components, configurable</p>
          <b>maxWidth</b>
          and
          <b>maxHeight</b>
          attributes
          <p>w:{{ w }},h:{{ h }}</p>
        </div>
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
      maxWidth: 300,
      maxHeight: 300,
      w: 200,
      h: 200
    };
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.w = width;
      this.h = height;
    }
  }
};
</script>
// #endregion script
// #endregion all