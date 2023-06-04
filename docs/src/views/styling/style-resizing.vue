// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Component with custom class name on resize</div>
    <div class="container">
      <VueDragResizeRotate class-name-resizing="my-resizing-class" class-name="my-class">
        <p>
          When the same component is being stretched, set the class name
          <b>class-name-resizing</b>
          prop.
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
.my-resizing-class {
  background-color: blue;
  border: 1px solid black;
  color: white;
}
</style>
// #endregion style
// #endregion all