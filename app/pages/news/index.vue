<template>
  <PageTitle title-name="News" content-paragraph="" />
  <v-container class="py-8" max-width="900">
    <div class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-2">記事一覧</h1>
    </div>
    <v-text-field
      v-model="query"
      label="キーワードで検索"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      hide-details
      @input="onSearchArticle"
      @click:clear="onSearchArticle"
      clearable
    >
      <template #append-inner>
        <v-btn icon="mdi-magnify" variant="text"> </v-btn> </template
    ></v-text-field>

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

    <v-card variant="flat">
      <v-list lines="two" class="pa-0">
        <template v-for="(item, index) in filteredNews" :key="item.id">
          <v-list-item
            link
            class="py-4"
            @click.stop="
              isOpenArticleContent(item.category, item.title, item.content)
            "
          >
            <v-row>
              <v-col cols="3">
                <v-chip
                  :color="getCategoryColor(item.category)"
                  size="small"
                  label
                  style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                  class="mr-4 d-none d-sm-flex items-center align-center"
                >
                  {{ item.category }}
                </v-chip>
              </v-col>
              <v-col cols="8">
                {{ item.title }}
              </v-col>
              <v-col cols="1">
                <v-icon
                  icon="mdi-chevron-right"
                  color="grey-lighten-1"
                ></v-icon>
              </v-col>
            </v-row>
          </v-list-item>

          <v-divider v-if="index < filteredNews.length - 1"></v-divider>
        </template>
      </v-list>
    </v-card>

    <div class="text-center mt-8">
      <v-pagination v-model="page" :length="3" rounded="circle"></v-pagination>
    </div>
  </v-container>
  <article-content
    :is-show="isShow"
    :tag="articleInfo.tag"
    :article-title="articleInfo.title"
    :article-paragraph="articleInfo.contentParagraph"
    @close-event="isShow = !isShow"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ArticleContent from '~/components/News/ArticleContent.vue'
import PageTitle from '~/components/Page-Content/PageTitle.vue'

const selectedCategory = ref('すべて')
const page = ref(1)
const query = ref('')

const categories = ['すべて', '重要', 'ニュース', 'イベント', 'メンテナンス']

const newsItems = ref([
  {
    id: 1,
    date: '2024.05.20',
    category: '重要',
    title: 'システムメンテナンスのお知らせ',
    content:
      'システムメンテナンスを以下の期間で行います。なにとぞご了承ください。',
  },
  {
    id: 2,
    date: '2024.05.15',
    category: 'ニュース',
    title: '新機能「ダークモード」をリリースしました',
    content:
      'システムメンテナンスを以下の期間で行います。なにとぞご了承ください。',
  },
  {
    id: 3,
    date: '2024.05.10',
    category: 'イベント',
    title: '夏季ユーザー交流会開催の決定',
    content:
      'システムメンテナンスを以下の期間で行います。なにとぞご了承ください。',
  },
  {
    id: 4,
    date: '2024.05.01',
    category: 'メンテナンス',
    title: 'サーバー増強作業に伴う一部停止について',
    content:
      'システムメンテナンスを以下の期間で行います。なにとぞご了承ください。',
  },
  {
    id: 5,
    date: '2024.04.25',
    category: 'ニュース',
    title: 'プライバシーポリシー改訂のご案内',
    content:
      'システムメンテナンスを以下の期間で行います。なにとぞご了承ください。',
  },
])

const filteredNews = ref<
  {
    id: number
    date: string
    category: string
    title: string
    content: string
  }[]
>([])

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    重要: 'red-lighten-1',
    ニュース: 'blue-lighten-1',
    イベント: 'green-lighten-1',
    メンテナンス: 'orange-lighten-1',
  }
  return colors[category] || 'grey'
}
const articleInfo = ref({
  tag: '',
  title: '',
  contentParagraph: '',
})
const isShow = ref(false)
function isOpenArticleContent(
  tag: string,
  title: string,
  contentParagraph: string,
) {
  articleInfo.value = {
    tag,
    title,
    contentParagraph,
  }
  isShow.value = true
}
// 検索・フィルタリングを実行する関数
function onSearchArticle() {
  filteredNews.value = newsItems.value.filter((item) => {
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

<style scoped>
/* リストアイテムのホバー効果を少し強調 */
.v-list-item:hover {
  background-color: rgba(var(--v-theme-primary), 0.05);
}
</style>
