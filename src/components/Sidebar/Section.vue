<template>
    <div class="mb-4 pa-2">
        <div class="title mb-3 p-2 font-weight-thin">
            {{ options.title }}
        </div>
        <slot v-if="$slots.default"/>
        <template v-else-if="$slots.items">
            <slot name="items" :items="options.items"/>
        </template>
        <template v-else-if="$slots.item">
            <slot v-for="(item) in options.items" name="item" :item="item"/>
        </template>
        <template v-else>
            <section-item v-for="(item, index) in options.items" :key="index" :item="item"/>
        </template>
    </div>
</template>

<script>
import SectionItem from "@/components/Sidebar/SectionItem.vue";

export default {
    name: 'SidebarSection',
    components: {SectionItem},
    props: {
        options: {
            type: Object, default: () => {
            }
        }
    },
}
</script>

<style scoped>
.title {
    border-bottom: 2px #C4661F solid;
    font-weight: 300;
    line-height: 1.5 !important;
    letter-spacing: 0.2em !important;
    margin-left: 5px;
}
</style>
