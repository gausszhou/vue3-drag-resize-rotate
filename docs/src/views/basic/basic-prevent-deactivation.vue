// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">外部点击不会失活</div>
    <div class="container">
      <VueDragResizeRotate :prevent-deactivation="true">
        <p>
          set the property
          <b>:prevent-deactivation</b>
          so that the component cannot be deactivated
        </p>
      </VueDragResizeRotate>
      <VueDragResizeRotate :prevent-deactivation="true">
        <p>
          set the property
          <b>:prevent-deactivation</b>
          so that the component cannot be deactivated
        </p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
// #endregion template
// #endregion all