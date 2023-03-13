# onDragStart 回调的基本组件

一个基本组件，带有<b>`onDragStart` </b> prop，它接受一个在拖动开始时被调用的函数（单击或触摸元素）。 如果函数返回`false`，则取消操作。 您可以使用此功能来防止事件冒泡。


```html
<template>
  <div class="view-box">
    <div id="toolbar">
      <p :style="style">
        I turn red when
        <i>onDrag</i>
        is called. Callback then prevents draging.
      </p>
    </div>
    <div class="container">
      <VueDragResizeRotate :onDrag="onDrag"></VueDragResizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: {
        color: "black"
      }
    };
  },
  methods: {
    onDrag(e) {
      console.log(e);
      this.style.color = "red";
      return false;
    }
  }
};
</script>
```
