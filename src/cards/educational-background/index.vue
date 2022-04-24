<template>
  <v-row v-if="educations && educations.length > 1">
    <v-col cols="12">
      <div class="text-h5 font-weight-bold">Educational Background</div>
      <v-divider></v-divider>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col
          :cols="ismobile ? 12 : 4"
          v-for="(education, index) in educations"
          :key="index"
        >
          <Detail-Card
            :title="education.title"
            :subtitle="education.subtitle"
            :insitituteName="education.insitituteName"
          ></Detail-Card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import authorData from '@/data/authordata.json';
import cardDesign from './card-design.vue';
import ismobile from '@/helpers/ismobile';
export default {
  data: () => ({
    educations: authorData.educationalBackground,
    ismobile: ismobile(),
  }),
  components: {
    'Detail-Card': cardDesign,
  },
};
</script>

<style></style>
