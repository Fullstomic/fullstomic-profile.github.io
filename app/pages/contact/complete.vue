<template>
  <div class="contact-complete">
    <PageTitle
      titleName="Contact Complete"
      content-paragraph="お問い合わせが完了しました。"
    />
  </div>
  <div class="my-5">
    <v-row style="flex-direction: column; margin: 30px auto">
      <v-col class="text-center">
        <p>お問い合わせありがとうございました。</p>
        <p>内容を確認の上、担当者よりご連絡させていただきます。</p>
      </v-col>
    </v-row>
    <v-btn
      @click="$router.push('/')"
      color="primary"
      variant="outlined"
      class="mx-auto d-block"
    >
      <v-icon left>mdi-home</v-icon>
      ホームへ
    </v-btn>
  </div>
</template>
<script setup lang="ts">
import PageTitle from '~/components/Page-Content/PageTitle.vue'
</script>
