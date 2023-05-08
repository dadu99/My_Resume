<template>
  <v-card v-if="true" flat>
    <v-card-title>
      <h3 class=" font-weight-light mb-1">{{ title }}</h3>
      <v-divider :thickness="2"></v-divider>
    </v-card-title>
    <v-card-text class="text-content-first">
      <slot/>
    </v-card-text>
  </v-card>
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
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.text-content-first{
  font-size: 1rem;
  line-height: 30px;
}


</style>
