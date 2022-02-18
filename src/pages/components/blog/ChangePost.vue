<template>
  <div v-if="changePost" class="removePost">
    <div class="removebg">
      <h4 v-if="contents.length > 0" class="text-center mt-3 text-white">
        Editable sections:
      </h4>
      <p id="errorChangePost" class="text-center text-danger"></p>
      <h4 v-if="contents.length <= 0" class="text-center mt-3 text-white">
        We could not find a post to change
      </h4>
      <div v-if="contents.length > 0">
        <label class="lbl" for="selectValue">Editable post:</label>
        <select id="selectValue">
          <option selected disabled>Select Post</option>
          <option
            :key="content.id"
            v-for="content in contents"
            :value="content.title + '?/' + content.body + '?/' + content.id"
          >
            {{ content.title }}
          </option>
        </select>
        <button @click="optionContent" class="lblbtn">Next</button>

        <div class="inputPostElements">
          <label for="editTitle">Edit title:</label>
          <input v-model="posts.postT" id="editTitle" type="text" />
          <label for="editPost">Edit text of the post:</label>
          <textarea
            v-model="posts.postMSG"
            id="editPost"
            cols="60"
            rows="8"
          ></textarea>

          <div class="addbtn">
            <button @click="$emit('changeAPost', posts)">Change</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePost",
  props: {
    changePost: Boolean,
    contents: Array,
  },
  data() {
    return {
      posts: {
        postT: "",
        postMSG: "",
        postId: 0,
      },
    };
  },

  methods: {
    optionContent() {
      const selectValue = document.getElementById("selectValue");
      let name = selectValue.value.split("?/");
      this.posts.postT = name[0];
      this.posts.postMSG = name[1];
      this.posts.postId = Number(name[2]);
    },
  },
};
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

/* Ok Button */
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

/* Textarea */
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

/* Select */
.removebg div select {
  width: 58%;
  padding: 8px;
  margin-bottom: 8px;
  margin-left: 15px;
  border: 3px solid rgb(77, 73, 73);
  border-radius: 5px;
  background: none;
  font-style: italic;
  color: #fff;
  background-color: #000;
}

.lbl {
  display: block;
  margin-left: 18px;
  font-size: 18px;
  color: #fff;
}

.lblbtn {
  border: none;
  outline: none;
  background: none;
  margin-left: 5px;
  border: 2px solid rgb(68, 67, 67);
  padding: 2px;
  padding: 5.5px 10px;
  border-radius: 5px;
  color: blanchedalmond;
  font-weight: 550;
}
</style>