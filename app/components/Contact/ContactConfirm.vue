<template>
  <v-dialog v-model="props.isShow" max-width="500px">
    <v-card>
      <v-card-title>
        <h3>お問い合わせ内容の確認</h3>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="5" md="3">
            <p><strong>お問い合わせ内容</strong></p>
          </v-col>
          <v-col>
            {{
              titleList?.find((item) => item.id === props.contactTitle)?.name
            }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5" md="3">
            <p><strong>メールアドレス</strong></p>
          </v-col>
          <v-col>
            {{ props.contactEmail }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5" md="3">
            <p><strong>お問い合わせ内容</strong></p>
          </v-col>
          <v-col>
            {{ props.contactContent }}
          </v-col>
        </v-row>
        <v-row>
          <v-col> </v-col>
          <v-col>
            <v-row>
              <v-spacer></v-spacer>
              <v-col>
                <v-btn
                  color="error"
                  variant="outlined"
                  append-icon="mdi-pen"
                  @click.stop="emit('close')"
                  >修正</v-btn
                >
              </v-col>
              <v-col>
                <v-btn
                  color="primary"
                  variant="outlined"
                  append-icon="mdi-send"
                  @click.stop="emit('send')"
                >
                  送信
                </v-btn>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
const props = defineProps<{
  contactTitle: number
  contactEmail: string
  contactContent: string
  isShow: boolean
}>()

const emit = defineEmits(['send', 'close'])

const titleList = [
  {
    id: 0,
    name: '選択してください',
  },
  {
    id: 1,
    name: 'サービスについて',
  },
  {
    id: 2,
    name: '連絡',
  },
  { id: 3, name: 'その他' },
]
</script>
