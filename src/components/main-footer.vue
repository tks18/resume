<template>
  <v-footer dark app padless fixed>
    <v-card class="flex" color="primary" flat tile>
      <v-card-title class="dont-break">
        <v-row>
          <v-col
            :cols="ismobile ? 12 : 6"
            :class="lightAccent ? 'black--text' : ''"
            :align="ismobile ? 'center' : 'left'"
          >
            <strong class="subheading">
              Get connected with me on social networks!
            </strong>
          </v-col>
          <v-col
            :cols="ismobile ? 12 : 4"
            :align="ismobile ? 'center' : 'right'"
          >
            <v-btn
              v-for="(social, index) in socials"
              :key="index"
              :class="'mx-2 ' + (lightAccent ? 'black--text' : '')"
              icon
              @click="gotoUrl(social.link)"
            >
              <v-icon size="24px">
                {{ social.icon }}
              </v-icon>
            </v-btn>
          </v-col>
          <v-col
            :cols="ismobile ? 12 : 2"
            :align="ismobile ? 'center' : 'left'"
          >
            <v-btn
              v-if="resumeDownload"
              rounded
              outlined
              :class="lightAccent ? 'black--text' : ''"
              @click="gotoUrl(resumeDownload.link)"
            >
              {{ resumeDownload.displayText }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
    </v-card>
  </v-footer>
</template>
<script>
import gotoUrl from '@/helpers/url-navigator';
import ismobile from '@/helpers/ismobile';
import authorData from '@/data/authordata';
export default {
  data: () => ({
    socials: authorData.socials,
    resumeDownload: authorData.resumeDownload,
    lightAccent: authorData.websiteConfig.isAccentLight,
    gotoUrl,
    ismobile: ismobile(),
  }),
};
</script>
<style>
.dont-break {
  word-break: normal;
  word-wrap: normal;
}
</style>
