import appFooter from "./app-footer.cmp.js";
export default {
    template: `
        <section>
        <div class= search-and-sort>
        <input class="search-bar" v-model="search" type="text" placeholder="Search..." >
        <button class="search-bar sort" > Sort by ABC  </button>
       
        </div>
        <div class="side-effects-container" > 
    

        <li v-if="listOfSE" v-for="SE in filteredItems() " :class="{ active: selectedSE.includes(SE) }" :key="SE.id">
          <button @click="addAndRemove(SE)" class="side-effect">
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
            search:'',
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
            ,
            
        };
    },
    methods: {
        filteredItems() {
            return this.listOfSE.filter(sideEffect => {
               return sideEffect.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            })
          },
          
        addAndRemove(element) {

            const index = this.selectedSE.indexOf(element);
            if (index > -1) {
                this.selectedSE.splice(index, 1); // 2nd parameter means remove one item only
            }else this.selectedSE.push(element) // push to data
            
        },
    },
};
