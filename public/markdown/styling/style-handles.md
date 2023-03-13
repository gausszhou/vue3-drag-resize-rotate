# 具有自定义类名称句柄的组件

具有handle的自定义类的组件，随prop <b>`class-name-handle` </b>提供。 这样，您可以单独设置每个手柄的样式。

__记得为句柄类设置`position：absolute`__

```html
<template>
  <div class="view-box">
    <div id="toolbar">具有自定义类名称句柄的组件</div>
    <div class="container">
      <VueDragResizeRotate class-name-handle="my-handle-class">
        <p>
          You can provide a default class name for the handle using the
          <b>class-name-handle</b>
          prop.
        </p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
```
