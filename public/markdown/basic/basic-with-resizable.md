# 组件是否可以调整大小

一个基本组件，<b>`resizable` </b> prop设置为`false`，因此它不可调整大小。


```html
<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="resizable" />
      Toggle resizable
    </div>
    <div class="container">
      <VueDragReSizeRotate :resizable="resizable">
        <p v-if="resizable">现在可以调整大小了</p>
        <p v-else>现在不可以调整大小</p>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resizable: false
    };
  }
};
</script>
```
