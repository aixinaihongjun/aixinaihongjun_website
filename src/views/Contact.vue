<template>
  <div class="contact-components">
    <div class="page">
      <div class="page-content">
        <Nav></Nav>
        <h1>This is an contact page</h1>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Contact",
  components: {
    Nav,
  },
};
</script>