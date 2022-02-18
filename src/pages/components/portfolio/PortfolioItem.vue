<template>
  <div class="row mt-4 dflex w-100 justify-content-center">
    <div
      v-for="i in portfolio"
      :key="i.title"
      class="col-12 col-sm-11 col-md-6 surround"
    >
      <div class="row">
        <div class="col-12 col-md-8 col-lg-6">
          <div class="image">
            <img :src="i.photo" alt="Rasm boridi" />
          </div>
        </div>
        <div class="col col-md-10 col-lg">
          <h3 class="title">{{ i.title }}</h3>
          <hr class="text-white" />
          <p class="ttext">{{ i.text }}</p>
          <h5 class="text-bottom">
            <div class="d-flex">
              <a :href="i.link" target="__blank" class="btn btn-outline-primary mx-2">View</a>
              <a :href="i.code" target="__blank" class="btn btn-outline-primary">Source code</a>
            </div>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioItem",
  data() {
    return {
      portfolio: [
        {
          title: "Weather app",
          text: "This project shows weather data from around the world. I have developed this program in the VueJs framwork of JavaScript",
          code: "https://github.com/AOrifjonov/weather-vuejs",
          photo: "https://i.ibb.co/KWLqrzv/weather-app.png",
          link: "https://ao-weather.netlify.app/",
        },
        {
          title: "Music app",
          text: "This project will simply play my favorite songs. I have developed this program in the VueJs framwork of JavaScript",
          code: "https://github.com/AOrifjonov/vue-music-app",
          photo: "https://i.ibb.co/S6WXPMk/musicapp.png",
          link: "https://vue-mymusic.netlify.app/",
        },
        {
          title: "Tasks app",
          text: "This app keeps your little notes to yourself I have developed this program in the VueJs framwork of JavaScript",
          code: "https://github.com/AOrifjonov/tasks-project",
          photo: "https://i.ibb.co/zS85zbH/taskapp.png",
          link: "https://addnewtask.netlify.app/",
        },
        {
          title: "Progress bar",
          text: "This app is a practical project through Samar Badriddinov's VueJs course. I have developed this program in the VueJs framwork of JavaScript",
          code: "https://github.com/AOrifjonov/progress-bar",
          photo: "https://i.ibb.co/hFVtJbb/progressbar.png",
          link: "https://gradient-bar.netlify.app/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.image {
  width: 100%;
  height: 100%;
}
.image img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.surround {
  padding: 15px;
  background: rgb(18, 0, 182);
  border-radius: 15px;
  margin: 10px;
  width: 48%;
}

.surround:hover {
  animation: surround 5s;
}

@keyframes surround {
  0% {
    transform: translate(0px 0px);
  }
  15% {
    transform: translate(-8px, -8px) scale(1.03);
    box-shadow: 7px 7px 8px #000000;
  }
  25% {
    transform: translate(-8px, -8px);
    box-shadow: 7px 7px 8px #3f2b2b;
  }
  50% {
    transform: translate(-8px, -8px);
    box-shadow: 7px 7px 8px #833737;
  }
  65% {
    transform: translate(-8px, -8px);
    box-shadow: 7px 7px 8px #c80808;
  }
  75% {
    transform: translate(-8px, -8px);
    box-shadow: 7px 7px 8px #c80808;
  }
  100% {
    transform: translate(0px, 0px);
    box-shadow: 7px 7px 8px #362c2c;
  
  }
}

.title {
  color: rgb(192, 192, 192);
  font-weight: 540;
}
.ttext {
  color: rgb(202, 202, 202);
  font-size: 18px;
  margin-top: 1rem;
}

.text-bottom {
  color: rgb(139, 138, 138);
  font-size: 18px;
  font-weight: 550;
}
.text-bottom a {
  text-decoration: none;
  color: rgb(216, 216, 216);
}
.text-bottom a:hover {
  text-decoration: black;
  color: black;
}
@media (max-width: 1199px) {
  .surround {
    width: 48%;
    margin: 7px;
  }
}

@media (max-width: 991px) {
  .surround {
    width: 46%;
    margin: 9px 12px;
  }
}

@media (max-width: 767px) {
  .surround {
    width: 70%;
  }
}

@media (max-width: 575px) {
  .surround {
    width: 95%;
  }
}

@media (max-width: 364px) {
  .surround {
    width: 100%;
  }
}
</style>

