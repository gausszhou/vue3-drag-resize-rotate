// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">点击激活组件activated和取消激活deactivated</div>
    <div class="container">
      <VueDragResizeRotate :w="200" :h="200" @activated="onActivated" @deactivated="onDeactivated">
        <p v-if="active">这个组件正处于激活状态</p>
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