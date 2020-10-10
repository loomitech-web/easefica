<template>
  <v-container fluid class="background">
    <v-row>
        <v-col>
        </v-col>    

        <v-col :md="10">
            <v-row justify="left" >
                    <h2 class="text-align-center white-text" style="margin-top: 128px;">Links.. coming soon</h2>  
            </v-row> 
        </v-col> 
        <v-col>
        </v-col>   
    </v-row>
    <div class="curvy"></div>
  </v-container>
</template>

<script>
  export default {
    name: 'NewsList',

    data: () => ({
        services : [

        ]
    }),
    methods: {

    }
  }
</script>


<style scoped>
  ::-webkit-scrollbar {
    display: none;
  }

  .shift-up {
      margin-top: -64px;
  }

  .background {
        background-image: url('../assets/curve-background.jpg');
        background-size: 100% 612px;
        min-height: 1024px;
  }

  .preview {
      max-height: 200px;
      overflow: hidden;
      margin: 8px;
  }

</style>
