<template>
  <div class="view-box">
    <div id="toolbar">父级容器基本案例</div>
    <div class="container">
      <VueDragReSizeRotate :parent="true">
        <p>你不能将当前组件拖动或调整大小超过父元素容器</p>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>
