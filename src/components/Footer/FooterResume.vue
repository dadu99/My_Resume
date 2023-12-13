<template>
    <v-footer class="dark padless custom-footer-bnd">
        <v-card flat tile width="100%" class="primary text-center background-portfolio">
            <v-divider></v-divider>
            <v-card-text>
                Copyright {{ new Date().getFullYear() }}
                | Powered by <b>Darius Baciu</b> 
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>

export default {
    name: "FooterResume",
    data() {
        return {}
    },
    methods: {
        onResize() {
            if (window.innerWidth >= 960) {
                this.panel = [...Array(4).keys()].map((k, i) => i);
            } else {
                this.panel = [];
            }
        }
    },
    beforeUnmount() {
        if (typeof window !== "undefined") {
            window.removeEventListener("resize", this.onResize, {passive: true});
        }
    },

    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, {passive: true});
    },
}

</script>
\
<style scoped lang="scss">
.custom-footer-bnd {
  padding: 0px !important;
}

.background-portfolio {
  background-color: #FEFAE0;
}
</style>
