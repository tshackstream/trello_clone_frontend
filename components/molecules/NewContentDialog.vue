<template>
  <v-dialog
    v-model="show"
    width="50%"
  >
    <template v-slot:activator="{ on }">
      <v-btn x-large outlined v-on="on">
        <v-icon>mdi-plus</v-icon>
        {{itemName}}を追加
      </v-btn>
    </template>

    <v-card>
      <validation-observer v-slot="{ invalid }">
        <v-card-title>{{itemName}}を追加</v-card-title>
        <v-divider />
        <v-card-text style="padding-top: 3vh">
          <validation-provider v-slot="{ errors }" :rules="validationRules" :name="itemName">
            <v-text-field v-model="textValue" :label="itemName" :placeholder="placeholder" />
            <p v-show="errors.length" class="help is-danger">
              {{ errors[0] }}
            </p>
          </validation-provider>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-btn
            color="primary"
            text
            :disabled="invalid"
          >
            追加
          </v-btn>
          <v-btn
            color="danger"
            text
            @click="show = false"
          >
            キャンセル
          </v-btn>
        </v-card-actions>
      </validation-observer>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'nuxt-property-decorator';

  @Component
  export default class NewContentDialog extends Vue {
    show: boolean = false;
    textValue: string = '';
    @Prop({type: String, required: true}) itemName!: string;
    @Prop({type: String, required: true}) validationRules!: string;
    @Prop({type: String}) placeholder?: string;
  }
</script>

<style scoped>

</style>
