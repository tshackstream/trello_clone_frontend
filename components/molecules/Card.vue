<template>
  <v-card shaped>
    <v-card-title>{{title}}</v-card-title>
    <v-card-text>{{content}}</v-card-text>
  </v-card>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'nuxt-property-decorator';

  @Component
  export default class Card extends Vue {
    @Prop({type: String, required: true}) title!: string;
    @Prop({type: String}) content?: string
  }
</script>

<style scoped>

</style>
