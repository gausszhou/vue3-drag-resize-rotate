<template>
  <div class="view-box">
    <div id="toolbar">组件插槽</div>
    <div class="container">
      <VueDragReSizeRotate>
        <p>基本组件内插入表单</p>
        <form @submit.stop.prevent="onSubmit">
          <input type="text" name="input" value="Hello" />
          <button type="submit">Submit</button>
        </form>
      </VueDragReSizeRotate>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit(e) {
      console.log(e);
      alert("You just submitted the form!");
    }
  }
};
</script>
