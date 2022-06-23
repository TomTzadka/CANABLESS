import sideEffectsApp from "./components/side-effects-app.cmp.js";
import appHeader from "./components/app-header.cmp.js";

const options = {
  template: `
    <appHeader :userName="userName"/>
    <sideEffectsApp />
    `,
  components: {
    sideEffectsApp,
    appHeader,
   
  },
  data() {
    return {
      userName: 'Tom tzadka',


    }
  }
};

const app = Vue.createApp(options);
app.mount("#app");
