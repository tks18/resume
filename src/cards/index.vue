<template>
  <div>
    <Work-Experience />
    <Educational-Background />
    <Extracurriculars />
    <Skills-Card />
    <Hobbies-Interests />
  </div>
</template>

<script>
import workExperience from './work-experience';
import educationBackground from './educational-background';
import extracurriculars from './Extracurriculars';
import skills from './skills';
import interests from './hobbies-and-interests';
export default {
  components: {
    'Work-Experience': workExperience,
    'Educational-Background': educationBackground,
    Extracurriculars: extracurriculars,
    'Skills-Card': skills,
    'Hobbies-Interests': interests,
  },
};
</script>
