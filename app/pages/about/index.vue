<template>
  <page-title title-name="About" content-paragraph="'title'" />
  <section
    class="my-10"
    style="
      height: 50vh;
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >
    <v-row>
      <v-col class="title">
        <h1>Profile</h1>
      </v-col>
      <v-col>
        <v-card color="light-blue-lighten-4">
          <v-card-text>
            <v-row v-for="profileData in profileDatas">
              <v-col style="font-weight: bold">
                {{ profileData.title }}
              </v-col>
              <v-col>
                {{ profileData.value }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
  <section class="portfolio_section">
    <h1>Portfolio</h1>
    <div
      style="
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      "
    >
      <p>私が実際に制作した作品は下記のリンクからご覧になれます。</p>
      <v-btn
        color="primary"
        class="link"
        to="/portfolio/"
        append-icon="mdi-arrow-right"
        >Portfolio</v-btn
      >
    </div>
  </section>
</template>
<script setup lang="ts">
import PageTitle from '~/components/Page-Content/PageTitle.vue'
const profileDatas = [
  {
    title: 'Name',
    value: 'Fullstomic',
  },
  {
    title: 'Job Title',
    value: '初志貫徹',
  },
  {
    title: 'Strong Point',
    value: '正確性の高さなど',
  },
  {
    title: 'Hobby',
    value: '行政区画調査など',
  },
]
</script>
<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.portfolio_section {
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(65, 165, 253, 0.539);
  & h1 {
    text-align: center;
  }
}
</style>
