<template>
    <v-app id="portfolio-home">
        <header-section></header-section>

        <v-fade-transition mode="out-in" type="animation">
                <v-container class="fill-height size-screens">
                    <v-layout class="size-screens_content">
                        <v-flex class="md10 sm12" >
                            <v-layout class="size-screens-mobile wrap">
                                <v-flex class="md4" >
                                    <SideBar class="fill-height"/>
                                </v-flex>
                                <v-flex md8>
                                    <AboutMe class="fill-height about-me-screen"></AboutMe>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-container>
        </v-fade-transition>
        <Footer></Footer>
    </v-app>
</template>

<script>
import {defineComponent} from "vue";
import AboutMe from "@/components/AboutMe/AboutMe";
import SideBar from "@/components/Sidebar/SideBar";
import HeaderSection from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer.vue";


export default defineComponent({
    name: "HomeView",
    components: {Footer, HeaderSection, SideBar, AboutMe},

    setup() {
        return {};
    },

});
</script>
<style scoped>

#portfolio-home {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #FEFAE0;
}
.size-screens-mobile {
    border-radius: 8px;
}

@media only screen and (max-width: 1880px) {
    .size-screens {
        max-width: 85vw;
    }
}

@media only screen and (max-width: 1440px) {
    .size-screens {
        max-width: 90vw;
    }

    .about-me-screen {
        max-width: 70vw;
    }
}

@media only screen and (max-width: 1024px) {
    .size-screens {
        .size-screens_content {
            display: flex;
            justify-content: center;
        }
    }

    .about-me-screen {
        max-width: 65vw;
    }
}

@media only screen and (max-width: 740px) {
    .size-screens {
        .size-screens_content {
            .size-screens-mobile {
                display: flex;
                flex-direction: column;

            }
        }
    }
}
@media only screen and (max-width: 550px) {
    .size-screens {
        max-width: 100vw;
        .about-me-screen {
            margin-top: 3vh;
            max-width: 90vw;
        }
    }
}
</style>