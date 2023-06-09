// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Click the component to trigger the event</div>
    <div class="container">
      <VueDragResizeRotate :w="200" :h="200" @activated="onActivated" @deactivated="onDeactivated">
        <p v-if="active">This component is active</p>
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
      active: false
    };
  },
  methods: {
    onActivated() {
      this.active = true;
    },
    onDeactivated() {
      this.active = false;
    }
  }
};
</script>
// #endregion script
// #endregion all