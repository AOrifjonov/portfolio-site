<template>
  <Navbar />
  <div class="portfolio container">
    <div class="portfolio-e">
      <PortfolioHead />
      <PortfolioItem />
      <BtnOthers />
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/pages/components/Navbar.vue";
import Footer from "../Footer.vue";
import PortfolioItem from "./portfolio/PortfolioItem.vue";
import PortfolioHead from './portfolio/PortfolioHead.vue';
import BtnOthers from './portfolio/BtnOthers.vue';
export default {
  name: "Portfolio",
  components: {
    Navbar,
    Footer,
    PortfolioItem,
    PortfolioHead,
    BtnOthers,
  },
}
</script>

<style scoped>
.portfolio {
  margin-top: 8rem;
  background: rgb(43, 20, 255);
  margin-bottom: -4rem;
  border-radius: 10px;

}
.portfolio-e {
  padding: 20px;
  min-height: 160vh;
}
</style>