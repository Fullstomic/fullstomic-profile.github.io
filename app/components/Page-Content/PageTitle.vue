<template>
  <section class="pageTitle">
    <h1>{{ props.titleName }}</h1>
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  titleName: string
  contentParagraph: string
}>()
</script>
<style scoped>
.pageTitle {
  height: calc(50vh);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    90deg,
    rgba(65, 164, 253, 1),
    rgba(14, 244, 255, 1)
  );
  color: #fff;
}
</style>
