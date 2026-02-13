<template>
  <v-dialog v-model="props.isActive" max-width="500">
    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="10"> <div>サイト内検索</div></v-col>
          <v-col cols="2">
            <v-btn
              size="small"
              color="primary"
              variant="plain"
              icon="mdi-close"
              @click="emit('close')"
            ></v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="query" variant="outlined">
          <template #append-inner>
            <v-btn icon="mdi-magnify" variant="plain" @click.stop="onSearch">
            </v-btn>
          </template>
        </v-text-field>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const query = ref()
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'search', query: string): void
}>()
const props = defineProps<{
  isActive: boolean
}>()
function onSearch() {
  emit('search', query.value)
}
</script>
<style scoped></style>
