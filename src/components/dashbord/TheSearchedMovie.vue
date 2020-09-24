<template>
<div class="selectedMovie" v-if="this.$store.state.storeSearchedResult">
    <v-icon small class="close" @click="closeDetail">mdi-close-outline</v-icon>

    <v-card max-width="450px" class="styleCard">
        <v-row>
        <v-col cols="6">
            <v-card>
            <v-img  :src="theItem.Poster"></v-img>
            </v-card>
        </v-col>

        <v-col>
            <div class="infoCard">
            <div style="{align-content: center; font-weight: bold;}">{{theItem.Title}}</div>
            <br>
            <div>Year: {{theItem.Year}}</div>
            <br>
             <div>{{theItem.Plot}}</div>
             <br>
             <div>{{theItem.imdbRating}}</div>
            </div> 
        </v-col>
        </v-row>
    </v-card>
</div>
</template>

<script>
export default {
    data(){
        return{
            item: this.$store.getters.getSearchedTitle
        }
    },
    computed:{
        theItem(){
            return this.$store.getters.getSearchedTitle;
        }
 
    },
    methods:{
        closeDetail(){
            this.$store.state.storeSearchedResult = false;
        }
    }

    
}
</script>

<style scoped>
.selectedMovie{
    position: fixed;
    top: 35%;
    left: 40%;
    margin-top: -50px;
    margin-left: -100px;
}

.close{
    margin-left: auto;
}

.styleCard{
    border: 1px solid #fca311;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color:white;
    padding: 5px;
    background-color: black;
}


</style>
