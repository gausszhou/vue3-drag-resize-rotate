# 带手柄道具的基本组件

您可以使用<b>`handles` </b> prop选择要为组件提供的句柄，它接受句柄数组。 例如，如果你想仅在横轴上进行成本调整，你只能提供左右句柄`：handles =“['ml'，'mr']”`。


```html
<template>
  <div class="view-box">
    <div id="toolbar">
      <label v-for="handle in Object.keys(handles)" :key="handle">
        <input type="checkbox" v-model="handles[handle]" />
        {{ handle }}
      </label>
    </div>
    <div class="container">
      <VueDragReSizeRotate :handles="enabledHandles" :prevent-deactivation="true" :w="250" :h="250">
        <p>Enable/disable handles.</p>
        <ul>
          <li v-for="handle in Object.keys(handles)" :key="handle">
            {{ handle }} - {{ handles[handle] ? "&check;" : "&cross;" }}
          </li>
        </ul>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      handles: {
        tl: true,
        tm: true,
        tr: true,
        mr: true,
        br: true,
        bm: true,
        bl: true,
        ml: true
      }
    };
  },
  computed: {
    enabledHandles() {
      return Object.keys(this.handles).filter(handle => this.handles[handle] === true);
    }
  }
};
</script>

<style scoped>
.vdr ul,
.VueDragReSizeRotate ul {
  margin: 0 0 0 25px;
}
</style>
```
