<template>
  <Detail-Card
    :title="title"
    :subtitle="insitituteName"
    :subSubtitle="subtitle"
  >
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
    insitituteName: {
      type: String,
      default: '',
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
