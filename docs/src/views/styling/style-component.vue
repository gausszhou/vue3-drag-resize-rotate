// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Components with custom class names</div>
    <div class="container">
      <VueDragResizeRotate class-name="my-class">
        <p>
          你可以给组件设置一个类名，覆盖其默认类名
          <b>class-name</b>
        </p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
// #endregion template
// #region style
<style scoped>
.my-class {
  border: 1px solid red;
  -webkit-transition: background-color 200ms linear;
  -ms-transition: background-color 200ms linear;
  transition: background-color 200ms linear;
}
</style>
// #endregion style
// #endregion all