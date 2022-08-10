<template>
  <div class="view-box">
    <div id="toolbar">外部点击不会失活</div>
    <div class="container">
      <VueDragReSizeRotate :prevent-deactivation="true">
        <p>
          设置
          <b>:prevent-deactivation</b>
          属性，让组件不能取消激活状态
        </p>
      </VueDragReSizeRotate>
      <VueDragReSizeRotate :prevent-deactivation="true">
        <p>
          设置
          <b>:prevent-deactivation</b>
          属性，让组件不能取消激活状态
        </p>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>
