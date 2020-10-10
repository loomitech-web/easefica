<template>
  <v-sheet  :class="dynamicClass" >

    
    <SoftwareBanner />  
    <WhatWeDo />
    <HowItWorks />
    <Legal />
  </v-sheet>
</template>

<script>
// @ is an alias to /src
import WhatWeDo from '@/components/WhatWeDo.vue';
import SoftwareBanner from '@/components/SoftwareBanner.vue';
import HowItWorks from '@/components/HowItWorks.vue';
import Legal from '@/components/Legal.vue';

export default {
  name: 'Home',
  components: {
    WhatWeDo,
    SoftwareBanner,
    HowItWorks,
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
