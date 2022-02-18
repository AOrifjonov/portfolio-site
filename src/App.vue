<template>
  <div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-image: linear-gradient(to bottom, #6e92f7, #2828e2, #2a40bb, #5268a3, #6262a7);
}

@media (max-width: 250px) {
  body {
    display: none;
  }
}
</style>