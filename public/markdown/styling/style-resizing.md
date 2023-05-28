# 调整大小时具有自定义类名的组件

调整大小时具有自定义类名的组件，由prop <b>`class-name-resizing` </b>提供。

```html
<template>
  <div class="view-box">
    <div id="toolbar">调整大小时具有自定义类名的组件</div>
    <div class="container">
      <VueDragResizeRotate class-name-resizing="my-resizing-class" class-name="my-class">
        <p>
          同样组件处于被拉伸时，设置类名
          <b>class-name-resizing</b>
          prop.
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
.my-resizing-class {
  background-color: blue;
  border: 1px solid black;
  color: white;
}
</style>
```
