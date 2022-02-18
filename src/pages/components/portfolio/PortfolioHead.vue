<template>
  <div class="portfolio-about">
    <div class="d-flex justify-content-center">
      <h3 class="portfolio-about-h3">My portfolio</h3>
    </div>
    <div class="d-flex justify-content-center">
      <p class="pab">
        Small projects which I have worked on and links to them. You can see a lot of
        interesting and useful things in it. Im sorry that if I have some mistakes and omissions. I
        hope you like it
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioHead",
};
</script>

<style scoped>
.portfolio-about {
  text-align: center;
}
.portfolio-about-h3 {
  font-weight: 550;
  color: rgb(255, 255, 255);
  padding: 10px 40px;
  border-radius: 5px;
  border: 2px dashed rgb(216, 216, 216);
  padding: 10px 40px;
}

.pab {
  color: rgb(245, 245, 245);
  font-size: 17px;
  font-weight: 550;
  margin-top: 15px;
  background: rgba(0,0,0,.1);
  cursor: none;
}

@media (min-width: 900px) {
  .pab {
    margin: 0 8rem;
  }
}
</style>