<template>
  <v-row v-if="experiences && experiences.length > 0">
    <v-col cols="12">
      <div class="text-h5 font-weight-bold">Work Experience</div>
      <v-divider></v-divider>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col
          :cols="ismobile ? 12 : 4"
          v-for="(experience, index) in experiences"
          :key="index"
        >
          <Detail-Card
            :title="experience.title"
            :subtitle="experience.subtitle"
            :position="experience.position"
            :detailList="experience.detailsList"
            :actionsDetailList="experience.actionsDetailList"
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
    experiences: authorData.workExperience,
    ismobile: ismobile(),
  }),
  components: {
    'Detail-Card': cardDesign,
  },
};
</script>

<style></style>
