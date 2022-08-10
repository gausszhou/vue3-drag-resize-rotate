# 表单的基本组件

一个基本组件，内部有一个表单。 输入应该是可聚焦的，按钮应该是可点击的。


```html
<template>
  <div class="view-box">
    <div id="toolbar">组件插槽</div>
    <div class="container">
      <VueDragReSizeRotate>
        <p>基本组件内插入表单</p>
        <form @submit.stop.prevent="onSubmit">
          <input type="text" name="input" value="Hello" />
          <button type="submit">Submit</button>
        </form>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit(e) {
      console.log(e);
      alert("You just submitted the form!");
    }
  }
};
</script>
```
