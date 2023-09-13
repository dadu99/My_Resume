<template>
    <v-layout>
        <v-flex v-if="hasIcon" xs2>
            <v-icon>
                {{ item.icon }}
            </v-icon>
        </v-flex>
        <v-flex :xs10="hasIcon" :xs12="!hasIcon">
            <div class="text-content">{{ item.name }}</div>
            <p>
                <a v-if="item.link" class="custom-link text-content" :href="item.link" target="_blank">
                    {{ item.text }}
                </a>
                <span v-else class="custom-link text-content">
                      {{ item.text }}
                </span>
            </p>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: 'SectionItem',
    props: {
        item: {
            type: Object, default: () => {
            }
        }
    },
    computed: {
        /**
         * function hasIcon
         * check if there are existing avatar for this resume
         * no params
         */
        hasIcon() {
            return !!this.item.icon
        },
    },
}
</script>

<style lang="scss" scoped>
.text-content {
  margin-left: 10px;
  line-height: 30px;
}

.custom-link {
  text-decoration: none;
  color: black;
  word-break: break-all;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;

  &:hover {
    color: #FEFAE0;
    padding: 8px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: inset 224px 0 0 0 #C4661F;
  }
}
</style>
