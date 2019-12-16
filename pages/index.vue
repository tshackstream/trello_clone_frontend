<template>
  <v-layout
    column
  >
    <v-container>
      <v-row>
        <new-content-dialog item-name="ボード名" placeholder="64文字以内" validation-rules="required|max:64" />
      </v-row>
      <v-row>
        <v-col
          v-for="board in boards"
          :key="board.ID"
          cols="auto"
        >
          <v-card min-width="250">
            <v-card-title>{{ board.Title }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script lang="ts">
  import { Context } from '@nuxt/types';
  import {Component, Vue} from 'nuxt-property-decorator';
  import NewContentDialog from "~/components/molecules/NewContentDialog.vue";
  import {Boards} from "~/types/boards";

  @Component({
    components: {
      NewContentDialog
    },
  })
  export default class PageIndex extends Vue{
    boards: Boards[] = [];
    async asyncData(context: Context): Promise<{boards: Boards[]}> {
      const { app } = context;
      const boards = await app.$axios.$get('/api/v1/boards');
      return {boards: boards}
    }
  }
</script>
