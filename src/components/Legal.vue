<template>
  <v-container fluid >
    <v-row >
      <v-col :xl=2         
            :lg=0
            :md=0
            :sm=0
            :xs=0>

      </v-col>
  
      <v-col
            cols="12" 
            :xl=12         
            :lg=12
            :md=12
            :sm=12
            :xs=12>
        <!--v-row justify="center" class="space-verticaly">
                <v-img style="max-width:312px" src="/img/news/covid-f.png"></v-img>
        </v-row--> 

        <v-row justify="center" class="space-verticaly">
                <h4 class="text-align-center">eas-e fica (Pty) Ltd. © Copyright 2017. All Rights Reserved.</h4>
        </v-row> 
        <v-row justify="center" >
                <h4><v-btn text @click="terms()">Terms of Use</v-btn> | <v-btn text @click="privacy()">Privacy Policy</v-btn></h4>
        </v-row>  

      </v-col>

      <v-col :xl=0         
            :lg=0
            :md=0
            :sm=0
            :xs=0>

      </v-col> 

    </v-row>

    <v-dialog v-model="pdialog" max-width="60%" max-height="80%">
      <v-card style="padding:64px">
        <Privacy/>
      </v-card>
    </v-dialog>

    <v-dialog v-model="tdialog" max-width="60%" max-height="80%">
      <v-card style="padding:64px">
        <Terms/>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
  import Privacy from './Privacy';
  import Terms from './Terms'

  export default {
    name: 'Legal',
    components: {
      Privacy, Terms
    },
    data: () => ({
      pdialog : false,
      tdialog : false
    }),
    methods: {
      privacy() {
        this.pdialog = true;
      },
      terms() {
        this.tdialog = true;
      }
    }
  }
</script>


<style scoped>
  ::-webkit-scrollbar {
    display: none;
  }

  .text-align-center {
      text-align: center;
  }

  .space-verticaly {
      margin-top: 32px;
  }

  .body-copy-margins {
      padding-left: 5%;
      padding-right: 5%;
  }
</style>
