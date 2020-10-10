<template>
  <v-container fluid class="background">
    <v-row>
        <v-col :xl=3         
            :lg=3
            :md=3
            :sm=1
            :xs=1>
        </v-col>    

        <v-col :xl=6         
            :lg=6
            :md=6
            :sm=10
            :xs=10>
            <v-row justify="center" >
              <v-card style="width:100%">
                <v-img 
                    class="white--text align-end"
                    height="400px"
                    
                    src="../assets/contact-us.jpg"
                >
                    <v-card-title  ><h2 style="word-break: break-word; text-transform: none; color:white; font-size:42px; margin-left:16px">Contact Us</h2></v-card-title>
                </v-img>

                  <v-card-text style="padding:64px; ">
                  <v-form
                    ref="form"
                    v-model="valid"
                  >
                    <v-text-field
                      v-model="form.firstName"
                      label="First Name"
                      :rules="nameRules"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="form.lastName"
                      label="Last Name"
                      :rules="nameRules"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="form.company"
                      label="Company Name"
                      :rules="nameRules"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="form.email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>

                    <br>
                    <v-label><h4>I am interested in:</h4></v-label>
                    <v-row>
                      <v-col>
                        <v-checkbox
                          v-model="form.inquire.admin"
                          label="eas-eFica Administrator"
                          
                        ></v-checkbox>
                      </v-col>
                      <v-col>
                        <v-checkbox
                          v-model="form.inquire.api"
                          label="eas-eFica API"
                          
                        ></v-checkbox>
                      </v-col>
                    </v-row>  

                    <v-row>
                      <v-col>
                        <v-checkbox
                          v-model="form.inquire.drafting"
                          label="AML Implementation and drafting"
                          
                        ></v-checkbox>
                      </v-col>
                      <v-col>
                        <v-checkbox
                          v-model="form.inquire.monitoring"
                          label="Compliance Monitoring"
                          
                        ></v-checkbox>
                      </v-col>
                    </v-row> 

                    <v-row>
                      <v-col>
                        <v-checkbox
                          v-model="form.inquire.dispute_resolution"
                          label="Dispute Resolution"
                          
                        ></v-checkbox>
                      </v-col>
                      <v-col>
                        <v-checkbox
                          v-model="form.inquire.training"
                          label="Training"
                          
                        ></v-checkbox>
                      </v-col>
                    </v-row> 

                    <v-textarea
                      v-model="form.message"
                      label="Message"
                      required
                      rows="1"
                      auto-grow
                    ></v-textarea>

                    <v-checkbox
                      v-model="form.consents.newsletter"
                      label="I would like to receive the eas-eFica news letter."
                      required
                    ></v-checkbox>

                    <v-checkbox
                      v-model="form.consents.offers"
                      label="I would like to receive notifications of special offers from ease-eFica."
                      required
                    ></v-checkbox>

                  </v-form>

                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="send()"
                      :disabled="!valid"
                    >
                      Send
                    </v-btn>
                  </v-card-actions>  
              </v-card> 
            </v-row> 
        </v-col> 
        <v-col :xl=3         
            :lg=3
            :md=3
            :sm=1
            :xs=1>
        </v-col>   
    </v-row>

    <v-dialog v-model="dialog" max-width="500px" max-height="80%">
      <v-card>
        <v-card-title style="word-break: break-word">Success!</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: auto;" >
          Thank you for contacting eas-eFica. A representative will contact you soon!
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
          <v-btn color="primary darken-1" text @click="reset();">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
  import axios from 'axios';
  import router from '../router'

  export default {
    name: 'NewsList',

    data: () => ({
        valid: false,   
        dialog: false,   
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        nameRules: [
          v => !!v || 'This is required',
          v => v.length >= 3 || 'Must be 3 or more characters',
        ],
        form : {
          firstName:'',
          lastName:'',
          company:'',
          email:'',
          message:'',
          inquire : {
            admin : false,
            api : false,
            drafting : false,
            monitoring : false,
            dispute_resolution: false,
            training: false
          },
          consents : {
            newsletter : false,
            offers : false
          }
        }
    }),
    methods: {
      send() {
        console.log(this.valid);
        console.log(this.form);
        if(this.valid) {
          axios.post('https://odata.easefica.co.za/easefica/easefica/ContactUs', this.form).then(()=>{
            this.dialog = true;
          })
        }
      },
      reset() {
        this.dialog = false;
        this.form = {
          firstName:'',
          lastName:'',
          company:'',
          email:'',
          inquire : {
            admin : false,
            api : false,
            drafting : false,
            monitoring : false,
            dispute_resolution: false,
            training: false
          },
          consents : {
            newsletter : false,
            offers : false
          }
        }
        router.push('/');
      }
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
