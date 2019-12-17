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
      <validation-observer ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="submit">
        <v-card-title>{{itemName}}を追加</v-card-title>
        <v-divider />
        <v-card-text style="padding-top: 3vh">
          <slot name="body"/>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-btn
            color="primary"
            type="submit"
            text
            :disabled="invalid"
          >
            追加
          </v-btn>
          <v-btn
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
  import {ValidationObserver} from "~/node_modules/vee-validate";
  @Component
  export default class NewContentDialog extends Vue {
    show: boolean = false;
    @Prop({type: String, required: true}) itemName!: string;

    // cf. https://logaretm.github.io/vee-validate/guide/forms.html#programmatic-access-with-refs
    $refs!: {
      observer: InstanceType<typeof ValidationObserver>
    };

    mounted() {
      this.$refs.observer;
    }

    // cf. https://www.virment.com/how-to-use-veevalidate-nuxtjs/
    async submit() {
      await this.$emit('saveNewContent');
      this.show = false;
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      });
    }
  }
</script>

<style scoped>

</style>
