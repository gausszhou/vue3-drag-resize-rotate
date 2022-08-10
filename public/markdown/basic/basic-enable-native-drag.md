# 组件是否允许内部拖拽

一个基本组件，`enable-native-drag`  prop设置为`true`，以允许组件内部元素的拖动行为。 您可以通过使用球拖动每个组件来查看差异。 默认值为`false`。


```html
<template>
  <div class="view-box">
    <div id="toolbar">允许内部元素拖拽</div>
    <div class="container">
      <VueDragReSizeRotate :enable-native-drag="false" :x="0" :y="0" :w="200" :h="200">
        <p>不允许浏览器原生JavaScript拖拽</p>
        <p>Native drag disabled. Try to drag the component from the ball.</p>
        <img :src="require('@/assets/ball.svg')" />
      </VueDragReSizeRotate>
      <VueDragReSizeRotate :enable-native-drag="true" :x="0" :y="200" :w="200" :h="200">
        <p>允许浏览器原生JavaScript拖拽</p>
        <p>Native drag enabled. Try to drag the component from the ball.</p>
        <img :src="require('@/assets/ball.svg')" />
      </VueDragReSizeRotate>
    </div>
  </div>
</template>
```
