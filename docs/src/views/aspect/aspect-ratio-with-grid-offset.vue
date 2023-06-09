// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar"></div>
    <div class="container">
      <div class="grid" :style="style">
        <VueDragResizeRotate :grid="[20, 40]" :x="10" :y="20" :minh="30" :minw="30" :lock-aspect-ratio="true">
          <p>Aspect ratio in Grid 20x40 starting with a 10x20 offset</p>
        </VueDragResizeRotate>
      </div>
    </div>
  </div>
</template>
// #endregion template
// #region script
<script>
export default {
  data() {
    return {
      style: {
        position: "relative",
        height: "100%",
        backgroundSize: "20px 40px, 20px 40px",
        backgroundPosition: "10px 20px"
      }
    };
  }
};
</script>
// #endregion script
// #endregion all
