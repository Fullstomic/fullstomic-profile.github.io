<template>
  <section
    style="
      height: calc(100vh - 50px);
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: linear-gradient(
        90deg,
        rgba(65, 164, 253, 1),
        rgba(14, 244, 255, 1)
      );
      color: #fff;
    "
  >
    <h1>Welcome to Fullstomic Homepage</h1>
  </section>
  <section>
    <div class="d-flex align-center justify-center">
      <h1>Contents</h1>
    </div>
    <v-row>
      <v-col cols="12" class="my-5">
        <home-cotent-link
          link="/about/"
          content-title="About"
          content-description="私の情報はこちらから。"
          icon="account"
        />
      </v-col>
      <v-col cols="12" class="my-5">
        <home-cotent-link
          content-title="News"
          content-description="私に関するお知らせはこちらから。"
          icon="newspaper-variant"
        />
      </v-col>
      <v-col cols="12" class="my-5">
        <home-cotent-link
          content-title="Portfolio"
          content-description="私の制作した作品はこちらから。"
          icon="folder-file"
        />
      </v-col>
      <v-col cols="12" class="my-5">
        <home-cotent-link
          content-title="Contact"
          content-description="ご連絡はこちらから。"
          icon="chat"
        />
      </v-col>
    </v-row>
  </section>
</template>
<script setup lang="ts">
import HomeCotentLink from '~/components/Link/HomeCotentLink.vue'
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
.image {
  position: relative;
}
.image::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(
    90deg,
    rgba(65, 164, 253, 1),
    rgba(14, 244, 255, 1)
  );
  transition: all 0.2s;
}
</style>
