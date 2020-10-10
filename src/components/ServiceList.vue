<template>
  <v-container fluid class="background">
    <v-row>
        <v-col :xl=3         
            :lg="2"
            :md="1"
            :sm="0"
            :xs=0>
        </v-col>    

        <v-col cols="12" :xs=12 :sm=12 :md=10 :lg=8 :xl=6  >
            <v-row justify="center" >
              <div class="services-list">
                <v-tabs
                  v-model="tab"
                  background-color="transparent"
                  dark
                  icons-and-text
                  fixed-tabs
                  hide-slider
                  height="128px"
                >
                  <v-tab
                    v-for="item in tabs"
                    :key="item.tab"
                    
                  >
                    {{ item.tab }}
                    <v-btn :class="item.color" fab dark large style="margin-bottom:24px">
                      <v-icon dark>{{ item.icon }}</v-icon>
                    </v-btn>  
                  </v-tab>
                </v-tabs>

                <v-tabs-items style="background:transparent;margin-top:32px" v-model="tab">
                  <v-tab-item
                    v-for="item in tabs"
                    :key="item.tab"
                    class="service-item-list"
                  >
                    <v-card elevation="10" v-for="service in item.services" v-bind:key="service.title" style="margin-bottom:16px">
                       <v-list-item three-line>
                        <v-list-item-avatar
   
                          size="196"
                        >
                          <v-img :src="service.image"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <h4 class="overline">{{ service.type }}</h4>
                          <div class="headline"><v-img style="float:left;margin-right:8px" width="128px" v-if="service.logo != null" :src="service.logo"></v-img><div style="float:left"><h2>{{ service.title }}</h2></div></div>
                          <div class="service-text" v-html="service.description"></div>
                        </v-list-item-content>
                      </v-list-item>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text color="accent" v-if="service.detail != null" @click="details(service)">Details</v-btn>
                        <v-btn text color="accent" v-if="service.form != null" @click="showForm(service)">Enrol</v-btn>
                        <v-btn to="/contact" text color="accent">Inquire</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>

              </div>
            </v-row> 
        </v-col> 
        <v-col :xl=3         
            :lg=2
            :md=1
            :sm="0"
            :xs=0>
        </v-col>   
    </v-row>
   
    <v-dialog v-model="detailDialog" scrollable max-width="60%" max-height="80%">
      <v-card >
        <v-card-text  style="padding:0px!important">
        <CourseDetail/>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
          <v-btn color="primary darken-1" text @click="detailDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

      <v-dialog v-model="formDialog" scrollable max-width="60%" max-height="80%">
        <TrainingApplicationForm/>
      </v-dialog>

    <v-dialog v-model="videoDialog" scrollable  max-width="80%" max-height="640px">
      <v-card>
        <v-card-text style="padding:0px!important">
        <div itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="uploadDate" content="Tue Sep 15 2020 12:32:26 GMT+0200 (South Africa Standard Time)"/><meta itemprop="name" content="Fica short course motivation"/><meta itemprop="description" content="A description of our short course content on anti-money laundering legislation in South Africa."/><meta itemprop="duration" content="PT1M28S" /><meta itemprop="thumbnailUrl" content="https://content.jwplatform.com/thumbs/WIu9XovL-1280.jpg"/><meta itemprop="contentUrl" content="https://content.jwplatform.com/videos/WIu9XovL-b0xTtoQs.mp4"/><div style="position:relative; overflow:hidden; padding-bottom:56.25%"> <iframe src="https://cdn.jwplayer.com/players/WIu9XovL-nBGDpa1v.html" width="100%" height="100%" frameborder="0" scrolling="auto" title="Fica short course motivation" style="position:absolute;" allowfullscreen></iframe> </div></div>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
          <v-btn color="primary darken-1" text @click="videoDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import CourseDetail from './CourseDetail'
  import TrainingApplicationForm from './TrainingApplicationForm.vue';

  export default {
    name: 'ServiceList',
    components : {
      CourseDetail,
      TrainingApplicationForm
    },
    data: () => ({
        tab: null,
        detailDialog : false,
        videoDialog : false,
        formDialog : false,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tabs : [
          {
            icon : 'mdi-application-import',
            color : 'purple lighten-2',
            tab : 'software',
            services : [
              {
                image : '/img/services/screenshot.png',
                logo : '/img/services/app-logo.png',
                title : 'Administrator',
                type: 'Software',
                description : 'We assist you with a subscription to our fully automated, web-based Customer Due Diligence solution designed to save you time and effort and to substantially limit your exposure to regulatory risk of non-compliance. Our fees are transaction based and calculated on the number of clients whose risk reports we create and maintain for you on our system. We do not charge any subscription fees or user fees so our solution is ideal for smaller and medium businesses who don’t want to incur costs associated with growth in staff numbers.'
              },
              {
                image : '/img/services/realtime-api.png',
                logo : '/img/services/app-logo.png',
                title : 'API',
                type: 'Software',
                description : 'Our API allows external applications to automate client onboarding and risk scoring tasks. Our API consists of a set of fully documented RESTfull webservices'
              }
            ]
          }
          ,
                    {
            icon : 'mdi-account-clock',
            color : 'cyan lighten-1',
            tab : 'consulting',
            services : [
              {
                image : '/img/services/aml.jpg',
                title : 'AML IMPLEMENTATION AND DRAFTING',
                type: 'Consulting',
                description : 'Drawing on anti-money laundering management experience since inception of the FICA in 2004 and risk management and compliance experience since 1985, we offer a full range of consulting and review services designed to assist new and current accountable institutions alike with the implementation of a complete anti-money laundering regime. Included here is the drafting of policy and procedure documentation, determination of appropriate risk assessment procedures and registration with the regulator. We integrate the new compliance regime with extant operational procedures to limit business disruption and the risk of fines and penalties. For this service we charge a time-based fee.'
              },
              {
                image : '/img/services/monitor.jpg',
                title : 'COMPLIANCE MONITORING',
                type: 'Consulting',
                description : 'The Fica prescribes that accountable institutions must have a monitoring regime to allow them to constantly assess risk and compliance with all requirements. This includes the re-verification of all data subject to change. We offer a range of monitoring services to provide factual findings on the level of compliance based on your internal requirements. Our work is designed to give you peace of mind that your internal procedures are adhered to by all staff and that all client data is maintained in accordance with the law. For this service we charge either a monthly recurring fee or a time-based fee.  '
              },
              {
                image : '/img/services/dispute.jpg',
                title : 'DISPUTE RESOLUTION',
                type: 'Consulting',
                description : 'Fines and penalties under the FICA are severe and go as high as R100 million. Drawing on our experience, we assist you in formulating responses to regulators where you are faced with the prospect of a fine. Contact us here if you think you are in trouble.  '
              }
            ]
          },
                    {
            icon : 'mdi-account-tie-voice',
            color : 'green lighten-2',
            tab : 'training',
            services : [
              {
                image : '/img/services/learn.jpg',
                title : 'Training',
                description : '<p>The Fica requires that all client-facing staff must have a working knowledge of the Act as well as your internal Risk Management and Compliance Program. We offer bespoke live webinars as well as online training programs and assessments. Our courses are accredited by the Institute of Bankers of South Africa for continuous professional development purposes. Subscribers to our eas-e Fica™ application solution automatically receive access to our online training and assessment free of charge.</p> <div itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="uploadDate" content="Tue Sep 15 2020 12:32:26 GMT+0200 (South Africa Standard Time)"/><meta itemprop="name" content="Fica short course motivation"/><meta itemprop="description" content="A description of our short course content on anti-money laundering legislation in South Africa."/><meta itemprop="duration" content="PT1M28S" /><meta itemprop="thumbnailUrl" content="https://content.jwplatform.com/thumbs/WIu9XovL-1280.jpg"/><meta itemprop="contentUrl" content="https://content.jwplatform.com/videos/WIu9XovL-b0xTtoQs.mp4"/><div style="position:relative; overflow:hidden; padding-bottom:56.25%"> <iframe src="https://cdn.jwplayer.com/players/WIu9XovL-nBGDpa1v.html" width="100%" height="100%" frameborder="0" scrolling="auto" title="Fica short course motivation" style="position:absolute;" allowfullscreen></iframe> </div></div>',
                video : '',
                form : TrainingApplicationForm,
                detail : 'CourseDetail'
              }
            ]
          }
        ]

    }),
    methods: {
      details(service) {
        if(service) {
          this.detailDialog = true;
        }
      },
      showVideo(service) {
        if(service) {
          this.videoDialog = true;
        }
      },
      showForm(service) {
        if(service) {
          this.formDialog = true;
        }
      }
    },
    mounted() {
      console.log(this.$route.params);
      switch(this.$route.params.service) {
        case 'software' : this.tab = 0; break;
        case 'consulting' : this.tab = 1; break;
        case 'training' : this.tab = 2; break;
      }

    },
    created() {

    }
  }
</script>


<style scoped>
  ::-webkit-scrollbar {
    display: none;
  }

  .service-item-list {
    padding:16px;
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

  .services-list {
    width: 100%;
  }

  .service-text {
    padding-right: 32px;
    line-height: 22px;
  }

  h2 {
    font-size: 32px;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }

  @media (max-width:600px) {
    .v-avatar {
      width:64px!important;
      min-width:64px!important;
      height:64px!important;
    }

      h2 {
        font-size: 24px;
        text-overflow: ellipsis;
        word-wrap: break-word;
        margin-bottom: 8px;
      }
  }
</style>
