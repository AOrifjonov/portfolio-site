<template>
  <div class="blog mt-5">
    <h1 v-if="isError404" class="isError404 text-center">Error 404</h1>
    <h2 v-if="contents.length" class="mb-5 font-weight-light text-center w-75">
      My recently posts
    </h2>
    <div v-if="isRotate" class="mt-4 d-flex w-100 justify-content-center">
      <span class="rotate"></span>
    </div>
    <div class="row">
      <div class="col-12 col-lllg-10">
        <div class="card-items">
          <div class="row">
            <div
              v-for="item in contents"
              :id="item.id"
              :key="item.id"
              class="col-12 col-sm col-md-6 col-lg-4"
            >
              <div class="card-box">
                <div class="my-card-image">
                  <img
                    :src="'https://picsum.photos/200/150?random=' + item.id"
                  />
                </div>
                <div class="my-card-title">
                  <h4>{{ item.title }}</h4>
                </div>
                <div class="my-card-text">
                  <p>{{ item.body }}</p>
                </div>
                <div class="my-card-subtitle">
                  <button>
                    <img src="@/assets/photo.png" alt="Photo" />
                    Afzalbek Orifjonov
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    contents: Array,
    isError404: Boolean,
    isRotate: Boolean,
  },
};
</script>

<style scoped>
/* Card */
.card-box {
  margin-bottom: 2rem;
  background: rgb(38, 19, 207);
  min-width: 290px;
  max-width: 290px;
  border-radius: 5px;
}
.card-box:hover {
  position: relative;
  transform: translate(-5px, -5px);
  box-shadow: 5px 5px 5px rgb(46, 46, 46);
}
.card-box:active {
  opacity: 0.3;
}

.my-card-image {
  min-height: 200px;
  max-height: 200px;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
}

.my-card-image img {
  width: 100%;
  height: 199px;
  padding: 3px;
  border-radius: 8px;
}

.my-card-title {
  min-height: 80px;
  max-height: 80px;
  padding: 4px;
  background: rgba(0, 0, 0, 0.2);
  color: rgb(224, 224, 224);
  font-family: cursive;
}
.my-card-title h4 {
  font-size: 19px;
}

.my-card-text {
  min-height: 150px;
  max-height: 150px;
  padding: 5px;
  display: flex;
  text-align: center;
  align-items: center;
  background: linear-gradient(to bottom, rgb(48, 4, 204), rgb(52, 25, 151));
}

.my-card-text p {
  color: rgb(170, 169, 169);
  font-family: cursive;
}

.my-card-subtitle {
  min-height: 50px;
  max-height: 50px;
  padding: 5px;
  background: rgba(46, 21, 116, 0.2);
}

.my-card-subtitle button {
  text-align: left;
  border: none;
  outline: none;
  background: none;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 550;
  margin-bottom: 4px;
}

.my-card-subtitle button img {
  width: 35px;
  border-radius: 50%;
}

/* IsError404 */
.isError404 {
  margin-top: 8rem;
  font-weight: 550;
  color: rgb(211, 24, 24);
}

.rotate {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 6px dashed black;
  animation: rotate 2s infinite linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(0.4);
  }
  50% {
    transform: rotate(360deg) scale(1);
  }
}

/* Blog - Responsive */
@media (min-width: 550px), (max-width: 767px) {
  .card-box {
    margin-left: 10%;
  }
}
@media (min-width: 400px), (max-width: 540px) {
  .card-box {
    margin-left: 0px;
  }
}
@media (min-width: 768px), (max-width: 991px) {
  .card-box {
    min-width: 340px;
    max-width: 340px;
  }
}

@media (min-width: 992px), (max-width: 1199px) {
  .card-box {
    min-width: 290px !important;
    max-width: 290px;
  }
}

@media (max-width: 1298px) {
  .card-box {
    min-width: 330px;
    max-width: 330px;
  }
}

@media (min-width: 1299px) {
  .col-lllg-10 {
    width: 80%;
  }
  .card-box {
    min-width: 294px;
    max-width: 294px;
    margin-left: 0;
  }
}
</style>