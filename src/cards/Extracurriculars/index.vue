<template>
  <v-row v-if="extracurriculars && extracurriculars.length > 0">
    <v-col cols="12">
      <div class="text-h5 font-weight-bold">Extracurricular Activities</div>
      <v-divider></v-divider>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col
          :cols="ismobile ? 12 : 4"
          v-for="(extracurricular, index) in extracurriculars"
          :key="index"
        >
          <Detail-Card
            :title="extracurricular.title"
            :subtitle="extracurricular.subtitle"
            :category="extracurricular.category"
            :detailList="extracurricular.detailsList"
            :actionsDetailList="extracurricular.actionsDetailList"
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
    extracurriculars: authorData.extracurriculars,
    ismobile: ismobile(),
  }),
  components: {
    'Detail-Card': cardDesign,
  },
};
</script>

<style></style>
