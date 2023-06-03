// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">基本组件</div>
    <div class="container">
      <VueDragResizeRotate :x="0" :y="0" :w="200" :h="200">
        <p>你可以拖着我，按照自己的意愿调整大小。1</p>
      </VueDragResizeRotate>
      <VueDragResizeRotate :x="200" :y="200" :w="200" :h="200">
        <p>你可以拖着我，按照自己的意愿调整大小。2</p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
// #endregion template
// #endregion all
