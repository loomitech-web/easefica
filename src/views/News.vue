<template>

  <v-sheet  :class="dynamicClass" >
    
    <NewsList />
    <Legal/>
  </v-sheet>

</template>

<script>
// @ is an alias to /src'
import NewsList from '../components/NewsList';
import Legal from '@/components/Legal.vue';

export default {
  name: 'News',
  components: {
    NewsList,
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
