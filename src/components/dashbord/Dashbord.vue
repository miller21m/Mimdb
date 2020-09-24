The dashbord of the searching page where the user can search for the movie/tv show
<template>
        <div>
            <app-search></app-search>
            <!-- Check if the user is searching for any item and if there is a result to display hide the rest info from the page -->
            <app-list v-if="!this.$store.state.storeSearchedResult"></app-list>
            <app-the-movie></app-the-movie>
        </div>
</template>

<script>
import SearchBar from '../search/Search.vue'
import List from './listForDashbord/List.vue'
import TheSearchedMovie from './TheSearchedMovie.vue'
export default {
    components:{
        appSearch: SearchBar,
        appList: List,
       appTheMovie: TheSearchedMovie
    },
    created(){
        window.addEventListener('beforeunload', this.$store.state.storeSearchedResult=false)//When the user is leaving the page clean the result of the search
    }
    
}
</script>


<style scoped>
.div{
    position: fixed;
    overflow: auto;
    height: 100%;
}
</style>