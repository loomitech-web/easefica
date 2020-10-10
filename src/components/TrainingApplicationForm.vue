<template>
    <v-card style="width:100%">
                <v-img 
                    class="white--text align-end"
                    height="300px"
                    
                    src="../assets/services/training-banner.jpg"
                >
                    <v-card-title  ><h2 style="word-break: break-word; text-transform: none; color:white; font-size:42px; margin-left:16px">Training Application Form</h2></v-card-title>
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
                      v-model="form.email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="form.contactNumber"
                      label="Contact Number"
                      required
                    ></v-text-field>

                    <br>
                    <v-label><h4>I am enrolling as:</h4></v-label>
                    <v-radio-group v-model="form.individual">
                      <v-radio
                        label="An Individual"
                        :value="true"
                      ></v-radio>
                      <v-radio
                        label="A Co-ordinator for an employer"
                        :value="false"
                      ></v-radio>
                    </v-radio-group>

                    <v-text-field
                      v-if="!form.individual"
                      v-model="form.company"
                      label="Company Name"
                    ></v-text-field>

                    <v-text-field
                      v-if="!form.individual"
                      v-model="form.companyAddress"
                      label="Company Street Address"
                    ></v-text-field>

                    <v-text-field
                      v-if="!form.individual"
                      v-model="form.companyVATNumber"
                      label="Company VAT Number"
                    ></v-text-field>

                    <v-text-field
                      v-model="form.cpdLearners"
                      label="Number of Learners @R450.00"
                      :rules="cpdLearners"
                      required
                    ></v-text-field>

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

                <v-dialog v-model="dialog" max-width="500px" max-height="80%">
                  <v-card>
                    <v-card-title style="word-break: break-word">Success!</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: auto;" >
                      Thank you for enrolling in the eas-eFica training program. A representative will contact you soon!
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                      <v-btn color="primary darken-1" text @click="reset();">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card> 

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
        cpdLearners: [
          v  => {
            if (!v) return 'This field is required';
            if (v.length == 0) return 'This field is required';
            if (!v.trim()) return true;
            if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) return true;
            return 'Number has to be between 0 and 999';
          }
        ],
        learners: [
          v  => {
            if (v.length == 0) return 'This field is required';
            if (!v.trim()) return true;
            if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) return true;
            return 'Number has to be between 0 and 999';
          }
        ],
        form : {
          firstName:'',
          lastName:'',
          company:'',
          companyAddress:'',
          companyVATNumber:'',
          email:'',
          contactNumber:'',
          individual : false,
          learners:null,
          cpdLearners:null,
          consents : {
            contactByEmail : false,
            contactByPhone : false
          }
        }
    }),
    methods: {
      send() {
        console.log(this.valid);
        console.log(this.form);
        if(this.valid) {
          axios.post('https://odata.easefica.co.za/easefica/easefica/TrainingApplication', this.form).then(()=>{
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
          individual: false,

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

  h2 {
    line-height: 52px!important;
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
