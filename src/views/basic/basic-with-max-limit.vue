<template>
  <div class="view-box">
    <div id="toolbar">
      Max Width:
      <input type="number" v-model.number="maxWidth" />
      Max Height:
      <input type="number" v-model.number="maxHeight" />
    </div>
    <div class="container">
      <VueDragReSizeRotate
        :max-width="maxWidth"
        :max-height="maxHeight"
        :w="200"
        :h="200"
        @resizing="onResize"
        @resizestop="onResize"
      >
        <div>
          <p>基本组件，可以配置</p>
          <b>maxWidth</b>
          和
          <b>maxHeight</b>
          属性
          <p>w:{{ w }},h:{{ h }}</p>
        </div>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxWidth: 300,
      maxHeight: 300,
      w: 200,
      h: 200
    };
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.w = width;
      this.h = height;
    }
  }
};
</script>
