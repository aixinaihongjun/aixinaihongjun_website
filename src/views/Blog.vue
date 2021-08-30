<template>
  <div class="blog-components">
    <div class="page">
      <div class="page-content">
        <Nav></Nav>
        <h1>This is an blog page</h1>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Blog",
  components: {
    Nav,
  },
};
</script>