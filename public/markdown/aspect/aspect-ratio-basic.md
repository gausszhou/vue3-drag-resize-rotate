# 具有宽高比的组件

具有<b>`lock-aspect-ratio` </b> prop的组件，用于在调整大小期间保持组件的宽高比。


```html
<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="ratio" />
      Toggle Lock Aspect Ratio
    </div>
    <div class="container">
      <VueDragResizeRotate :lock-aspect-ratio="ratio">
        <p>
          Keep aspect ratio using
          <b>:lock-aspect-ratio</b>
          prop.
        </p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratio: true
    };
  }
};
</script>
```
