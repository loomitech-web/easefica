<template>
  <v-sheet  :class="dynamicClass" >
    <ContactForm/>
    <Legal/>
  </v-sheet>
</template>

<script>
// @ is an alias to /src
import ContactForm from '../components/ContactForm';
import Legal from '@/components/Legal.vue';

export default {
  name: 'Home',
  components: {
    ContactForm,
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
