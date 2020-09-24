<template>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >

      <v-toolbar-title>MIMDB</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">MIMDB</v-tab>
          <v-tab to="/Dashbord">EXPLORE</v-tab>
        </v-tabs>
      </template>



      <v-menu
        left
        bottom>

      </v-menu>
    </v-app-bar>





</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>