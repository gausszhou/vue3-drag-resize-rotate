<template>
  <div class="view-box">
    <div id="toolbar"></div>
    <div class="container">
      <div :style="style">
        <VueDragReSizeRotate :grid="[20, 40]" :x="10" :y="20" :minh="30" :minw="30" :lock-aspect-ratio="true">
          <p>Aspect ratio in Grid 20x40 starting with a 10x20 offset</p>
        </VueDragReSizeRotate>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: {
        position: "relative",
        backgroundColor: "#808080",
        height: "100%",
        background:
          "linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",
        backgroundSize: "20px 40px, 20px 40px",
        backgroundPosition: "10px 20px"
      }
    };
  }
};
</script>
