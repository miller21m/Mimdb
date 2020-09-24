<template>
    <div>
        <!-- List of movies for the dashbord -->
        <div class="listfordashbord">
            <ul v-for="item in this.$store.getters.listOfTopMoviesToSend" :key="item">
                <app-item-for-list :item="item"></app-item-for-list>
            </ul>
        </div>

        <!-- List of tv shows for the dashbord -->
        <div class="listfordashbord">
            <ul v-for="item in this.$store.getters.listOfTopSeriesToSend" :key="item">
                <app-item-for-list :item="item"></app-item-for-list>
            </ul>
        </div>
    </div>
</template>



<script>
import ItemForList from './ItemForList.vue'
export default {
    components:{
        appItemForList: ItemForList
    }
    
}
</script>


<style scoped>
.listfordashbord{
    margin-left: 10px;
    margin-right: 10px;
    display: inline;
    display: flex;
    flex-direction: row;
    padding-left: 50px;
    padding-bottom: 20px;
    background: transparent;
}

</style>