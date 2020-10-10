<template>
    <v-card
        class="mx-auto"
        max-width="90%"
        
        style="margin-bottom:32px;width:90%;min-width:300px"
        elevation="16"
    >
        <v-skeleton-loader  v-if="loading == true" :loading="loading" transition="fade-transition" class="mx-auto" max-width="300" type="card">
        </v-skeleton-loader>

        <v-img v-if="loaded == true"
            class="white--text align-end"
            height="296px"
            gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.8)"
            :src="item.image"
        >
            <v-card-title style="word-break: break-word" >{{ item.title }}</v-card-title>
        </v-img>

        

        <v-card-subtitle v-if="loaded == true" class="pb-0 " style="margin-left:8px;margin-top:8px">{{ item.date }}</v-card-subtitle>

        <v-card-text v-if="loaded == true" class="text--primary">
            <div v-html="item.preview" class="preview"></div> 
            <v-img
                class="white--text align-end shift-up"
                height="64px"
                gradient="to bottom, rgba(255,255,255,.1), rgba(255,255,255,1)"
            ></v-img>       
        </v-card-text>

        <v-card-actions v-if="loaded == true">
            <v-spacer></v-spacer>
        <v-btn
            color="accent"
            text
            @click="onSelect"
        >
            Read More
        </v-btn>

        </v-card-actions>
    </v-card>  
</template>

<script>
  export default {
    name: 'NewsList',

    data: () => ({
        loaded : false,
        loading : true,
    }),
    props: {
        item : {},
        selected : null,
        index : { default : -1 }
    },
    created() {
        const readyHandler = () => {
            if (document.readyState == 'complete') {
                this.loading = false;
                this.loaded = true;
                document.removeEventListener('readystatechange', readyHandler);
            }
        };

        document.addEventListener('readystatechange', readyHandler);

        readyHandler();
    },
    methods: {
        onSelect: function(e) {
            console.log('clicked ' + e);
            if(this.index >= 0 && this.selected) {
                console.log('can call select function');
                this.selected(this.index);
            }
        }
    }
  }
</script>


<style scoped>

  .shift-up {
      margin-top: -64px;
  }

  .preview {
      max-height: 200px;
      overflow: hidden;
      margin: 8px;
  }

  p {
      font-weight: 400;
  }

</style>
