# 基本控制组件

一个基本的受控组件，<b>`x` </b>，<b>`y` </b>，<b>`w` </b>和<b>`h` </b> 控制组件的位置和大小。 你也应该
提供回调以将状态与父进程同步。


```html
<template>
  <div class="view-box">
    <div id="toolbar">
      X:
      <input type="number" v-model.number="x" />
      Y:
      <input type="number" v-model.number="y" />
      Width:
      <input type="number" v-model.number="w" />
      Height:
      <input type="number" v-model.number="h" />
    </div>
    <div class="container">
      <VueDragResizeRotate :x="x" :y="y" :w="w" :h="h" @resizing="onResize" @dragging="onDrag">
        <p>Basic controlled component.</p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 0,
      y: 0,
      w: 100,
      h: 100
    };
  },
  methods: {
    onDrag(left, top) {
      this.x = left;
      this.y = top;
    },
    onResize(left, top, width, height) {
      this.x = left;
      this.y = top;
      this.w = width;
      this.h = height;
    }
  }
};
</script>
```
