import appFooter from "./app-footer.cmp.js";
export default {
    template: `
        <section>
        <div class= search-and-sort>
        <input class="search-bar" v-model="search" type="text" placeholder="🔎 Search..." >
        
       
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
                { title: 'Constipation', id: 13 },
                { title: 'Diarrhea', id: 14 },
                { title: 'Dizziness', id: 15 },
                { title: 'Drowsiness', id: 16 },
                { title: 'Dry mouth', id: 18 },
                { title: 'Headache', id: 19 },
                { title: 'Insomnia', id: 20 },
                { title: 'Happy', id: 21 },
                { title: 'Happy', id: 22 },
                { title: 'Happy', id: 23 },
                { title: 'Happy', id: 24 },
                { title: 'Happy', id: 25 },
                { title: 'Happy', id: 26 },
                { title: 'Happy', id: 27 },
                { title: 'Happy', id: 28 },
                { title: 'Happy', id: 29 },
                { title: 'Happy', id: 30 },
                { title: 'Happy', id: 31 },
                { title: 'Happy', id: 32 },
                { title: 'Happy', id: 33 },
                { title: 'Happy', id: 34 },
                { title: 'Happy', id: 35 },
                { title: 'Happy', id: 36 },
                { title: 'Happy', id: 37 },
                { title: 'Happy', id: 38 },
                { title: 'Happy', id: 39 },
                { title: 'Happy', id: 40 },
   
                
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
