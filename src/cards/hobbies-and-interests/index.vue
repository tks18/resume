<template>
  <v-row v-if="interests && interests.length > 0">
    <v-col cols="12">
      <div class="text-h5 font-weight-bold">Hobbies & Interests</div>
      <v-divider></v-divider>
    </v-col>
    <v-col cols="12">
      <v-chip-group column>
        <v-chip
          color="primary"
          v-for="(interest, index) in interests"
          :key="index"
        >
          {{ interest.name }}
        </v-chip>
      </v-chip-group>
    </v-col>
  </v-row>
</template>

<script>
import authorData from '@/data/authordata.json';
import ismobile from '@/helpers/ismobile';
export default {
  data: () => ({
    interests: authorData.interests,
    ismobile: ismobile(),
  }),
};
</script>

<style></style>
