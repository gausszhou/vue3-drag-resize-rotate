<template>
  <div class="view-box">
    <div id="toolbar">基本组件</div>
    <div class="container">
      <VueDragReSizeRotate :x="0" :y="0" :w="200" :h="200">
        <p>你可以拖着我，按照自己的意愿调整大小。1</p>
      </VueDragReSizeRotate>
      <VueDragReSizeRotate :x="200" :y="200" :w="200" :h="200">
        <p>你可以拖着我，按照自己的意愿调整大小。2</p>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>
