<template>
    <div v-if="addPost" class="removePost">
      <div class="removebg">
        <p id="errormessage" style="color: red"></p>
        <h4 class="text-center mt-3 text-white">Create a post:</h4>
        <div>
          <div class="inputPostElements">
            <label for="inputPostTitle">Title:</label>
            <input
              id="inputPostTitle"
              type="text"
              placeholder="Enter post name..."
              v-model="element.title"
            />

            <label for="inputPost">Enter text of the post:</label>
            <textarea
              v-model="element.body"
              id="inputPost"
              cols="60"
              rows="6"
              placeholder="Enter post's text..."></textarea>

            <div class="addbtn">
              <button @click="$emit('createAPost', element)">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'AddPost',
    props: {
        addPost : Boolean,
        element: Array,
    },
    data() {
        return {
            element: {
                title: '',
                body: '',
                id: Date.now(),
            }
        }
    },
}
</script>

<style scoped>
.inputPostElements {
  width: 100%;
  padding: 15px;
}
.inputPostElements label {
  display: block;
  margin-top: 10px;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-style: italic;
}
.inputPostElements input {
  width: 70%;
  border-top: none;
  border-left: none;
  border-right: none;
  background: none;
  padding: 10px;
  border-bottom: 2px solid rgb(128, 128, 128);
  border-bottom-left-radius: 8px;
  color: white;
  font-size: 20px;
  font-weight: 550;
  font-style: oblique;
}
.inputPostElements input:focus {
  outline: none;
  border-bottom: 2px solid rgb(8, 207, 8);
  border-bottom-left-radius: 8px;
  color: rgb(168, 168, 168);
}
.addbtn {
  display: flex;
  width: 90%;
  justify-content: right;
}
.addbtn button {
  outline: none;
  background: none;
  cursor: pointer;
  padding: 3px 20px;
  margin: 0;
  border: 2px solid white;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  color: rgb(214, 214, 214);
}
.addbtn button:hover {
  color: rgb(56, 241, 0);
  border: 2px solid rgb(56, 241, 0);
  cursor: initial;
}
.addbtn button:active {
  cursor: pointer;
}
textarea {
  margin-top: 10px;
  width: 70%;
  outline: none;
  padding: 5px;
  border: 1px solid rgb(216, 216, 216);
  border-radius: 10px;
  background: none;
  color: rgb(250, 250, 250);
  font-size: 17px;
  font-weight: 600;
}
textarea:focus {
  border: 2px solid rgb(8, 207, 8);
  color: rgb(184, 184, 184);
}

</style>