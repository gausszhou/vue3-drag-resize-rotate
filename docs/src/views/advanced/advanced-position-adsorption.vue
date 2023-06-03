// #region template
<template>
  <div class="view-box">
    <div id="toolbar">位置吸附对齐</div>
    <div class="container">
      <VueDragResizeRotate
        :w="200"
        :h="200"
        :parent="true"
        :x="210"
        :min-width="200"
        :min-height="200"
        :snap="true"
        :snapTolerance="20"
        style="background-color: rgb(174, 213, 129)"
      ></VueDragResizeRotate>
      <VueDragResizeRotate
        :w="200"
        :h="200"
        :parent="true"
        :x="420"
        :min-width="200"
        :min-height="200"
        :snap="true"
        :snapTolerance="20"
        style="background-color: rgb(129, 212, 250)"
      ></VueDragResizeRotate>
    </div>
  </div>
</template>
// #endregion template