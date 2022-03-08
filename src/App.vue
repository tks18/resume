<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <Main-Banner />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ismobile from '@/helpers/ismobile';
import mainBanner from '@/components/main-banner.vue';
export default {
  name: 'App',
  metaInfo: {
    title: 'Home',
  },
  components: {
    'Main-Banner': mainBanner,
  },
  data: () => ({
    ismobile: ismobile(),
  }),
};
</script>
