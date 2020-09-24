<template>
    <div id="listOfItems">

        <!-- Creating a list of 5 Movies -->
        <v-card elevation="24"> 
                <div>
                    <v-chip close-icon="mdi-close-outline" color="#fca311">Top Movies</v-chip>
                </div> 
                <app-item 
                v-for="item in this.$store.getters.listOfTopMoviesToSend" 
                :key="item" 
                :item="item"
                />
        </v-card>   

        <br>
        
        <!-- Creating a list of 5 TV shows -->
        <v-card elevation="2">
            <div>
                <v-chip close-icon="mdi-close-outline" color="#fca311">Top Series</v-chip>
            </div> 
            <app-item v-for="item in this.$store.getters.listOfTopSeriesToSend" :key="item" :item="item"></app-item>
        </v-card> 

    </div>
</template>


<script>
import Item from './Item.vue'
export default {
    components:{
        appItem: Item
    }
}
</script>


<style scoped>
#listOfItems{
    display: flex;
    align-items: center;
    justify-content: center;
    display: inline;
    display: inline-block;
}

.v-card{
    background-color: #212529;
}

h4{
    color: white;
}

.v-chip{
    margin: 4px;
    font-size: 20px;
}

</style>