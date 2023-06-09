// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Basic case of parent container</div>
    <div class="container">
      <VueDragResizeRotate :parent="true">
        <p>You cannot drag or resize the current component beyond the parent element container</p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
// #endregion template
// #endregion all