export default {

  template: `
    <section class="footer" >
    <input class="free-text" type="text" v-model="newSE.title" placeholder="You want to elaborate? type">
    <button class="add-btn" @click="addNewSE()" >Add</button>
    <button class="add-btn confirm" @click="saveToLocalStorage()" >Confirm</button>
  <div class="selectedSE-container">
      <li v-if="selectedSE" v-for="SE in selectedSE" :key="SE.id">
        <button class="side-effect selected-SE-btn">
          <button class="remove-btn" @click="removeSE(SE)">X</button>
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
      newSE: {title: ''}
      // selected: []
    };
  },
  methods: {
    saveToLocalStorage(){

      localStorage.setItem("userSE", JSON.stringify(this.selectedSE));
    },
    addNewSE(){
      console.log(this.selectedSE);
      this.selectedSE.push(this.newSE)
      
    },
    removeSE(element) {
      const index = this.selectedSE.indexOf(element);
      this.selectedSE.splice(index, 1);
        
      
    }

  },
};
