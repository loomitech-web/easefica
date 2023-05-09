<template>
  <v-container fluid >
    <v-row style="height:128px"> 

    </v-row>  
    <v-row >
      <v-col :xl=2         
            :lg=2
            :md=2
            :sm=0
            :xs=0>

      </v-col>
  
      <v-col
            cols="12" 
            :xl=8         
            :lg=8
            :md=8
            :sm=12
            :xs=12>
        <v-row justify="center" >
                <h2 class="text-align-center">WHAT WE DO</h2>  
        </v-row> 


        <v-row justify="center" class="space-verticaly">
                <h4 class="text-align-center">EAS-E FICA MAKES CRIME PREVENTION AND FICA COMPLIANCE...</h4>
        </v-row> 
        <v-row justify="center" class="space-verticaly" style="position:relative">
                
                  <div class="dashed-line"></div>

                  <v-btn class="cyan lighten-2 info-btn"  fab dark large width="128px" height="128px">
                        Seamless
                  </v-btn>

                  <v-btn class="purple lighten-2 info-btn" fab dark large width="128px" height="128px">
                        Hassle<br>Free
                  </v-btn>

                  <v-btn class="red lighten-2 info-btn" fab dark large width="128px" height="128px">
                        Easy to<br>maintain
                  </v-btn>

                  <v-btn class="green lighten-2 info-btn" fab dark large width="128px" height="128px">
                        Pay<br>for itself
                  </v-btn>
                
                
        </v-row>  
        
        <v-row justify="center" class="space-verticaly body-copy-margins" style="margin-bottom:32px">
            <p>Its all about <b>Customer Due Diligence</b>: The process whereby you must assess, based on prescribed criteria, the likelihood that a client might be engaged in money laundering activities. Moreover, you must maintain all the data on which your risk assessment is based, if that data is subject to change.</p>
        </v-row>

        <v-row justify="center" class="space-verticaly body-copy-margins" style="margin-bottom:64px; text-align:center">
            <h4>We <b>automate</b> this entire procedure for you so you can <b>rest assured</b> that there is one <b>less risk</b> to worry about.</h4>
        </v-row>

      </v-col>

      <v-col :xl=2         
            :lg=2
            :md=2
            :sm=0
            :xs=0>

      </v-col> 

    </v-row>

    <v-row style="height:64px"> 

    </v-row>  
  </v-container>
</template>

<script>
  export default {
    name: 'WhatWeDo',

    data: () => ({

    }),
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

  .info-btn {
    margin:16px;
  }

  .dashed-line {
    position:absolute;
    top:0px;
    left:20%;
    height:50%;
    width:60%;
    border-style:none;
    border-bottom-style: dashed;
    border-width:1px;
    border-color:#a6a6a6;
  }

  @media screen and (max-width:600px) {

  }

</style>
