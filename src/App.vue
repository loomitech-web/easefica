<template>
  <v-app class="main">
    <v-app-bar
      app
      dark
      color="#0a7cb9"
      src="./assets/app-bar-background3.jpg"
      :shrink-on-scroll="!$vuetify.breakpoint.xs"
      :prominent="!$vuetify.breakpoint.xs"
      fade-img-on-scroll
      scroll-threshold="200"
      elevate-on-scroll
      extension-height="64px"
      
    >
          <!--v-img
              class="shrink mr-2 covid"
              src="/img/news/covid-f.png"
              transition="scale-transition"
              contain
            /-->

          <v-img
              class="logo-image"
              src="./assets/logo-white.png"
              transition="scale-transition"
              contain
            />

      <v-spacer></v-spacer>

      <div class="buttons">
        <v-btn class="login" rounded color="accent" @click="login()">Login</v-btn>

        <!--v-btn icon>
          <v-icon>mdi-twitter</v-icon>
        </v-btn-->

        <!--v-btn  icon @click="youtube()">
          <v-icon >mdi-youtube</v-icon>
        </v-btn-->

        <v-btn icon @click="facebook()">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>

      </div>  

       <template v-slot:extension>
        <v-tabs 
          class="custom-tabs"
          right 
          color="accent"
          show-arrows
        >
          <v-tab to="/">Home</v-tab>
          <v-tab to="/news">News</v-tab>
          <v-tab to="/services">Services</v-tab>
          <!--v-tab to="/links">Links</v-tab-->
          <v-tab to="/contact">Contact Us</v-tab>

        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    headerBackground : false,
    headerBackgroundSrc : "./assets/app-bar-background2.jpg"
  }),
  computed: {
    background: {
        get() {
          return this.headerBackground ? this.headerBackgroundSrc : null;
        }
      
    }
  },
  methods : {
    login() {
      window.open("https://admin.easefica.co.za", "_blank");    
    },
    facebook() {
      window.open("https://www.facebook.com/Eas-e-Fica-107525357691888/?modal=admin_todo_tour", "_blank");  
    },
    youtube() {
      window.open("https://admin.easefica.co.za", "_blank"); 
    }
  }


};
</script>

<style>

  @font-face {
    font-family: proxima;
    src: url(./assets/fonts/proxima-nova.otf);
  }

  @font-face {
    font-family: roboto;
    src: url(./assets/fonts/Roboto-Light.ttf);
  }

  body {
    font-family: proxima;
    background-color: #0875b8!important;
  }

  html::-webkit-scrollbar {
    display: none;
  }

  .logo-image {
    position: absolute!important;
    bottom:-40px;
    margin-left:16px;
    height: 72px;
  }

  .covid {
    position: absolute!important;
    bottom:70px;
    width:380px;
    margin-left:16px;
    background-color: white;
    padding:8px;
    border-radius: 5px;
  }

  .v-tab {
    font-size: large!important;

    font-family: roboto;
  }

  h2 {
    font-family: proxima;
    font-size: 48px;
    font-weight:300;
    color: #f26897;
    text-transform: uppercase;
    line-height: 52px;
  }

  h3 {
    font-family: proxima;
    font-size: 42px;
    font-weight:300;
  }

  h4 {
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 300;
  }

  .custom-tabs {

  }

  .login {
    margin-top:6px;
    margin-right: 6px;
  }

  .main {
    background: #0a7cb9!important;
  }

  .sheet {
    opacity: 0;
    transform: translate(0,64px);
    min-height: 1024px;
    margin-top:64px;
  }

  .fadein, .fadeout {
      opacity: 0;
      -moz-transition: opacity 1.4s ease-in-out; 
      -o-transition: opacity 1.4s ease-in-out;
      -webkit-transition: opacity 1.4s ease-in-out; 
      transition: opacity 1.4s ease-in-out; 
  }
  
  .fadein {
      opacity: 1;
      transform: translate(0,0);
      -moz-transition: 0.8s ease-in-out;
      -o-transition: 0.8s ease-in-out;
      -webkit-transition: 0.8s ease-in-out;
      transition: 0.8s ease-in-out;
  }

img {
    vertical-align:inherit!important;
}

    @media screen and (max-width:900px) {
      .logo-image{
        width: 200px;
        margin-left:0px;
        left:16px;
        bottom: -16px;
      }

      .custom-tabs {
        padding-right: 0px;
      }

      .covid {
        display: none!important;
      }
    }

  @media (max-width:600px) {
    .logo-image{
      width: 128px;
      left:16px;
      bottom: -16px;
    }

    .covid {
      position: absolute!important;
      bottom:70px;
      width:200px;
      margin-left:0px;
      background-color: white;
      padding:0px;
      left:8px;
      border-radius: 5px;
      display:none!important;
    }

    .custom-tabs {
      padding-right: 0px;
      font-size: 12px!important;
    }

    .v-tab {
      font-size:small!important;
    }

    .buttons {
  
    }



    .login {
            display: none!important;
    }

    .sheet {
      opacity: 0;
      transform: none;
      min-height: 1024px;
      margin-top:0px;
    }

    .fadein, .fadeout {
        opacity: 0;
        -moz-transition: opacity 1.4s ease-in-out; 
        -o-transition: opacity 1.4s ease-in-out;
        -webkit-transition: opacity 1.4s ease-in-out; 
        transition: 0.8s ease-in-out; 
    }

    .fadein {
        opacity: 1;
        transform: translate(0,0);
        -moz-transition: 0.8s ease-in-out;
        -o-transition: 0.8s ease-in-out;
        -webkit-transition: 0.8s ease-in-out;
        transition: 0.8s ease-in-out;
    }

    h2 {
      font-family: proxima;
      font-size: 32px;
      font-weight:300;
      color: #f26897;
      text-transform: uppercase;
    }

    h3 {
      font-family: proxima;
      font-size: 30px;
      font-weight:300;
    }

    h4 {
      font-size: 14px;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-weight: 300;
    }
  }
</style>
