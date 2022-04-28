<template>
  <v-row v-if="skills && skills.length > 0">
    <v-col cols="12">
      <div class="text-h5 font-weight-bold">Skills</div>
      <v-divider></v-divider>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col
          :cols="ismobile ? 12 : 3"
          v-for="(skill, index) in skills"
          :key="index"
        >
          <Detail-Card
            :title="skill.title"
            :subtitle="skill.subtitle"
            :skills="skill.subSkills"
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
    skills: authorData.skills,
    ismobile: ismobile(),
  }),
  components: {
    'Detail-Card': cardDesign,
  },
};
</script>

<style></style>
