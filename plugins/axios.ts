import { Plugin } from '@nuxt/types';

const axiosPlugin: Plugin = ({ $axios, store }): void => {
  $axios.onError(error => {
    if (error.response == null) { return }
    store.dispatch('errorStatus/showError', '通信エラーが発生しました。');
  })
};

export default axiosPlugin;