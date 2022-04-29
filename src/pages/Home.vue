<template>
  <div class="home">
    <div class="main-home container">
      <div class="row flex-column-reverse flex-md-row text-center text-md-start home-surround">
        <div class="col-12 col-md p-2 border-top border-success">
          <div class="p-2">
            <h2 class="m-1" style="font-family:'Times New Roman', Times, serif;">
              I am  <b class="person"></b>
            </h2>
          </div>
          <div class="elements p-4">
            <h4>
              I used VueJs framwork of JavaScript to create this website. <br>
            </h4>
            <hr>
            <h3 class="text-black mt-5">
              These are my social networks:
            </h3>
          </div>
          <div class="d-flex justify-content-center mt-1">
            <a href="https://t.me/AOrifjonov" target="__blank" class="a-network">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
              </svg>
              Telegram
            </a>
            <a href="https://github.com/AOrifjonov" target="__blank" class="a-network">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div class="col-12 col-md p-0">
          <div class="img-control">
            <h3 class="d-inline-block">Afzalbek - FrontEnd Devoloper</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      welcome: Boolean,
    };
  },
};
</script>

<style scoped>
.home {
  margin-top: 4rem;
  padding: 10px;
  width: 100%;
}

.person {
  --counter: "Hi, I am Afzalbek Orifjonov";
  position: inherit;
  animation: renamer 10s linear infinite;
  font-family:'Times New Roman', Times, serif;
}
.person::after {
  content: var(--counter);
}

@keyframes renamer {
  0% {
    --counter: 'Afzalbek Orifjonov';
    color: rgb(0, 0, 0);
  }
  100% {
    --counter: 'FrontEnd Devoloper';
    color: #580000;
  }
}

/* Welcome */
.welcome {
  margin-top: 6rem;
  margin-bottom: 6rem;
  animation: welcome 5s infinite;
}
.welcome h1 {
  color: white;
  font-size: 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
}

@keyframes welcome {
  0% {
    color: #00000066;
  }
  10% {
    color: #00000080;
    transform: translateY(30px);
  }
  20% {
    color: #00000099;
  }
  30% {
    color: #000000b3;
  }
  70% {
    color: #00000080;
  }
  100% {
    transform: translateY(0);
    color: #2c2c2c;
  }
}

.home-surround {
  margin-top: 5rem;
  min-height: 400px;
  background: #f6f6f6;
  border-radius: 15px;
  padding: 0;
}

.col {
  min-height: 400px;
  padding: 0;
  margin: 0;
}

.img-control {
  background-image: url("../assets/devoloper.jpg");
  background-size: cover;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.img-control h3 {
  color: #d1d1d1;
  text-align: center;
  margin: 0;
  width: 100%;
  padding: 20px 0;
  background: rgba(0, 0, 0, 0.5);
  height: 20%;
  animation: illustration 10s infinite linear;
}

.img-control h3:hover {
  animation: controlhover 2s step-start infinite;
}

@keyframes controlhover {
  from {
    height: 20%;
  }
  to {
    background: rgba(0, 0, 0, 0.7);
  }
}
@keyframes illustration {
  0% {
    background: rgba(0, 0, 0, 0.7);
  }
  50% {
    background: rgba(73, 73, 73, 0.7);
  }
  100% {
    background: rgba(0, 0, 0, 0.7);
    color: white;
  }
}

.a-network {
  text-decoration: none;
  text-align: center;
  margin: 0 15px;
  font-size: 22px;
  font-weight: 550;
  border: 2px solid black;
  width: 9rem;
  padding: 8px 0;
  color: black;
  border-radius: 7px;
}
.a-network:hover {
  color: white;
  border: 1px solid white;
  background: rgb(0, 0, 0);
}

.elements h4 {
  color: #313131;
  font-size: 20px;
  font-family:'Courier New', Courier, monospace;
  font-weight: 550;
}
</style>


