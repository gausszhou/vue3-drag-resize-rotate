// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Component with custom class name while dragging</div>
    <div class="container">
      <VueDragResizeRotate class-name-dragging="my-dragging-class" class-name="my-class">
        <p>
          You can also set the class name of the component in drag and drop
          <b>class-name-dragging</b>
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
.my-dragging-class {
  background-color: red;
  border: 1px solid black;
}
</style>
// #endregion style
// #endregion all