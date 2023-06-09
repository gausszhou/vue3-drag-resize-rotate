// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Conflict Detection</div>
    <div class="container">
      <VueDragResizeRotate
        :w="200"
        :h="200"
        :parent="true"
        :x="210"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        :rotatable="true"
        style="background-color: rgb(174, 213, 129)"
      ></VueDragResizeRotate>
      <VueDragResizeRotate
        :w="200"
        :h="200"
        :parent="true"
        :x="420"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        :rotatable="true"
        style="background-color: rgb(129, 212, 250)"
      ></VueDragResizeRotate>
    </div>
  </div>
</template>
// #endregion template