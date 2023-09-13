<template>
    <v-app>
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>


<script>
import {onMounted} from "vue";

//Da

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

        onMounted(() => {

           // console.log('on mounted');
        })
        return {}
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html, body {
    font-family: "Heebo", sans-serif;
    border: none;
    background-color: #FEFAE0;
    margin: 0;
    padding: 0;

}
</style>
