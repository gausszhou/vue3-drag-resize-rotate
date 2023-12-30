# 具有z-index控制的基本组件

一个基本组件，使用<b>`z-index` </b> prop来控制组件外部的`z-index`。 如果没有提供，它将采用值`auto`。



```html
<template>
  <div class="view-box">
    <div id="toolbar">
      Change z-index:
      <input type="number" v-model="z" />
    </div>
    <div class="container">
      <VueDragResizeRotate :z="z" :x="150" :y="150" style="background-color: #ccc">
        <div>
          通过
          <b>:z属性</b>
          <p>控制组件的z-index:{{ z }}层级</p>
        </div>
      </VueDragResizeRotate>
      <div
        style="
          width: 200px;
          height: 200px;
          background-color: red;
          position: absolute;
          top: 100px;
          left: 100px;
          z-index: 1;
          text-align: center;
          font-size: 24px;
        "
      >
        1
      </div>
      <div
        style="
          width: 300px;
          height: 300px;
          background-color: green;
          position: absolute;
          top: 200px;
          left: 200px;
          z-index: 9;
          text-align: center;
          font-size: 24px;
        "
      >
        9
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      z: 0
    };
  }
};
</script>
```
