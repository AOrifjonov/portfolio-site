<template>
    <div v-if="removePost" class="removePost">
      <div class="removebg">
        <h4 class="text-center mt-3 text-white" v-if="contents.length > 0">
          Select the item you want to delete
        </h4>
        <h4 class="text-center mt-3 text-white" v-else>
          We cannot found your posts
        </h4>
        <div :key="content.id" v-for="content in contents">
          <button @click="$emit('removeElement', content)" class="removeBtn">
            {{ content.title }}
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'RemoveElement',
    props: {
        contents: Array,
        removePost: Boolean,
    }
}
</script>