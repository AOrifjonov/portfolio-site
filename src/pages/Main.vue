<template>
  <Navbar />
  <Home />
  <Footer />
</template>

<script>
import Navbar from '@/pages/components/Navbar.vue'
import Home from '@/pages/Home.vue'
import Footer from './Footer.vue'
export default {
  name: 'Main',
  components: {
    Navbar,
    Footer,
    Home,
  },
  
}
</script>
<style>

</style>
