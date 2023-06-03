// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">具有句柄自定义标记的组件</div>
    <div class="container">
      <VueDragResizeRotate class-name-handle="my-handle-class">
        <p>The first child will populate the default slot.</p>
        <template v-slot:tl>😀</template>
        <template v-slot:tm>😂</template>
        <template v-slot:tr>😆</template>
        <template v-slot:mr>😉</template>
        <template v-slot:br>😎</template>
        <template v-slot:bm>😍</template>
        <template v-slot:bl>😣</template>
        <template v-slot:ml>😕</template>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
// #endregion template
// #region style
<style scoped></style>
// #endregion style
// #endregion all