<template>
  <v-sheet  :class="dynamicClass" >
    <ServiceList/>
    <Legal/>
  </v-sheet>
</template>

<script>
// @ is an alias to /src
import ServiceList from '../components/ServiceList';
import Legal from '@/components/Legal.vue';

export default {
  name: 'Home',
  components: {
    ServiceList,
    Legal
  },
  data : ()=>({
    dynamicClass : 'sheet'
  }),
  mounted() {
    
    setTimeout(()=>{
      this.dynamicClass = 'sheet fadein';
    })
    
  }
}
</script>

<style scoped>

</style>
