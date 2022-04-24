<template>
  <v-card outlined rounded :color="color">
    <v-card-title class="dont-break"> {{ title }} </v-card-title>
    <v-card-subtitle class="dont-break">
      {{ subtitle }} <br />
      {{ subSubtitle }}
    </v-card-subtitle>
    <v-divider v-if="hasBodySlot" class="mx-4"></v-divider>
    <v-card-text v-if="hasBodySlot"> <slot name="body"></slot> </v-card-text>
    <v-divider v-if="hasActionsSlot" class="mx-4"></v-divider>
    <v-card-actions v-if="hasActionsSlot">
      <v-spacer />
      <slot name="actions"></slot>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
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
    subSubtitle: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasBodySlot() {
      return !!this.$slots.body;
    },
    hasActionsSlot() {
      return !!this.$slots.actions;
    },
  },
};
</script>

<style>
.dont-break {
  word-break: normal;
  word-wrap: normal;
}
</style>
