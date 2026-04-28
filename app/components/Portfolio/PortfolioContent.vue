<template>
  <v-dialog max-width="400">
    <template #activator="{ props: activatorProps }">
      <v-btn class="h-auto w-auto py-4" v-bind="activatorProps">
        <v-img
          :width="250"
          aspect-ratio="16/9"
          :src="props.imgUrl"
          style="cursor: pointer"
        ></v-img>
      </v-btn>
    </template>
    <template #default="{ isActive }">
      <v-card max-width="400">
        <v-card-title>
          <v-row>
            <v-col cols="10">
              <h3>{{ props.title }}</h3>
            </v-col>
            <v-col cols="2">
              <v-btn
                icon="mdi-close"
                variant="plain"
                size="small"
                @click.stop="isActive.value = false"
              >
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <p>{{ props.description }}</p>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  imgUrl: string
}>()
</script>
