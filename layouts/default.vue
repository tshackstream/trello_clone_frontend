<template>
  <v-app dark>
    <v-content>
      <v-app-bar app>
        <v-container>
          <v-row justify="end">
            <v-col>
              trello_clone
            </v-col>
            <v-col cols="3">
              <v-card v-show="errorStatus.isActive" class="error">
                <span>{{ errorStatus.message }}</span>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { mapState } from 'vuex'

  @Component({
    computed: {
      ...mapState(['errorStatus'])
    }
  })
  export default class extends Vue {

  }
</script>
