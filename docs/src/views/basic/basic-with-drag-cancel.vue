// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Limit the range where dragging is prohibited</div>
    <div class="container">
      <VueDragResizeRotate style="border: 1px solid black" :drag-cancel="'.drag-cancel'">
        <div class="drag-cancel">Cannot Drag Here</div>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
// #endregion template
// #endregion all