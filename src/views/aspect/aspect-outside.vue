<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="ratio" />
      Toggle Lock Aspect Ratio
      <input type="number" v-model="outsideAspectRatio" />
    </div>
    <div class="container">
      <VueDragReSizeRotate :lock-aspect-ratio="ratio" :outsideAspectRatio="outsideAspectRatio">
        <p>
          Keep aspect ratio using
          <b>:lock-aspect-ratio</b>
          prop.
        </p>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratio: true,
      outsideAspectRatio: 1.7777
    };
  }
};
</script>
