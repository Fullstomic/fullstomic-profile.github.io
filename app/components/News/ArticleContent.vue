<template>
  <v-dialog v-model="props.isShow">
    <v-card>
      <v-card-title>
        <v-contanier>
          <v-row>
            <v-col cols="10">
              <h3>記事詳細</h3>
            </v-col>
            <v-col cols="2">
              <v-btn
                icon="mdi-close"
                variant="plain"
                @click.stop="emit('closeEvent')"
              >
              </v-btn>
            </v-col>
          </v-row>
        </v-contanier>
      </v-card-title>
      <v-card-text>
        <v-container>
          <div class="d-flex align-center mb-4">
            <v-chip
              :color="getCategoryColor(props.tag)"
              size="small"
              label
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
              class="mr-4 d-none d-sm-flex items-center align-center"
            >
              {{ props.tag }}
            </v-chip>
          </div>

          <h1
            class="text-h4 text-md-h3 font-weight-bold mb-8"
            style="line-height: 1.4"
          >
            {{ props.articleTitle }}
          </h1>

          <section class="article-body">
            <p class="text-body-1 mb-6">
              {{ props.articleParagraph }}
            </p>
          </section>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
const props = defineProps<{
  isShow: boolean
  tag: string
  articleTitle: string
  articleParagraph: string
}>()

const emit = defineEmits<{
  (e: 'closeEvent'): void
}>()

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    重要: 'red-lighten-1',
    ニュース: 'blue-lighten-1',
    イベント: 'green-lighten-1',
    メンテナンス: 'orange-lighten-1',
  }
  return colors[category] || 'grey'
}
</script>
