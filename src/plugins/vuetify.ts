import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import authorData from '@/data/authordata.json';

Vue.use(Vuetify);

const accent = authorData.websiteConfig.accent;

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    dark: true,
    themes: {
      dark: {
        primary: accent ? accent : '#ffed14',
        secondary: '#4A148C',
        accent: '#e1bee7',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
});
