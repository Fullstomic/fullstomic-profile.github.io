<template>
  <page-title title-name="Portfolio" content-paragraph="'title'" />
  <v-container>
    <v-text-field
      v-model="query"
      label="キーワードで検索"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      hide-details
      @input="onSearchArticle"
      @click:clear="onSearchArticle"
      clearable
      density="comfortable"
      color="primary"
    >
    </v-text-field>

    <v-chip-group
      v-model="selectedCategory"
      @update:model-value="onSearchArticle"
      selected-class="text-primary"
      mandatory
    >
      <v-chip
        v-for="cat in categories"
        :key="cat"
        :value="cat"
        variant="outlined"
        filter
      >
        {{ cat }}
      </v-chip>
    </v-chip-group>
    <v-row>
      <v-col
        v-if="filteredNews.length > 0"
        v-for="item in filteredNews"
        cols="12"
        sm="6"
        md="4"
        class="d-flex justify-center items-center"
      >
        <portfolio-content
          :title="item.title"
          :description="item.description"
          :img-url="item.imgUrl"
          :link="item.link"
        />
      </v-col>
      <v-col
        v-else
        cols="12"
        class="text-center"
        style="height: 500px; display: flex"
      >
        <p style="margin: 30px auto; color: red">見つかりませんでした。</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import PageTitle from '~/components/Page-Content/PageTitle.vue'
import PortfolioContent from '~/components/Portfolio/PortfolioContent.vue'
const selectedCategory = ref('すべて')
const page = ref(1)
const query = ref('')
const portfolioItems = ref([
  {
    title: 'ポートフォリオタイトル1',
    description: 'ポートフォリオの説明1',
    category: 'Vue',
    imgUrl: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
    link: 'https://example.com/portfolio1',
  },
  {
    title: 'ポートフォリオタイトル2',
    description: 'ポートフォリオの説明2',
    category: 'React',
    imgUrl: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
    link: 'https://example.com/portfolio2',
  },
  {
    title: 'ポートフォリオタイトル3',
    description: 'ポートフォリオの説明3',
    category: 'Vue',
    imgUrl: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
    link: 'https://example.com/portfolio3',
  },
])
const categories = [
  'すべて',
  'Vue',
  'Nuxt',
  'React',
  'Design',
  'Backend',
  'API',
]
const filteredNews = ref<
  {
    title: string
    description: string
    category: string
    imgUrl: string
    link?: string
  }[]
>(portfolioItems.value)

// 検索・フィルタリングを実行する関数
function onSearchArticle() {
  filteredNews.value = portfolioItems.value.filter((item) => {
    // 1. カテゴリの一致チェック
    const isCategoryMatch =
      selectedCategory.value === 'すべて' ||
      item.category === selectedCategory.value

    // 2. キーワードの一致チェック（タイトルに含まれているか）
    const isKeywordMatch =
      !query.value ||
      item.title.toLowerCase().includes(query.value.toLowerCase())

    // 両方の条件を満たすものだけを残す
    return isCategoryMatch && isKeywordMatch
  })
}
</script>
