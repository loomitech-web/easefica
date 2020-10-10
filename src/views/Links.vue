<template>
  <v-sheet  :class="dynamicClass" >
    <LinksList/>
    <Legal/>
  </v-sheet>
</template>

<script>
// @ is an alias to /src
import LinksList from '../components/LinksList'
import Legal from '@/components/Legal.vue';

export default {
  name: 'Home',
  components: {
    LinksList,
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
