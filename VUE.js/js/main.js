import sideEffectsApp from "./components/side-effects-app.cmp.js";
import appHeader from "./components/app-header.cmp.js";
// import appFooter from "./components/app-footer.cmp.js";

const options = {
  template: `
    <appHeader :userName="userName"/>
    <sideEffectsApp />
    
    `
  ,
  components: {
    sideEffectsApp,
    appHeader,
    // appFooter,
  },
  data() {
    return {
      userName: 'Tom tzadka',


    }
  }
};

const app = Vue.createApp(options);
app.mount("#app");
