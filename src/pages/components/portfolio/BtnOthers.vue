<template>
    <div class="github">
        <a href="https://github.com/AOrifjonov/" target="__blank">See others</a>
      </div>
</template>

<script>
export default {
    name: 'BtnOthers'
}
</script>

<style scoped>
.github {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 5rem;
}

.github a {
  color: rgb(218, 218, 218);
  text-decoration: none;
  font-weight: 550;
  font-size: 24px;
  padding: 15px 120px;
  border-radius: 10px;
  border: 2px dashed rgb(189, 189, 189);
}
.github a:hover {
  background: none;
  animation: rotatehover 4s infinite linear;
}
@keyframes rotatehover {
  from {
    color: white;
  } to {
    color: rgb(41, 204, 1);
    border: 2px dashed rgb(51, 255, 0);
    background: rgb(14, 8, 105);
  }
}
.github a:active {
  background: transparent;
}
</style>