<template>
  <v-app>
    <v-app-bar elevation="0" sticky>
      <template #prepend>
        <v-btn to="/" class="home_page_link">Fullstomic</v-btn>
      </template>
      <template #append>
        <v-btn
          color="primary"
          icon="mdi-magnify"
          variant="plain"
          size="small"
          @click.stop="isActive = true"
        >
        </v-btn>
        <v-app-bar-nav-icon
          color="primary"
          :icon="drawer ? 'mdi-close' : 'mdi-menu'"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
    <search-form :isActive="isActive" @close="isActive = false"></search-form>
    <v-navigation-drawer elevation="0" v-model="drawer" location="right">
      <v-row class="d-flex flex-column mt-5 ml-auto mr-auto">
        <v-col class="parent_header_link">
          <a href="" class="header_link"> About </a>
        </v-col>
        <v-col class="parent_header_link">
          <a href="" class="header_link">News</a>
        </v-col>
        <v-col class="parent_header_link">
          <a href="" class="header_link">Portfolio</a>
        </v-col>
        <v-col class="parent_header_link">
          <a href="" class="header_link">Contact</a>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <NuxtPage />
    <v-footer class="bg-light-blue-lighten-5 flex-column">
      <v-row class="mb-4 footer-content" align-content="space-between">
        <v-col cols="8">
          <a href="" class="footer_home_page_link">
            <h1>Fullstomic</h1>
          </a></v-col
        >
        <v-col cols="4">
          <v-row
            class="d-flex justify-center items-center flex-column mt-5 ml-auto mr-auto"
          >
            <v-col class="parent_header_link">
              <a href="" class="header_link"> About </a>
            </v-col>
            <v-col class="parent_header_link">
              <a href="" class="header_link">News</a>
            </v-col>
            <v-col class="parent_header_link">
              <a href="" class="header_link">Portfolio</a>
            </v-col>
            <v-col class="parent_header_link">
              <a href="" class="header_link">Contact</a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div>
        <p>Ⓒ2026 Fullstomic</p>
      </div>
    </v-footer>
  </v-app>
</template>
<script setup lang="ts">
import SearchForm from '~/components/SearchForm.vue'
const isActive = ref(false)
const drawer = ref(false)
</script>
<style scoped>
.home_page_link {
  color: #1569e6;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}
.footer_home_page_link {
  color: #1569e6;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
}
.header_link {
  color: #98c4ff;
  text-decoration: none;
  position: relative;
  transition: all 0.2s;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    height: 1px;
    background-color: #01579b;
    transition: all 0.2s;
  }
}
.header_link:hover {
  color: #01579b;
  &::before {
    width: 100%;
  }
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
