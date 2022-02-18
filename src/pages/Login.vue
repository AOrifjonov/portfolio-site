<template>
  <div v-if="!isRegistered">
    <Navbar />
    <div class="loginBG">
      <div class="container-login">
        <div class="dflex">
          <div>
            <div class="removeBtn">
              <button @click="$router.push('/')">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
            <p id="errorMessage"></p>

            <div v-if="button == 'Login'" class="loginbox">
              <label for="login">Login</label>
              <input
                :class="login.length > 4 ? 'inputActive' : 'input'"
                id="login"
                type="text"
                v-model="login"
                placeholder="Enter your login..."
              />
            </div>
            <div v-if="button == 'Login'" class="parolb">
              <label for="parol">Password</label>
              <input
                :class="parol.length > 4 ? 'inputActive' : 'input'"
                id="parol"
                v-model="parol"
                placeholder="Enter password..."
                :type="checkbox ? 'text' : 'password'"
              />
            </div>

            <div v-if="button == 'Login'" class="checkbox">
              <input v-model="checkbox" id="checkbox" type="checkbox" />
              <label for="checkbox">password</label>
            </div>
            <div class="dib">
              <div v-if="button === 'Login'">
                <button id="buttonNext" @click="getUser">{{ button }}</button>
              </div>
              <div v-else>
                <button class="boshlash-btn" @click="$router.push('/')">
                  {{ button }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  <div v-if="isRegistered">
    <Main />
  </div>
</template>

<script>
import Navbar from "@/pages/components/Navbar.vue";
import Footer from "./Footer.vue";
import Main from "./Main.vue";

export default {
  components: { Navbar, Footer, Main },
  name: "Login",

  data() {
    return {
      isRegistered: Boolean,
      button: "Login",
      parol: "",
      login: "",
      checkbox: false,
    };
  },

  methods: {
    getUser() {
      const errorMessage = document.getElementById("errorMessage");
      if (this.login.length >= 5 && this.parol.length > 4) {
        if (this.login === "afzalbek" && this.parol === "1080916") {
          localStorage.setItem("isAdmin", "true");
            setTimeout(function () {
            errorMessage.innerHTML =
              "<p style='color: rgb(42, 219, 42); font-size: 20px; width: 90%;'>Barchasi to'g'ri bajarildi. Endilikda siz istalgan bo'limdagi admin huquqidan foydalana olasiz!</p>";
          }, 500);
          this.button = "Boshlash";
        } else {
          errorMessage.innerHTML = "<p style='color: red; font-size: 30px; margin-top: -10px; font-weight: 550;'>Xatolik aniqlandi!</p>";
        }
      } else {
        errorMessage.innerHTML =
          "<p style='color: red; font-size: 30px; margin-top: -10px; font-weight: 550;'>Kamchiliklar mavjud!</p>";
      }

      this.login = "";
      this.parol = "";
      this.checkbox = false;
    },
  },
  created() {
    let isRegisteredUser = localStorage.getItem("isAdmin");
    if (isRegisteredUser === "true") {
      this.isRegistered = true;
    } else {
      this.isRegistered = false;
    }
  },
};
</script>

<style scoped>
.loginBG {
  width: 100%;
  height: 70vh;
}
.container-login {
  margin-top: 1rem;
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
}

.dflex {
  width: 500px;
  background: #000;
  padding: 20px;
  border-radius: 10px;
}

.removeBtn {
  display: flex;
  width: 100%;
  justify-content: end;
  margin-bottom: 10px;
}

.removeBtn button {
  background: none;
  outline: none;
  border: none;
  color: red;
}

.input {
  display: block;
  width: 100%;
  padding: 5px;
  background: none;
  border: none;
  border-bottom: 4px solid red;
  color: white;
}

.inputActive {
  display: block;
  width: 100%;
  padding: 5px;
  background: none;
  border: none;
  border-bottom: 4px solid rgb(54, 223, 54);
  color: white;
}

label {
  margin-top: 20px;
  color: rgb(173, 173, 173);
  font-size: 17px;
  font-weight: 550;
}

.inputActive,
.input:focus {
  border: none;
  outline: none;
  border-bottom: 4px solid rgb(54, 223, 54);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.checkbox {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: start;
}

.checkbox label {
  display: inline-block;
  margin: 0;
  padding: 0;
}
.checkbox input {
  margin: 0;
  padding: 0;
  display: inline-block;
  width: 5%;
}

.dib {
  display: flex;
  justify-content: center;
  width: 100%;
}
.dib button {
  border: 4px solid rgb(77, 77, 77);
  outline: none;
  background: none;
  color: red;
  padding: 6px 20px;
  border-radius: 10px;
}

.dib button:hover {
  border: 4px solid red;
  color: green;
}

.boshlash-btn {
  border: 4px solid rgb(19, 189, 19) !important;
  color: rgb(16, 168, 16) !important;
}
</style>