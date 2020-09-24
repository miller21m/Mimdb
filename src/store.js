import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        listTopMovies: null,//Store 5 results for the movie list
        listTopSeries: null,//Store 5 results for the tv show list
        selectedItem: null,//Store the selected item when the user is hover the item
        searchedTerm: null,
        storeSearchedResult: false//The result for the searched term
    },
    mutations:{
        storeListOfMovie(state, data){
            state.listTopMovies = data
            console.log(this.state.listTopMovies);
        },
        storeListOfSeries(state, data){
            state.listTopSeries = data
            //console.log(this.state.listTopSeries);
        },
        storeSelectedItem(state,data){
            state.selectedItem = data
            console.log(this.state.selectedItem);
        },
        searchedResult(state, data){
            state.storeSearchedResult = data
        }

    },
    actions:{
        fetchData({commit}){//Featch data when we are loading the web page
            console.log('Start fetchData');
            axios.get('/?apikey=19d96924',{//get list of movies
                params:{
                    s:'The of',
                    y:'2019',
                    type:'movie',
                    page:10
                }
            })
            .then(res =>{
                //console.log(res.data.Search);
                const data = res.data.Search.slice(0,5)
                commit('storeListOfMovie',data)
            })
            .catch(error  => console.log(error))


            axios.get('/?apikey=19d96924', {//get list of tv shows
                params:{
                    s:'the of',
                    y:'2020',
                    type:'series',
                }
            } )
            .then(res =>{
                //console.log(res.data.Search);
                const data = res.data.Search.slice(0,5)
                commit('storeListOfSeries',data)
            })
            .catch(error  => console.log(error))
        },

        fetchItemByID({commit},id){
            //console.log(id);
            axios.get('/?apikey=19d96924',{
                params:{
                    i: id
                }
            })
            .then(res => {
                //console.log(res.data);
                commit('storeSelectedItem', res.data)
            })
        },

        fetchItemByTitle({commit}){//Featching result by the title
            console.log(this.state.searchedTerm);
            axios.get('/?apikey=19d96924',{
                params:{
                    s:this.state.searchedTerm
                }
            })
            .then(res => {
                axios.get('/?apikey=19d96924',{
                    params:{
                        i: res.data.Search[0].imdbID
                    }
                })
                .then(res => {
                    console.log(res.data);
                    commit('searchedResult', res.data)
                });
                
                
                
                console.log(res.data.Search[0].imdbID)});

        }

    },
    getters:{
        listOfTopMoviesToSend(state){
            return state.listTopMovies
        },
        listOfTopSeriesToSend(state){
            return state.listTopSeries
        },
        getSelectedItem(state){
            return state.selectedItem
        },
        getSearchedTitle(state){
            console.log("this is from getSearchedTitle:" + state.storeSearchedResult);
            return state.storeSearchedResult
        }
    }
})