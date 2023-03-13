<template>
  <div class="view-box">
    <div id="toolbar">拖动时具有自定义类名的组件</div>
    <div class="container">
      <VueDragResizeRotate class-name-dragging="my-dragging-class" class-name="my-class">
        <p>
          你也可以设置组件处于拖拽式的类名
          <b>class-name-dragging</b>
        </p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>

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
