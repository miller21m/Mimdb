<template>
    <v-card 
    max-width="200"
    class="mx-auto item">
    <v-list-item>
      <v-list-item-content class="headSecton">
        <v-list-item-title class="headline">{{item.Title}}</v-list-item-title>
        <v-list-item-subtitle style="color:white;">{{item.Year}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      :src="item.Poster"
      height="194"
    ></v-img>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Read
      </v-btn>

    </v-card-actions>
  </v-card>
</template>



<script>
export default {
    props:["item"]
    
}
</script>


<style scoped>
.item{
    margin-left: 25px;
    background-color: black;
    border: 1px solid #fca311;
}

.headline{
  font-size: 12px;
  color: white;
}

.headSecton{
  align-items: flex-start;
  color: white;
}
</style>