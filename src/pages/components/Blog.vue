<template>
  <Navbar />
  <div v-if="adminPanel">
    <AdminElements
      @postAdder="postAdder"
      @removerPost="removerPost"
      @changerPost="changerPost"
    />

    <!--  Remove Post  -->
    <RemoveElement
      :contents="contents"
      @removeElement="removeElement"
      :removePost="removePost"
    />
    <!--  /Remove Post  -->

    <!-- Add Post -->
    <AddPost :addPost="addPost" @createAPost="createAPost" />
    <!-- /Add Post -->

    <!-- Change post -->
    <ChangePost
      :changePost="changePost"
      :contents="contents"
      @changeAPost="changeAPost"
    />
    <!-- /Change Post -->
  </div>

  <div class="container blog-container">
    <BlogPost :contents="contents" :isError404="isError404" :isRotate="isRotate" />

    <ItemsContent :contents="contents" />
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/pages/components/Navbar.vue";
import Footer from "../Footer.vue";
import AdminElements from "./blog/AdminElements.vue";
import RemoveElement from "./blog/RemoveElement.vue";
import AddPost from "./blog/AddPost.vue";
import ChangePost from "./blog/ChangePost.vue";
import BlogPost from "./blog/BlogPost.vue";
import ItemsContent from "./blog/ItemsContent.vue";
export default {
  name: "Blog",
  components: {
    Navbar,
    Footer,
    AdminElements,
    RemoveElement,
    AddPost,
    ChangePost,
    BlogPost,
    ItemsContent,
  },

  data() {
    return {
      contentTitle: "",
      adminPanel: false,
      removePost: false,
      addPost: false,
      changePost: false,
      contents: [],
      isError404: false,
      isRotate: false,
    };
  },
  methods: {
    removerPost() {
      if (!this.removePost) {
        this.removePost = true;
        this.addPost = false;
        this.changePost = false;
      } else {
        this.removePost = false;
      }
    },
    postAdder() {
      if (!this.addPost) {
        this.addPost = true;
        this.removePost = false;
        this.changePost = false;
      } else {
        this.addPost = false;
      }
    },
    changerPost() {
      if (this.changePost) {
        this.changePost = false;
      } else {
        this.changePost = true;
        this.removePost = false;
        this.addPost = false;
      }
    },

    removeElement(e) {
      if (confirm("Ushbu post o'chirilsinmi?")) {
        this.contents = this.contents.filter((element) => element.id !== e.id);
      }
    },
    createAPost(e) {
      if (e.title.length > 5 && e.body.length > 8) {
        this.contents.push(e);
        this.addPost = false;
      } else {
        errormessage.innerHTML = `<p class="text-center" id="errorPost" style="color: red; font-size: 20px; margin-bottom: -8px; margin-top:2px">Xatolik bor. Barcha qatorni to'ldiring!</p>`;
      }
    },
    changeAPost(posts) {
      if (posts.postMSG.length > 10) {
        this.contents = this.contents.filter(
          (element) => element.id !== posts.postId
        );
        const editedPost = {
          title: posts.postT,
          body: posts.postMSG,
          id: posts.postId,
        };
        this.contents.push(editedPost);
        this.changePost = false;
      } else {
        document.getElementById("errorChangePost").textContent =
          "Xatolik aniqlandi!";
      }
    },

    async getPostForCard() {
      try {
        this.isRotate = true;
        await fetch("https://jsonplaceholder.typicode.com/posts?_limit=21")
          .then((response) => response.json())
          .then((json) => json.map((content) => this.contents.push(content)));
      } catch (e) {
        this.isError404 = true;
      } finally {
        this.isRotate = false;
      }
    },
  },

  created() {
    this.getPostForCard();
    const adminTrue = localStorage.getItem('isAdmin');
    if (adminTrue == 'true') {
      this.adminPanel = true;
    } else {
      this.adminPanel = false;
    }
  },
};
</script>


<style>
.blog-container {
  margin-top: 100px;
}

.removePost {
  width: 55%;
}

.removeBtn {
  border: none;
  background: none;
  outline: none;
  justify-content: center;
  width: 100%;
  padding: 1px 0;
  font-size: 22px;
  color: rgb(195, 190, 190);
}
.removeBtn:hover {
  color: red;
  font-weight: 700;
}

.removebg {
  overflow: auto;
  max-height: 500px;
  margin: 47.2px 5rem 0rem 5px;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 1px solid rgb(138, 138, 138);
  min-height: 70px;
  background: #000;
}

@media (max-width: 850px) {
  .removePost {
    width: 100%;
  }
}
@media (max-width: 550px) {
  .removePost {
    min-width: 100%;
  }
  .removebg {
    margin: 3rem 0 0 0;
  }
}

</style>