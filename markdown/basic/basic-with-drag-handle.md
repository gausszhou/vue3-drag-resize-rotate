# 带拖动句柄的基本组件

一个基本组件，只能通过一个句柄拖动，由prop <b>`drag-handle` </b>和一个有效的CSS选择器来指定，只能通过该DOM元素来拖动组件。


```html
<template>
  <div class="view-box">
    <div id="toolbar">限制允许拖动的范围</div>
    <div class="container">
      <VueDragResizeRotate v-for="(item, index) in list" :z="item.zIndex" :x="item.x" :y="item.y" :key="index" @activated="onActivated(index)"
        style="border: 1px solid black" :drag-handle="'.drag-handle'">
        <div class="full-box" :style="{ 'background-color': item.color }">
          <div class="drag-handle">Drag Only Here</div>
        </div>
      </VueDragResizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { zIndex: 1, x: 100, y: 100, color: 'red', },
        { zIndex: 2, x: 250, y: 200, color: 'green' },
        { zIndex: 3, x: 400, y: 100, color: 'blue', }
      ]
    }
  },
  methods: {
    onActivated(index) {
      console.log('onActivated', index)
      const indexs  = this.list.map(item => item.zIndex);
      const maxIndex = Math.max(...indexs);
      this.list[index].zIndex = maxIndex + 1;
    }
  }
};
</script>

<style scoped>
.full-box {
  width: 100%;
  height: 100%;
}
</style>```
