<template>
  <v-app-bar app color="black" dark flat class="px-12">
    <v-spacer></v-spacer>

    <v-btn text @click="scroll('home')" class="text-yellow">Home</v-btn>
    <v-btn text @click="scroll('about')"  >About</v-btn>
    <v-btn text @click="scroll('portfolio')"  >Portfolio</v-btn>
    <v-btn text @click="scroll('services')" > Services</v-btn>
    <v-btn text @click="scroll('page')"  > Page</v-btn>
    <v-btn text @click="scroll('biog')"  > Biog</v-btn>
    <v-btn text @click="scroll('contact')"  > Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name:'HeaderBar',

  methods: {
    scroll(refName) {
      console.log('ref name ->', refName);
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>

</style>