<template>
  <div class="github">
    <a :href="url">Github</a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: 'https://github.com/gausszhou/',
    },
  },
}
</script>

<style scoped>
.github {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 80px;
  height: 80px;
  display: flex;
  background-image: linear-gradient(
    135deg,
    transparent 0%,
    transparent 50%,
    #43b984 50%,
    #43b984 100%
  );
}
.github a {
  font-size: 16px;
  margin-left: 36px;
  margin-top: 36px;
  transform: rotate(-45deg);
  font-weight: 700;
  text-decoration: none;
  color: black;
}
.github:hover {
  background-image: linear-gradient(
    135deg,
    transparent 0%,
    transparent 50%,
    #34445c 50%,
    #34445c 100%
  );
}
.github:hover a {
  color: #fff;
}
</style>
