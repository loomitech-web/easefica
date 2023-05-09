<template>
  <v-container fluid class="background">
    <div class="curvy"></div>
    <v-row >
        <v-col    
            :xl=1         
            :lg=1
            :md=1
            :sm=0
            :xs=0>
        </v-col>  

        <v-col
            cols="12"
            :xl=5
            :lg=5
            :md=5
            :sm=12
            :xs=12
            align="center"
            justify="center"
        >
            <div  class="video-content">
              <img class="video" src="../assets/demo.gif"/>


              <div class="video-overlay">
              </div>  
            </div>  
        
        </v-col>

        <v-col 
            class="white-circles"
            cols="12"
            :xl=5
            :lg=5
            :md=5
            :sm=12
            :xs=12
            >
            <v-row justify="center" align="center" class="header-text" >
                  <Roller :text="headerScroller" :wordWrap="15" :transition="0.5" :charList="charList"></Roller> 
            </v-row>    

            <v-row>
                <h4 class="text">
                The Financial Intelligence Centre Act is the prime tool for South Africans to fight money launderers. 
                <br><br>In following its directions, you join an international initiative against organised crime such as terrorism, drug and weapons smuggling, poaching and child trafficking, and are safeguarding your livelihood against fraudsters and other criminals. 
                <br><br> Our eas-e Fica™ automated anti-money laundering software and other services allow you to join the movement effortlessly.   
                <br><br> Contact us to help you – it’s the right thing to do.
                </h4>    
            </v-row>   

            <v-row justify="center">
                <v-btn rounded color="accent" @click="learnMore = true" dark>Learn More</v-btn>   
            </v-row>   

        </v-col> 

        

        <v-col             
            :xl=1         
            :lg=1
            :md=1
            :sm=0
            :xs=0 >
        </v-col>     
    </v-row>
    
    <v-dialog v-model="learnMore"  max-width="70%" >
      <v-card>
        <div itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="uploadDate" content="Thu Oct 15 2020 13:33:00 GMT+0200 (South Africa Standard Time)"/><meta itemprop="name" content="Learn More"/><meta itemprop="duration" content="PT32.598S" /><meta itemprop="thumbnailUrl" content="https://content.jwplatform.com/thumbs/2nsQYbLo-1920.jpg"/><meta itemprop="contentUrl" content="https://content.jwplatform.com/videos/2nsQYbLo-TAqnqhxs.mp4"/><div style="position:relative; overflow:hidden; padding-bottom:56.25%"> <iframe src="https://cdn.jwplayer.com/players/2nsQYbLo-nBGDpa1v.html" width="100%" height="100%" frameborder="0" scrolling="auto" title="Learn More" style="position:absolute;" allowfullscreen></iframe> </div></div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import Roller from "vue-roller";

  export default {
    name: 'SoftwareBanner',
    components : {
      Roller
    },
    data: () => ({
      learnMore: false,
      headerScroller : 'helping you do the right thing',
      headerScrollerSource : ' helping you do the right thing',
      charList : [],
      charListStart : [],
      charListEnd : ['a', 'b', 'c','d','e','f','g','h','i','j','y'],
      index : 0
    }),
    methods: {
      onLearnMore: function() {
        this.learnMore = true;
      },
      step: function() {
        let words = this.headerScrollerSource.split(' ');
        this.headerScroller = words[this.index];
        setTimeout(()=>{
          if(this.index < (words.length-1)) {
            this.index++;
            console.log('stepping');
            this.step();
          } else {
            this.charList = this.charListEnd;
            this.headerScroller = this.headerScrollerSource;
          }
        },500);
      }
    },
    mounted() {
      this.charList = this.charListStart;
      this.step();
    }
  }
</script>


<style >

  .background {
        background-image: url('../assets/header-background.jpg');
        background-size: 100% 100%;
        min-height: 512px;
        position: relative;
  }

  .curvy {
    background-image: url('../assets/curve.png');
    background-size: 100% 100%;
    background-repeat: 0px;
    position:absolute;
    bottom:-2px;
    left:0px;
    height:10%;
    width:100%;
  }

  .monitor {

    background-image: url('../assets/screenshot.png');
    background-size: 100% 100%;
    height:0;
    width:100%;
    z-index: 5;
    height: 0;
    padding-top: calc(892 / 1088 * 100%);
  }

  .rollerBlock {
    padding-left: 0px!important;
  }

  .video {
    position: relative;
    width:96%;
    margin-top:4%;
    margin-left:1%;
    padding:0px;
  }

  .video-overlay {
    position: absolute;
    width:100%;
    height:125%;
    top:0px;
    background-image: url('../assets/pngfuel.com.png');
    background-size: 100% 100%;
  }

  .video-content {
    width:100%;
    position: relative;
    margin-bottom: 96px;
  }

ul {
    padding-left: 5px!important;
}

  .header-text {
    text-align: center;
    color: #fff;
    text-transform:capitalize!important;
    font-size: 40px;
    min-height: 115px;
    height:115px;
  }

  .text {
    text-align: center;
    width: 100%;
    color: #fff;
    margin: 0 auto 25px;
    position: relative;
    margin: 32px auto;
    margin-top: 16px;
    margin-bottom: 48px;
    width: 80%;
  }


  .white-circles {
    background: url(../assets/white-circle.png) center no-repeat;
    background-size: 60%;
  }

  @media screen and (max-width:1200px) {
    .curvy { 
      height: 64px;
    }

    .header-text {

    }
  }

  @media screen and (max-width:900px) {
    .curvy { 
      height: 24px;
    }

    .header-text {

    }

    .monitor {
      height:0;
      width:80%;
      z-index: 5;
      height: 0;
      padding-top: calc(892 / 1088 * 80%);
    }
  }

  @media screen and (max-width:600px) {
    .curvy { 
      height: 24px;
    }

    .header-text {
      min-height: 96px;
      height:108px;
      padding-top:12px;
      font-size: 32px;
    }

    .white-circles {
        background: url(../assets/white-circle.png) center no-repeat;
        background-size: 100%;
    }

    .monitor {
      height:0;
      width:80%;
      z-index: 5;
      height: 0;
      padding-top: calc(892 / 1088 * 80%);
    }

      .video-content {
        width:100%;
        position: relative;
        margin-bottom: 32px;
      }
  }
</style>
