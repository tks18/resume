<template>
  <v-footer dark app padless fixed>
    <v-card class="flex" color="primary" flat tile>
      <v-card-title>
        <strong class="subheading">
          Get connected with me on social networks!
        </strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="(social, index) in socials"
          :key="index"
          class="mx-2"
          icon
          @click="gotoUrl(social.link)"
        >
          <v-icon size="24px">
            {{ social.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>
<script>
import gotoUrl from '@/helpers/url-navigator';
import authorData from '@/data/authordata';
export default {
  data: () => ({
    socials: authorData.socials,
    gotoUrl,
  }),
};
</script>
