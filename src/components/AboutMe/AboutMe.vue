<template>
  <v-card color="secondary">
    <v-card-text>
      <ContentSection title="Who am I?">
        I'm UI developer <br>
        I'm interested and skilled in different topics of Information Technology including programming, web development, and computer and network security. <br>
        Enthusiast and ambitious person, who enjoys challenges, keen to learn new things and working with best professional people.
      </ContentSection>

      <ContentSection v-if="experience" title="Experience">

      </ContentSection>

      <ContentSection v-if="educations" title="Education">
        <v-layout v-for="(education, i) in educations" :key="i" class="layout-education">
          <v-flex md4>
            {{ education.from }}-{{ education.to }}
          </v-flex>

          <v-flex md8>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </ContentSection>

      <ContentSection v-if="skills" id="to-timeline" title="Skills">
        <v-layout wrap>
          <div v-for="(skill, iterateSkill) in skills" :key="iterateSkill">
            <v-flex v-if="skill.divider" md12 xs12 mb-4/>
            <div class="mr-2 ml-2">
              <div class="align-center">
                <v-icon small>{{ skill.icon }}</v-icon>
                {{ skill.title }}
              </div>
              <v-progress-linear class="progress"
                                 bg-color="blue-grey"
                                 color="lime"
                                 height="3"
                                 :value="skill.value"/>
            </div>
          </div>
        </v-layout>
      </ContentSection>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from "@/components/AboutMe/ContentSection";
export default {
  name: "AboutMe",

  components: {ContentSection},

  data() {
    return {
      educations: [
        {
          from       : '2020',
          to         : '2022',
          title      : 'Master\'s degree, Advanced Computing Systems',
          location   : 'Lucian Blaga University',
          description: 'Am facut de toate si nimic',
        },
        {
          from       : '2016',
          to         : '2020',
          title      : 'Bachelor\'s degree, Computer Science',
          location   : 'Lucian Blaga University',
          description: 'Activities and societies: Computer Programming, Object-Oriented Programming, Web Development, Artificial Intelligence',
        },
      ],
      experience: [

      ],
      skills: [
        {
          title: 'PHP',
          icon : 'mdi-language-php',
          value: 95,
        },
        {
          title: 'JavaScript',
          icon : 'mdi-language-javascript',
          value: 80,
        },
        {
          title: 'Laravel Framework',
          icon : 'mdi-laravel',
          value: 90,
        },
        {
          title: 'Vue.js Framework',
          icon : 'mdi-vuejs',
          value: 90,
        },
        { divider: true },
        {
          title: 'Git',
          icon : 'mdi-git',
          value: 67,
        },
        { divider: true },
        {
          title: 'Hardware Development',
          icon : 'mdi-chip',
          value: 29,
        },
        {
          title: 'C/C++',
          icon : 'mdi-language-cpp',
          value: 38,
        },
        { divider: true },
        {
          title: 'Leadership',
          icon : 'mdi-account-group',
          value: 68,
        },
      ],
    }
  },

  setup() {
    return {
    };
  },
}
</script>

<style scoped lang="scss">
.first-section {
  background-color: gold;
}
.progress {
  margin-top: 0.1rem;
}
.layout-education {
  gap: 40px;
  line-height: 55px;
}

</style>
