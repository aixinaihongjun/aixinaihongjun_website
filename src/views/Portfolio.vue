<template>
  <div class="portfolio-components">
    <div class="page">
      <div class="page-content">
        <Nav></Nav>
        <h1>This is an portfolio page</h1>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Portfolio",
  components: {
    Nav,
  },
};
</script>