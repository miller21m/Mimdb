<template>
    <div id="listOfItems">
        <v-hover v-slot:default="{ hover }">

            <v-card class="mx-auto" 
            elevation="24" 
            max-width="200px" 
            @mouseover="searcDetails(item.imdbID)"
            @mouseleave="cleanDetails"
            >
            
            <!-- When the user is hover the movie/tv show title the image (poster) display the plot -->
                <v-img
                :src='item.Poster'
                height="150px">

                <v-expand-transition>
                <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                style="height: 100%; background-color: rgba(0,0,0,0.7);"
                >
                <p class="plot">{{selected.Plot}}</p>
                <br>
                <p class="title"> <v-icon class="title" small>mdi-star</v-icon>{{selected.imdbRating}}</p>
                </div>
                </v-expand-transition>
                </v-img>

                <v-card-title class="title">
                <p>{{item.Title}}</p>
                </v-card-title>

            </v-card>
        </v-hover>
    </div>
</template>

<script>

export default {
    props:['item'], //The item that we are passing from listOfResults
    data(){
        return{
            dialog: false,
            selected: null
        
        }
    },
        methods:{
        searcDetails(imdbID){
            console.log(imdbID);

            this.$store.dispatch('fetchItemByID', imdbID)//Dispatch the action from the store
            this.selected = this.$store.getters.getSelectedItem //Accept the data from the selected (hovered) item 
        },
        cleanDetails(){
            this.$store.state.selectedItem= null //clean (close) the data
        }
    }
    
}
</script>


<style scoped>
#listOfItems{
    display: inline;
    display: inline-block;
    margin: 4px;
    background-color: black;
    border-radius: 5%;
}

.title{
    text-align: center;
    color: white;
    
}

.plot{
    font-size: 13px;
    text-align: center;
    color: white;
}

.mx-auto{
    border: 1px solid #fca311;
    max-width: 270px;
    height: 270px;
    margin: 2px;
    background-color: black;
}


.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  /* position: absolute; */
  width: 200px;
}

</style>