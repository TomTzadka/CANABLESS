import appFooter from "./app-footer.cmp.js";
export default {
    template: `
        <section>
        <div class= search-and-sort>
        <input class="search-bar" type="text" placeholder="Search..." >
        <button class="search-bar" > Sort by ABC  </button>
       
        </div>
        <div class="side-effects-container" > 
    

        <li v-if="listOfSE" v-for="SE in listOfSE" :key="SE.id">
          <button @click="addSE(SE.id)" class="side-effect">
          <span>{{SE.title}}</span>
          </button>
        </li>
      
        </div>

        <appFooter :selectedSE="selectedSE" />
        </section>
      `,
    components: {
        appFooter
    },
    data() {
        return {
            listOfSE: [
                { title: 'Altered sense of time', id: 1 },
                { title: 'Changes in mood', id: 2 },
                { title: 'Altered senses', id: 3 },
                { title: 'Nothing', id: 4 },
                { title: 'Impaired body movement', id: 5 },
                { title: 'difficulty with thinking', id: 6 },
                { title: 'impaired memory', id: 7 },
                { title: 'Abdominal pain', id: 8 },
                { title: 'Swelling', id: 9 },
                { title: 'Bad mood', id: 10 },
                { title: 'Delusions', id: 11 },
                { title: 'Sed', id: 12 },
                { title: 'Happy', id: 13 },
                { title: 'Happy', id: 14 },
                { title: 'Happy', id: 15 },
                { title: 'Happy', id: 15 },
                { title: 'Happy', id: 15 },
                { title: 'Happy', id: 15 },
                { title: 'Happy', id: 15 },
                { title: 'Happy', id: 15 },
                { title: 'Happy', id: 15 },
                { title: 'Happy', id: 15 },
                { title: 'Happy', id: 15 },
                { title: 'Happy', id: 15 },
                { title: 'Happy', id: 15 },
                { title: 'Happy', id: 15 },
                { title: 'Happy', id: 15 },
                { title: 'Happy', id: 15 },
                { title: 'Happy', id: 15 },
                { title: 'Happy', id: 15 },
            ],
            selectedSE: []
        };
    },
    methods: {

        addSE(id) {
            const currSE = this.listOfSE[id-1]
            this.selectedSE.push(currSE) // push to data
            // console.log(selectedSE);
        },
    },
};
