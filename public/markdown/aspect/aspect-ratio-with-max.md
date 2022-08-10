# 让组件具有宽高比和maxWidth，maxHeight

一个组件，<b>`lock-aspect-ratio` </b> prop和<b> maxWidth </b>设置为`300`，<b> maxHeight </b>设置为`250`。 请注意，锁定纵横比也会强制最大宽度为`250`。


```html
<template>
  <div class="view-box">
    <div id="toolbar">Size: {{ width }} x {{ height }}</div>
    <div class="container">
      <VueDragReSizeRotate :lock-aspect-ratio="true" :maxWidth="300" :maxHeight="250" @resizing="onResizing">
        <p>
          Keep aspect ratio and set
          <b>maxWidth</b>
          to 300 and
          <b>maxHeight</b>
          to 250.
        </p>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 200,
      height: 200
    };
  },
  methods: {
    onResizing(x, y, width, height) {
      this.width = width;
      this.height = height;
    }
  }
};
</script>
```
