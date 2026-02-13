<template>
  <v-card
    hide-details
    elevation="3"
    style="width: 80%; height: 200px; margin: auto"
    v-ripple
  >
    <a :href="props.link" class="content">
      <v-row style="height: 110%">
        <v-col class="image">
          <v-icon> mdi-{{ icon }}-outline </v-icon>
        </v-col>
        <v-col
          class="d-flex justify-center align-center"
          style="flex-direction: column"
        >
          <h1>{{ props.contentTitle }}</h1>
          <p>{{ props.contentDescription }}</p>
        </v-col>
      </v-row>
    </a>
  </v-card>
</template>
<script setup lang="ts">
const props = defineProps<{
  link?: string
  contentTitle: string
  contentDescription: string
  icon: 'account' | 'newspaper-variant' | 'folder-file' | 'chat'
}>()
</script>
<style scoped>
.content {
  text-decoration: none;
  margin: auto;
  width: 80%;
  color: inherit;
  position: relative;
  transition: all 0.2s;
}
.content:hover {
  color: #fff;
  & .image::before {
    right: -100%;
    z-index: -1;
  }
}
.content:focus-visible {
  color: #fff;
  & .image::before {
    right: -100%;
    z-index: -1;
  }
}
.image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
.image::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  background-image: linear-gradient(
    90deg,
    rgba(65, 164, 253, 1),
    rgba(14, 244, 255, 1)
  );
  transition: all 0.2s;
}
</style>
