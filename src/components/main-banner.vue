<template>
  <v-card flat>
    <v-card-text>
      <v-row align="center" justify="center">
        <v-col :cols="ismobile ? 12 : 8" align="center">
          <v-row align="center" justify="center">
            <v-col :cols="ismobile ? 12 : 3" justify="center" align="center">
              <v-avatar color="primary" :size="200">
                <v-img :src="authorData.image"></v-img>
              </v-avatar>
            </v-col>
            <v-col
              :cols="ismobile ? 12 : 9"
              :align="ismobile ? 'center' : 'left'"
            >
              <v-card-title v-if="!ismobile" class="text-h3 font-weight-black">
                {{ authorData.name }}
              </v-card-title>
              <v-card-subtitle
                v-if="!ismobile"
                class="text-body-1 font-weight-bold"
              >
                {{ authorData.subtitle }}
              </v-card-subtitle>
              <div v-if="ismobile" class="text-h5 font-weight-bold">
                {{ authorData.name }}
              </div>
              <div v-if="ismobile" class="text-body-1 font-weight-bold">
                {{ authorData.subtitle }}
              </div>
              <v-card-text class="text-body-1">
                {{ authorData.intro }}
              </v-card-text>
              <v-card-text>
                <v-btn
                  @click="gotoUrl(authorData.website.link)"
                  color="primary"
                  outlined
                  rounded
                >
                  <v-icon left> {{ authorData.website.icon }} </v-icon>
                  {{ authorData.website.title }}
                </v-btn>
              </v-card-text>
            </v-col>
          </v-row>
        </v-col>
        <v-col :cols="ismobile ? 12 : 4">
          <Social-Links :goto-url="gotoUrl" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import ismobile from '@/helpers/ismobile';
import socialLinks from './social-links.vue';
import gotoUrl from '@/helpers/url-navigator';
import authorData from '@/data/authordata';
export default {
  components: {
    'Social-Links': socialLinks,
  },
  data: () => ({
    ismobile: ismobile(),
    gotoUrl,
    authorData,
  }),
};
</script>

<style></style>
