# 阻止用户选中组件内文本


```html
<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="disableUserSelect1" />
      Toggle disableUserSelect1
      <input type="checkbox" v-model="disableUserSelect2" />
      Toggle disableUserSelect2
    </div>
    <div class="container">
      <VueDragResizeRotate :parent="true" :disableUserSelect="disableUserSelect1">
        <p>
          你
          {{ disableUserSelect1 ? "不可以" : "可以" }}
          选择组件内部的的文字，不妨双击试试!!!
          <br />
          <b>:disableUserSelect</b>
          prop equal to {{ disableUserSelect1 }}.
        </p>
      </VueDragResizeRotate>
      <VueDragResizeRotate :parent="true" :disableUserSelect="disableUserSelect2">
        <p>
          你
          {{ disableUserSelect2 ? "不可以" : "可以" }}
          选择组件内部的的文字，不妨双击试试!!!
          <br />
          <b>:disableUserSelect</b>
          prop equal to {{ disableUserSelect2 }}.
        </p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disableUserSelect1: false,
      disableUserSelect2: false
    };
  }
};
</script>
```
