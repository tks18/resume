<template>
  <div>
    <Work-Experience />
    <Educational-Background />
  </div>
</template>

<script>
import workExperience from './work-experience';
import educationBackground from './educational-background';
export default {
  components: {
    'Work-Experience': workExperience,
    'Educational-Background': educationBackground,
  },
};
</script>
