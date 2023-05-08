<template>
  <v-app id="portfolio-home">
    <header-section></header-section>

    <v-content>
      <v-container fluid fill-height class="resume-container">
        <v-layout class="align-center justify-center">
          <div class="">
            <SideBar class="fill-height align-center justify-start"/>
          </div>
          <div class="">
            <AboutMe></AboutMe>
          </div>

        </v-layout>

      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {defineComponent} from "vue";
import AboutMe from "@/components/AboutMe/AboutMe";
import SideBar from "@/components/Sidebar/SideBar";
import HeaderSection from "@/components/Header/Header";


export default defineComponent({
  name: "HomeView",
  components: {HeaderSection, SideBar, AboutMe},
  methods: {

  },

  setup() {
    return {};
  },

});
</script>
<style scoped>
#portfolio-home {
  font-family: 'Lato', sans-serif;
  border: none;
  margin: 0;
  padding: 0;
  height: 100%;
  background: rgb(26, 188, 156);
  background: -moz-linear-gradient(-45deg, rgba(26, 188, 156, 1) 0%, rgba(142, 68, 173, 1) 100%);
  background: -webkit-linear-gradient(-45deg, rgba(26, 188, 156, 1) 0%, rgba(142, 68, 173, 1) 100%);
  background: linear-gradient(135deg, rgba(26, 188, 156, 1) 0%, rgba(142, 68, 173, 1) 100%);
}

.resume-container {

}

</style>
