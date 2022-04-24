<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <Main-Banner />
      </v-container>
      <v-container>
        <Resume-Cards />
      </v-container>
    </v-main>
    <Main-Footer />
  </v-app>
</template>

<script>
import ismobile from '@/helpers/ismobile';
import mainBanner from '@/components/main-banner.vue';
import mainFooter from '@/components/main-footer.vue';
import resumeCards from '@/cards';
export default {
  name: 'App',
  metaInfo: {
    title: 'Resume | Sudharshan TK',
  },
  components: {
    'Main-Banner': mainBanner,
    'Resume-Cards': resumeCards,
    'Main-Footer': mainFooter,
  },
  data: () => ({
    ismobile: ismobile(),
  }),
};
</script>
