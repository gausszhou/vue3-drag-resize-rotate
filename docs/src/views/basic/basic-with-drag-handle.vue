// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Limit the range allowed to drag</div>
    <div class="container">
      <VueDragResizeRotate style="border: 1px solid black" :drag-handle="'.drag-handle'">
        <div class="drag-handle">Drag Only Here</div>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
// #endregion template
// #endregion all