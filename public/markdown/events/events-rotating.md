# 旋转角度和旋转事件


```html
<template>
  <div class="view-box">
    <div id="toolbar">调整旋转角度触发事件rotating和rotatestop</div>
    <div class="container">
      <VueDragReSizeRotate
        :w="200"
        :h="200"
        :x="0"
        :y="0"
        :rotatable="true"
        @rotating="onRotating"
        @rotatestop="onRotateStop"
      >
        <p>
          {{ rotating ? "你正在旋转" : "这个角度刚刚好" }}
          <br />
          Rotate: {{ rotate }}
        </p>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotating: false,
      x: 0,
      y: 0,
      width: 200,
      height: 200,
      rotate: 0
    };
  },
  methods: {
    onRotating: function (degree) {
      this.resizing = true;
      this.rotate = degree;
    },
    onRotateStop: function (degree) {
      this.resizing = false;
      this.rotate = degree;
    }
  }
};
</script>
```
