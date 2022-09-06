<template>
  <Detail-Card :title="title" :subtitle="position" :subSubtitle="subtitle">
    <template #body>
      <ul>
        <li v-for="(detail, index) in detailList" :key="index">
          {{ detail }}
        </li>
      </ul>
    </template>
    <template #actions>
      <v-btn
        color="primary"
        :class="lightAccent ? 'black--text' : ''"
        v-for="(action, index) in actionsDetailList"
        :key="index"
        @click="gotoUrl(action.link)"
        rounded
      >
        <v-icon left v-if="action.icon"> {{ action.icon }} </v-icon>
        {{ action.text }}
      </v-btn>
    </template>
  </Detail-Card>
</template>

<script>
import authorData from '@/data/authordata.json';
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
    position: {
      type: String,
      default: '',
    },
    detailList: {
      type: Array,
      default: () => [],
    },
    actionsDetailList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    'Detail-Card': detailCard,
  },
  data: () => ({
    gotoUrl,
    lightAccent: authorData.websiteConfig.isAccentLight,
  }),
};
</script>

<style></style>
