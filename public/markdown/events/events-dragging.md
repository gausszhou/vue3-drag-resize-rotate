# 拖动位置和拖动事件

拖动组件时会发出`dragging(x,y)`事件。 拖动停止时会发生`dragstop(x,y)`事件。


```html
<template>
  <div class="view-box">
    <div id="toolbar">拖动组件触发事件dragging和停止拖拽dragstop</div>
    <div class="container">
      <VueDragReSizeRotate :w="200" :h="200" :r="0" @dragging="onDrag" @dragstop="onDragStop">
        <p>
          {{ dragging ? "你正在拖动" : "我就待在这里" }}
          <br />
          X: {{ x }} / Y: {{ y }}
        </p>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dragging: false,
      x: 0,
      y: 0
    };
  },
  beforeUnmount: function () {
    clearTimeout(this.timer);
  },
  methods: {
    onDrag: function (x, y) {
      this.dragging = true;
      this.x = x;
      this.y = y;
    },
    onDragStop: function (x, y) {
      console.log(x,y)
      this.dragging = false;
    }
  }
};
</script>
```
