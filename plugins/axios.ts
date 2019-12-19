import { Plugin, Context } from '@nuxt/types';

const axiosPlugin: Plugin = (ctx: Context): void => {
  const { $axios, store } = ctx;
  $axios.onError(error => {
    if (error.response == null) { return }
    store.dispatch('errorStatus/showError', '通信エラーが発生しました。');
  })
};

export default axiosPlugin;
