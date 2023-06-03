// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">
      <label>
        同时拖动多个内部元素(50个)
        <input type="checkbox" name="sync" v-model="sync" />
        Synchronize (Use
        <b>ctrl</b>
        Key)
      </label>
    </div>
    <div class="container">
      <VueDragResizeRotate
        class-name-active="my-active-class"
        ref="vdrr"
        v-for="element in elements"
        :key="element.id"
        :id="element.id"
        :x="element.x"
        :y="element.y"
        :w="200"
        :h="200"
        :resizable="false"
        @dragging="(left, top) => dragging(element.id, left, top)"
        @dragstop="(left, top) => dragstop(element.id, left, top)"
      >
        <p>{{ element.text }}</p>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
// #endregion template

// #region script
<script>
export default {
  data() {
    return {
      sync: false,
      draggingId: null,
      prevOffsetX: 0,
      prevOffsetY: 0,
      count: 50,
      batchable: false,
      elements: []
    };
  },
  computed: {
    draggingElement: function () {
      if (!this.draggingId) return;
      return this.elements.find(el => el.id === this.draggingId);
    }
  },
  created() {
    this.fillElements();
  },
  mounted() {
    window.addEventListener("keydown", ev => {
      if (ev.keyCode === 17) {
        this.sync = true;
      }
    });
    window.addEventListener("keyup", ev => {
      if (ev.keyCode === 17) {
        this.sync = false;
      }
    });
  },
  methods: {
    fillElements() {
      for (let i = 1; i < this.count; i++) {
        let template = { id: 1, x: 0, y: 0, text: "Element ", active: false };
        template.id = i;
        template.text += i;
        template.x = Math.floor(Math.random() * 1000);
        template.y = Math.floor(Math.random() * 400);
        this.elements.push(template);
      }
    },
    dragging(id, left, top) {
      if (!this.sync) return;
      this.draggingId = id;
      const offsetX = left - this.draggingElement.x;
      const offsetY = top - this.draggingElement.y;
      const deltaX = this.deltaX(offsetX);
      const deltaY = this.deltaY(offsetY);
      this.elements.forEach((el) => {
        if (el.id !== id) {
          el.x += deltaX;
          el.y += deltaY;
        }
      });
    },
    dragstop(id, left, top) {
      this.elements.map(el => {
        if (el.id === id) {
          el.x = left;
          el.y = top;
        }
        return el;
      });
      this.draggingId = null;
      this.prevOffsetX = 0;
      this.prevOffsetY = 0;
    },
    deltaX(offsetX) {
      const ret = offsetX - this.prevOffsetX;
      this.prevOffsetX = offsetX;
      return ret;
    },
    deltaY(offsetY) {
      const ret = offsetY - this.prevOffsetY;
      this.prevOffsetY = offsetY;
      return ret;
    }
  }
};
</script>
// #endregion script
// #endregion all