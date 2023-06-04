// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">
      min Width:
      <input type="number" v-model.number="minWidth" />
      min Height:
      <input type="number" v-model.number="minHeight" />
    </div>
    <div class="container">
      <VueDragResizeRotate
        :min-width="minWidth"
        :min-height="minHeight"
        :w="200"
        :h="200"
        @resizing="onResize"
        @resizestop="onResize"
      >
        <div>
          <p>Basic components, configurable</p>
          <b>minWidth</b>
          and
          <b>minHeight</b>
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
      minWidth: 200,
      minHeight: 200,
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