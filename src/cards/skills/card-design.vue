<template>
  <Detail-Card :title="title" :subtitle="subtitle">
    <template #body>
      <v-chip-group column>
        <v-chip color="primary" v-for="(skill, index) in skills" :key="index">
          {{ skill.name }}
        </v-chip>
      </v-chip-group>
    </template>
  </Detail-Card>
</template>

<script>
import detailCard from '../../components/details-card.vue';
import gotoUrl from '@/helpers/url-navigator';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    skills: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    'Detail-Card': detailCard,
  },
  data: () => ({
    gotoUrl,
  }),
};
</script>

<style></style>
