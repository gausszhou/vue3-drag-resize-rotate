// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="rotatable" />
      Toggle rotatable
      <input type="checkbox" v-model="resizable" />
      Toggle resizable
    </div>
    <div class="container">
      <VueDragResizeRotate
        :rotatable="rotatable"
        :resizable="resizable"
        @resizing="resizing"
        @rotating="rotating"
        :r="angle"
        :parent="true"
      >
        <p v-if="rotatable">It can now be rotated by an angle of{{ angle }}</p>
        <p v-else>Can't rotate now</p>
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
      rotatable: true,
      resizable: true,
      angle: 0
    };
  },
  methods: {
    rotating(val) {
      this.angle = val;
    },
    resizing(w, h) {
      console.log(w, h);
    }
  }
};
</script>
// #endregion script
// #endregion all