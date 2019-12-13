<template>
  <v-card>
    <v-card-title>{{title}}</v-card-title>
    <card title="test"/>
  </v-card>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'nuxt-property-decorator';
  import Card from "~/components/molecules/Card.vue";

  @Component({
    components:{
      Card
    }
  })
  export default class Column extends Vue {
    @Prop({type: String, required: true}) title!: string;
  }
</script>

<style scoped>

</style>
