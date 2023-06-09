// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Component slot</div>
    <div class="container">
      <VueDragResizeRotate>
        <p>Insert form in base component</p>
        <form @submit.stop.prevent="onSubmit">
          <input type="text" name="input" value="Hello" />
          <button type="submit">Submit</button>
        </form>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
// #endregion template
// #region script
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
// #endregion script
// #endregion all