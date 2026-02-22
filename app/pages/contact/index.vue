<template>
  <ContactConfirm
    :is-show="isConfirmShow"
    :contact-title="contactTitle"
    :contact-email="contactEmail"
    :contact-content="contactContent"
    @close="isConfirmShow = false"
    @send="onSend"
  />
  <PageTitle titleName="Contact" content-paragraph="''" />
  <v-container>
    <div>
      <section>
        <h2>お問い合わせ内容</h2>
      </section>
      <v-row style="flex-direction: column; margin: 30px auto">
        <v-col>
          <v-row>
            <v-col cols="4" md="3" class="mt-4">
              <p>お問い合わせ内容</p>
            </v-col>
            <v-col cols="8" md="9">
              <v-select
                v-model="contactTitle"
                :items="titleList"
                item-value="id"
                item-title="name"
                label="お問い合わせ内容"
                variant="outlined"
                :color="contactTitle !== 0 ? 'success' : 'primary'"
                required
                :rules="[
                  (v) => v !== 0 || 'お問い合わせ内容を選択してください。',
                ]"
                ><template #append-inner>
                  <v-fade-transition>
                    <v-icon v-show="contactTitle !== 0" color="success"
                      >mdi-check</v-icon
                    >
                  </v-fade-transition>
                </template></v-select
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="4" md="3" class="mt-4">
              <p>メールアドレス</p>
            </v-col>
            <v-col cols="8" md="9">
              <v-text-field
                v-model="contactEmail"
                label="メールアドレス"
                type="email"
                :color="
                  contactEmail.length > 0 && /.+@.+\..+/.test(contactEmail)
                    ? 'success'
                    : 'primary'
                "
                placeholder="example@sample.com"
                required
                variant="outlined"
                :rules="[
                  (v: string) =>
                    /.+@.+\..+/.test(v) ||
                    '有効なメールアドレスを入力してください。',
                ]"
              >
                <template #append-inner>
                  <v-fade-transition>
                    <v-icon
                      v-show="
                        contactEmail.length > 0 &&
                        /.+@.+\..+/.test(contactEmail)
                      "
                      color="success"
                      >mdi-check</v-icon
                    >
                  </v-fade-transition>
                </template>
              </v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="4" md="3" class="mt-4">
              <p>お問い合わせ内容</p>
            </v-col>
            <v-col cols="8" md="9">
              <v-textarea
                v-model="contactContent"
                label="お問い合わせ内容"
                type="text"
                :color="contactContent.length > 0 ? 'success' : 'primary'"
                placeholder="お問い合わせ内容を入力してください"
                required
                variant="outlined"
                :rules="[
                  (v: string) =>
                    v.length > 0 || 'お問い合わせ内容を入力してください。',
                ]"
              >
                <template #append-inner>
                  <v-fade-transition>
                    <v-icon v-show="contactContent.length > 0" color="success"
                      >mdi-check</v-icon
                    >
                  </v-fade-transition>
                </template>
              </v-textarea>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="4" md="3" class="mt-4"></v-col>
            <v-col
              cols="8"
              md="9"
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <v-btn
                color="primary"
                variant="outlined"
                width="w-full"
                append-icon="mdi-send"
                @click.stop="onConfirmOpen"
                >送信</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script setup lang="ts">
import PageTitle from '~/components/Page-Content/PageTitle.vue'
import ContactConfirm from '~/components/Contact/ContactConfirm.vue'
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

const contactTitle = ref(0)
const contactContent = ref('')
const contactEmail = ref('')
const form = ref()
const isConfirmShow = ref(false)

function onConfirmOpen() {
  isConfirmShow.value = true
}
function onSend() {
  isConfirmShow.value = false
  contactTitle.value = 0
  contactContent.value = ''
  contactEmail.value = ''
  navigateTo('/contact/complete')
}
</script>
