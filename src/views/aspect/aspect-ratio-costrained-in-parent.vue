<template>
  <div class="view-box">
    <div id="toolbar"></div>
    <div class="container">
      <VueDragReSizeRotate :lock-aspect-ratio="true" :parent="true">
        <p>Combine aspect ratio and costrain in parent.</p>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>
