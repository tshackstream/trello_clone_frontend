// cf. https://qiita.com/yoshinbo/items/1400f6ff181bd9697f47

import {ActionTree, MutationTree} from "vuex";

interface ErrorStatusStore {
  message: string,
  isActive: boolean
}

export const state = (): ErrorStatusStore => ({
  message: '',
  isActive: false
});

export const mutations: MutationTree<ErrorStatusStore> = {
  setMessage(state: ErrorStatusStore, value: string) {
    state.message = value
  },
  activate(state: ErrorStatusStore) {
    state.isActive = true;
  },
  deactivate(state: ErrorStatusStore) {
    state.isActive = false;
  }
};

export const actions: ActionTree<ErrorStatusStore, ErrorStatusStore> = {
  async showError({ commit }, message: string) {
    commit('setMessage', message);
    commit('activate');
    await this.$timeUtils.sleep(3000);
    commit('deactivate');
    commit('setMessage', '');
  },
};
