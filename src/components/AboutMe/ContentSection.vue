<template>
    <v-card v-if="true" flat>
        <v-card-title>
            <h3 class="font-weight-thin mb-1">
                {{ title }}
            </h3>
            <v-divider class="border-opacity-50" :thickness="2" color="#B99470">
            </v-divider>
        </v-card-title>
        <v-card-text class="text-content-first">
            <slot/>
        </v-card-text>
    </v-card>
    <div v-else class="mb-5">
        <div class="title mb-3">
            <h2>
                {{ title }}
            </h2>
            <template v-if="$slots.actions">
                <v-spacer />
                <slot name="actions" />
            </template>
        </div>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'ContentSection',
    components: {},
    props: {
        title: {
            type: String,
            default: ''
        }
    },
}
</script>

<style scoped lang="scss">

.title {
  border-bottom: 2px #333333 solid;
  line-height: 1.5 !important;
}

.text-content-first {
  font-size: 1rem;
  line-height: 30px;
}


</style>
