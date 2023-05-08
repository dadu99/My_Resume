<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>


<script>
import {onMounted} from "vue";

export default {
  name: 'App',

  setup() {

    // Begin change title when user changes tab
    let docTitle = document.title;
    window.addEventListener("blur", () => {
      document.title = 'Come Back ;(';
    });

    window.addEventListener("focus", () => {
      document.title = docTitle;
    })
    //End change title when user changes tab.

    onMounted(() => {

    })

    return {

    }
  }
}
</script>

<style>
html, body {
  font-family: 'Lato', sans-serif;
  border: none;
  margin: 0;
  padding: 0;
}
</style>
