# 防止停用

一个基本组件，带有<b>`prevent-deactivation` </b> prop，以避免在外部点击时解除活动状态。


```html
<template>
  <div class="view-box">
    <div id="toolbar">外部点击不会失活</div>
    <div class="container">
      <VueDragResizeRotate :prevent-deactivation="true">
        <p>
          设置
          <b>:prevent-deactivation</b>
          属性，让组件不能取消激活状态
        </p>
      </VueDragResizeRotate>
      <VueDragResizeRotate :prevent-deactivation="true">
        <p>
          设置
          <b>:prevent-deactivation</b>
          属性，让组件不能取消激活状态
        </p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
```
