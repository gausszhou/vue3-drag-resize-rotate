# 允许放缩 

> 放缩时，建议保持父元素盒子和vue-drag-resize-rotate放缩值保持一致


```html
<template>
  <div class="view-box">
    <div id="toolbar">
      <el-input-number size="mini" v-model="scaleRatio" :step="0.1" :min="0.1" :max="10" />
      <span class="ml_10">scaleRatio</span>
    </div>
    <div class="container" :style="containerStyle()">
      <VueDragReSizeRotate
        :rotatable="rotatable"
        :x="position.x"
        :y="position.y"
        :w="position.w"
        :h="position.h"
        :r="angle"
        @rotating="rotating"
        :resizable="true"
        @resizing="resizing"
        :parent="true"
        :scaleRatio="scaleRatio"
      >
        <p>位置为({{ position.x }},{{ position.y }})</p>
        <p>大小为({{ position.w }},{{ position.h }})</p>
        <p>角度为{{ angle }}</p>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotatable: true,
      position: {
        x: 0,
        y: 0,
        w: 200,
        h: 200
      },
      angle: 0,
      scaleRatio: 1
    };
  },
  methods: {
    rotating(val) {
      this.angle = val;
    },
    resizing(x, y, w, h) {
      this.position = { x, y, w, h };
    },
    containerStyle() {
      return {
        transform: `scale(${this.scaleRatio})`
      };
    }
  }
};
</script>

<style scoped>
#toolbar {
  display: flex;
  align-items: center;
}
.container {
  transform-origin: left top;
}
</style>
```
