// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="disableUserSelect1" />
      Toggle disableUserSelect1
      <input type="checkbox" v-model="disableUserSelect2" />
      Toggle disableUserSelect2
    </div>
    <div class="container">
      <VueDragResizeRotate :parent="true" :disableUserSelect="disableUserSelect1">
        <p>
          {{ disableUserSelect1 ? "不可以" : "可以" }}
          Select the text inside the component, double-click to try
          <br />
          <b>:disableUserSelect</b>
          prop equal to {{ disableUserSelect1 }}.
        </p>
      </VueDragResizeRotate>
      <VueDragResizeRotate :parent="true" :disableUserSelect="disableUserSelect2">
        <p>
          {{ disableUserSelect2 ? "不可以" : "可以" }}
          Select the text inside the component, double-click to try
          <br />
          <b>:disableUserSelect</b>
          prop equal to {{ disableUserSelect2 }}.
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
      disableUserSelect1: false,
      disableUserSelect2: false
    };
  }
};
</script>
// #endregion script
// #endregion all