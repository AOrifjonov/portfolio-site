<template>
  <div class="container-custom">
    <nav class="navbar-section mt-3 container">
      <div class="brand">
        <button @click="$router.push('/')">AOrifjonov</button>
      </div>
      <ul class="nav-links">
        <li class="nav-link">
          <button @click="$router.push('/about-me/')">About</button>
        </li>
        <li class="nav-link">
          <button @click="$router.push('/portfolio/')">Portfolio</button>
        </li>
        <li class="nav-link">
          <button @click="$router.push('/blog/')">Blog</button>
        </li>
        <li class="nav-link">
          <button @click="$router.push('/contact/')">Contact</button>
        </li>
        <li v-if="navLogin == 'Login'" class="nav-link">
          <button @click="$router.push('/login/') && barFunk">
            {{ navLogin }}
          </button>
        </li>
        <li v-else class="nav-link">
          <button @click="barFunk">{{ navLogin }}</button>
          <span class="link-width"></span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      navLogin: "Login",
    };
  },

  methods: {
    barFunk() {
      if (confirm("Siz administrator huquqidan voz kechishga aminmisiz?")) {
        localStorage.removeItem("isAdmin");
        this.navLogin = "Login";
      }
    },
  },

  created() {
    const adminTrue = localStorage.getItem("isAdmin");
    if (adminTrue === "true") {
      this.bar = "/logout";
      this.navLogin = "Logout";
    } else {
      this.navLogin = "Login";
    }
  },
};
</script>

<style>
.container-custom {
  background: black;
  padding: 1px;
  border: 3px solid rgb(14, 13, 13);
  border-top: 1.5px solid rgb(14, 13, 13);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.navbar-section {
  display: flex;
  width: 100%;
}

.brand button {
  width: 200px;
  color: rgb(212, 206, 206);
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  font-style: italic;
  background: none;
  outline: none;
  border: none;
}
.brand button:hover {
  font-size: 21px;
  cursor: initial;
}
.brand button:active {
  cursor: pointer;
}

.navbar-section .nav-links {
  display: flex;
  width: 100%;
  justify-content: right;
  align-items: center;
}

.nav-link {
  padding: 0px 7px !important;
}

.nav-link button {
  font-size: 18px;
  font-weight: 600;
  background: none;
  outline: none;
  border: none;
  color: rgb(255, 255, 255);
  display: inline-flex;
  align-items: end;
  height: 4px;
}

.nav-link button:hover {
  animation: linkwidth .9s;
}

@keyframes linkwidth {
  0% {
    background: rgb(255, 22, 22);
    width: 0%;
  } 
  50% {
    background: #e6e200;
    width: 50%;
  } 
  100% {
    background: #6bff08;
    width: 100%;
  }
}

@media (max-width: 292px) {
  .brand {
    display: none;
  }
  .navbar-section .nav-links {
    justify-content: center;
  }
}

@media (max-width: 538px) {
  .brand {
    display: none;
  }
  .navbar-section .nav-links {
    justify-content: left;
  }
}

@media (max-width: 400px) {

  .navbar-section .nav-links {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .container-custom {
    position: initial;
    margin-bottom: -40px;
  }
}
</style>