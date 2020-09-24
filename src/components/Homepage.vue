// The web home page
<template>
    <div>
        <v-card class="description" elevation="5">
            <div class="text">
                THE BEST SOURCE FOR MOVIE AND TV SHOWS
            </div>  
        </v-card>

        <div class="container">
            <!-- Dispaly result of 5 movies and 5 tv shows -->
            <app-listresults></app-listresults> 
        </div>
    </div>
</template>

<script>
import ListOfResults from '../components/listForHome/ListOfResults.vue'
export default {
    components:{
        appListresults: ListOfResults
    },
    created(){
        this.$store.dispatch('fetchData') //Making the first api call in order to load the data on the page when the page is loading
    }
}
</script>


<style scoped>

.description{
    display: flex;
    justify-content: center;
    align-content: center;
    height: 125px;
    background-color:rgba(252,163,17,0.7);
}

.text{
    text-align: center;
    font-family: 'Roboto Slab', serif;
    font-size: 45px;
    color: black;
    width: 900px;
}

.container{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>