<template>
    <div class="admin-elements-place">
      <div class="admin-elements">
        <button class="btn" @click="$emit('postAdder')">Add Post</button>
        <button class="btn" @click="$emit('removerPost')">Remove Post</button>
        <button class="btn" @click="$emit('changerPost')">ChangePost</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'AdminElements',
}
</script>

<style scoped>
.admin-elements-place {
  background: rgb(39, 39, 39);
  margin-top: 66.5px;
  min-width: 100%;  
  margin-bottom: -3rem;
  padding: 8px;
}
.admin-elements button {
  border: none;
  outline: none;
  background: none;
  padding: 0 7px;
  color: rgb(228, 210, 210);
  font-size: 18px;
  font-weight: 600;
}
</style>