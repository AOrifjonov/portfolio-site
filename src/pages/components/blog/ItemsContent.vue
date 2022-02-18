<template>
    <div class="title-border" v-if="contents.length > 0">
        <h3>Contents</h3>
        <div :key="content.id" v-for="content in contents">
            <a :href="'#' + content.id" class="btn-class">{{ content.title }}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemsContent',
    props: {
        contents: Array,
    }
}
</script>

<style scoped>
.title-border {
  background: rgb(29, 29, 29);
  border-top: none;
  border-bottom: none;
  border-left: 2px solid black;
  top: 67px;
  bottom: 0;
  right: 0;
  width: 21.5%;
  position: fixed;
  overflow: auto;
  padding: 1px;
}
.title-border h3 {
  margin-top: 10px;
  color: rgb(255, 255, 255);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title-border div button {
  text-align: left;
}

.btn-class {
  text-decoration: none;
  display: inline-block;
  outline: none;
  border: none;
  margin: 6px 0px;
  color: rgb(219, 219, 219);
  background: rgba(95, 94, 94, 0.1);
  width: 100%;
}
.btn-class:hover {
  color: rgb(138, 138, 138);
}

@media (max-width: 1300px) {
  .title-border {
    display: none;
  }
}


/* width */
::-webkit-scrollbar {
  display: initial;
  width: 15px;
  background: none;
}
/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(136, 136, 136); 
  border-radius: 10px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #cbcbccd5; 
}
</style>