<template>
  <v-layout
    column
  >
    <v-container>
      <v-row>
        <v-btn large outlined>
          <v-icon>mdi-plus</v-icon>
          ボードを追加
        </v-btn>
      </v-row>
      <v-row>
        <v-col
          v-for="n in 25"
          :key="n"
          cols="auto"
        >
          <v-card
            height="100"
            width="100"
          >
            <v-card-title>{{ n }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script lang="ts">
  import { Context } from '@nuxt/types';
  import {Component, Vue} from 'nuxt-property-decorator';
  import Column from "~/components/organisms/Column.vue";

  @Component({
    components: {
      Column
    },
  })
  export default class PageIndex extends Vue{
    async asyncData(context: Context): Promise<void> {
      const { app } = context;

    }
  }
</script>
