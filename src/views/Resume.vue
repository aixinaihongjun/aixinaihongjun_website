<template>
  <div class="resume-components">
    <div class="page">
      <div class="page-content">
        <Nav></Nav>
        <h1>This is an resume page</h1>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Resume",
  components: {
    Nav,
  },
};
</script>