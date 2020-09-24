<template>

  <div style="background-color: grey;">
    <app-header></app-header>

    <router-view style=" margin-top: 5px;"></router-view>

    <footer class="footer">
      <p>Linkedin:<a 
        href="https://www.linkedin.com/in/michaelmillerm?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm7VPh1vPSACEwSn%2B85cK5g%3D%3D">
        Michael_Miller
        </a>
      </p>
    </footer>
    
  </div>

</template>

<script>

import Header from './components/header/Header.vue'
export default {
  components:{
    appHeader: Header,

  }
  
}
</script>


<style scoped>
.footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}

</style>