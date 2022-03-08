<template>
  <v-row align="center" justify="center" class="py-2">
    <v-col cols="12" align="center" class="text-subtitle my-0 py-0">
      Address:
    </v-col>
    <v-col
      cols="12"
      align="center"
      class="text-body-1 font-weight-bold my-0 py-0 mt-0 mb-1"
    >
      {{ authorData.address }}
    </v-col>
    <v-col cols="12" align="center" class="text-subtitle my-0 py-0">
      Contact me:
    </v-col>
    <v-col cols="12" align="center" class="py-1 mx-1">
      <v-chip
        color="primary"
        class="mx-1 my-1"
        v-for="(social, index) in authorData.socials"
        :key="index"
        @click="gotoUrl(social.link)"
      >
        <v-icon left>
          {{ social.icon }}
        </v-icon>
        {{ social.title }}
      </v-chip>
    </v-col>
    <v-col cols="12" align="center" class="my-1 py-1">
      <v-btn
        rounded
        outlined
        color="primary"
        class="mx-1 py-1"
        @click="gotoUrl(`tel:${authorData.phone.num}`)"
      >
        <v-icon left> mdi-phone </v-icon> {{ authorData.phone.display }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import authorData from '@/data/authordata';
export default {
  props: {
    gotoUrl: {
      type: Function,
    },
  },
  data: () => ({
    authorData,
  }),
};
</script>

<style></style>
