<template>
  <v-layout
    column
  >
    <v-container>
      <v-row>
        <new-content-dialog item-name="ボード" @saveNewContent="save">
          <template v-slot:body>
            <text-field-with-validation
                v-model="boardNameVal"
                field-name="board_name"
                item-name="ボード名"
                validation-rules="required|max:64"
                placeholder="64文字以内"
            />
          </template>
        </new-content-dialog>
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
  import {Context} from '@nuxt/types';
  import {Component, Vue} from 'nuxt-property-decorator';
  import NewContentDialog from "~/components/molecules/NewContentDialog.vue";
  import {Boards} from "~/types/boards";
  import TextFieldWithValidation from "~/components/molecules/TextFieldWithValidation.vue";

  @Component({
    components: {
      NewContentDialog,
      TextFieldWithValidation
    },
  })
  export default class PageIndex extends Vue{
    boards: Boards[] = [];
    boardNameVal: string = '';
    async asyncData(context: Context): Promise<{boards: Boards[]}> {
      const { app } = context;
      const boards = await app.$axios.$get('boards');
      return {boards: boards}
    }

    async save() {
      const now = this.$moment().format('YYYY-MM-DDTHH:mm:ssZ');

      const newBoard: Boards = {
        ID: 0,
        UserId: 1,
        Title: this.boardNameVal,
        DispOrder: 1,
        CreatedAt: now,
        UpdatedAt: now,
        DeletedAt: null
      };

      // TODO DB保存
      await this.$axios.$post('boards', newBoard, {headers: {"Content-Type": "application/json"}});

      this.boardNameVal = '';
      this.boards = await this.$axios.$get('boards');
    }
  }
</script>
