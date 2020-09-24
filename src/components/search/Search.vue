<template>
    <div class="searchbar container">
            <v-row>
            <v-text-field 
            v-model="search"
            label="Search"
            required
            ></v-text-field>
            <v-btn @click="searchTitle"><v-icon small>mdi-magnify</v-icon></v-btn>
            </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            search: null
        }
    },
    methods:{
        searchTitle(){
            this.$store.state.searchedTerm = this.search;
           this.$store.dispatch('fetchItemByTitle')
        }
    }
}
</script>



<style scoped>
.searchbar{
    align-content: center;
    width: 500px;
}

</style>