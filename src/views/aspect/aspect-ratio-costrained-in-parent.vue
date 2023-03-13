<template>
  <div class="view-box">
    <div id="toolbar"></div>
    <div class="container">
      <VueDragResizeRotate :lock-aspect-ratio="true" :parent="true">
        <p>Combine aspect ratio and costrain in parent.</p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
