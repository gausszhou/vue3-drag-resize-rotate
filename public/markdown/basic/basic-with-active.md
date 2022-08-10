# 外部控制组件的活动状态

一个基本组件，带有<b>`active` </b> prop，用于控制组件外部的活动状态。


```html
<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="active1" />
      Toggle Active1
      <input type="checkbox" v-model="active2" />
      Toggle Active2
    </div>
    <div class="container">
      <VueDragReSizeRotate :active="active1">
        <p>
          外部组件通过控制
          <b>:active</b>
          prop来控制组件的激活状态
        </p>
      </VueDragReSizeRotate>
      <VueDragReSizeRotate :active="active2">
        <p>
          外部组件通过控制
          <b>:active</b>
          prop来控制组件的激活状态
        </p>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active1: false,
      active2: false
    };
  },
  methods: {}
};
</script>
```
