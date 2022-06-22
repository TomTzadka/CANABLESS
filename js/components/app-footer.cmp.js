export default {

  template: `
    <section class="footer" >
    <input class="free-text" type="text" placeholder="You want to elaborate? free text">
  <div class="selectedSE-container">
      <li v-if="selectedSE" v-for="SE in selectedSE" :key="SE.id">

        <button class="side-effect selected-SE-btn">
        <button class="remove-btn" @click="removeSE(SE.id)">X</button>
        <span>{{SE.title}}</span>
      </button>

      </li>
  </div>

    </section>
      `,
  props: {
    selectedSE: {
      type: Array,
    }
  },
  data() {
    return {
      // selected: []
    };
  },
  methods: {
    removeSE(id) {
      console.log(id);
      console.log(selectedSE);
      this.selectedSE.splice(id-1)
      console.log(selectedSE);
    }

  },
};
