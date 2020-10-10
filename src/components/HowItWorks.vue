<template>
    <v-container fluid class="background">
    
        <div class="curvy"></div>

        
        <v-row >
            <v-col 
                    :lg="3"
                    :md="1"
                    :sm="1"
                    :xs="1"
            >

            </v-col>

            <v-col
                    cols="10"
                    :lg="6"
                    :md="10"
                    :sm="10"
                    :xs="10"
            >  

            <v-row justify="center" >
                    <h2 class="text-align-center white-text" style="margin-top: 128px;">How does it work?</h2>  
            </v-row> 

            <v-row justify="center" class="space-verticaly" style="margin-top: 64px;">
                    <h4 class="text-align-center white-text">ALL YOU HAVE TO DO IS CAPTURE YOUR CLIENTS DETAILS AS REQUESTED...<br></h4>
            </v-row> 

            <v-row justify="center" class="space-verticaly" style="margin-bottom: 64px;">
                    <h4 class="text-align-center white-text">EAS-E FICA DOES THE REST!</h4>
            </v-row> 

            <v-row justify="center" class="space-verticaly">
                <v-btn class="mx-2" fab dark large color="primary" width="256px" height="256px">
                    <v-img
                        src="../assets/logo-white.png"
                        max-width="200px"
                    >
                    </v-img>
                </v-btn>
            </v-row> 

            <v-row justify="center">
                <v-timeline :dense="$vuetify.breakpoint.xs" >

                    <v-timeline-item
                        color="cyan lighten-1"
                        
                        right
                        >
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                :elevation="hover ? 16 : 2"
                                :class="hover ? 'zoomin':''"
                            >
                            <v-card-title class="cyan lighten-1">
                            <v-icon
                                class="mr-4"
                                dark
                                size="32"
                            >
                                mdi-calculator
                            </v-icon>
                            <h4 class=" white--text font-weight-light">We calculate</h4>
                            </v-card-title>
                            <v-container>
                            <v-row>
                                <v-col>
                                Using big data and customisable risk profiles we calculate the risk rating of clients according to your unique circumstances.
                                </v-col>
                            </v-row>
                            </v-container>
                        </v-card>
                        </v-hover>
                    </v-timeline-item>

                    <v-timeline-item
                        color="red lighten-1"
                        
                        left

                        >
                                            <v-hover v-slot:default="{ hover }">
                            <v-card
                                :elevation="hover ? 16 : 2"
                                :class="hover ? 'zoomin':''"
                            >
                        <v-card-title class="red lighten-1 justify-end">
                        <h4 class=" mr-4 white--text font-weight-light">We screen</h4>
                        <v-icon
                            dark
                            size="32"
                        >
                            mdi-crosshairs
                        </v-icon>
                        </v-card-title>
                        <v-container>
                        <v-row>
                            <v-col >
                                We do automated terrorist and sanction screening against international terrorist and sanctions lists.
                            </v-col>
                        </v-row>
                        </v-container>
                    </v-card>
                        </v-hover>
                    </v-timeline-item>

                    <v-timeline-item
                    color="purple lighten-2"
                   
                    right
                    >
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                :elevation="hover ? 16 : 2"
                                :class="hover ? 'zoomin':''"
                            >
                                <v-card-title class="purple lighten-2">
                                    <v-icon
                                        dark
                                        size="32"
                                        class="mr-4"
                                    >
                                        mdi-account-multiple-outline
                                    </v-icon>
                                    <h4 class="white--text font-weight-light">We Associate</h4>
                                </v-card-title>
                                <v-container>
                                    <v-row>
                                        <v-col >
                                            Whether juristic entities or natural persons, we link individuals to other entities associated with them so you get the full picture.
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-hover>
                    </v-timeline-item>

                    <v-timeline-item
                    color="amber lighten-1"
                    
                    left

                    >
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                :elevation="hover ? 16 : 2"
                                :class="hover ? 'zoomin':''"
                            >
                                <v-card-title class="amber lighten-1 justify-end">
                                <h4 class=" mr-4 white--text font-weight-light">We Maintain</h4>
                                <v-icon
                                    dark
                                    size="32"
                                >mdi-home-outline</v-icon>
                                </v-card-title>
                                <v-container>
                                <v-row>
                                    <v-col >
                                    We securely store, maintain and re-verify all your data according to your instructions.
                                    </v-col>
                                </v-row>
                                </v-container>
                            </v-card>
                        </v-hover>
                    </v-timeline-item>



                    <v-timeline-item
                        color="green lighten-1"
                        
                        right
                        >
                                            <v-hover v-slot:default="{ hover }">
                            <v-card
                                :elevation="hover ? 16 : 2"
                                :class="hover ? 'zoomin':''"
                            >
                        <v-card-title class="green lighten-1">
                            <v-icon
                                class="mr-4"
                                dark
                                size="32"
                            >
                                mdi-bookshelf
                            </v-icon>
                            <h4 class=" white--text font-weight-light">We consult</h4>
                        </v-card-title>
                        <v-container>
                        <v-row>
                            <v-col>
                            We are subject matter experts and assist you to meet all your obligations.
                            </v-col>
                        </v-row>
                        </v-container>
                    </v-card>
                        </v-hover>
                    </v-timeline-item>

                    <v-timeline-item
                        color="purple lighten-2"
                        
                        left
                        >
                                            <v-hover v-slot:default="{ hover }">
                            <v-card
                                :elevation="hover ? 16 : 2"
                                :class="hover ? 'zoomin':''"
                            >
                        <v-card-title class="purple lighten-2 justify-end">
                            <h4 class=" mr-4 white--text font-weight-light">We integrate</h4>
                            <v-icon
                                dark
                                size="32"
                            >
                                mdi-crosshairs
                            </v-icon>
                        </v-card-title>

                        <v-container>
                            <v-row>
                                <v-col >
                                    We can import your data and provide APIs so that your systems can integrate into risk scoring services.
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                        </v-hover>                    
                    </v-timeline-item>

                    <v-timeline-item
                    color="amber lighten-1"
                    
                    right

                    >
                                            <v-hover v-slot:default="{ hover }">
                            <v-card
                                :elevation="hover ? 16 : 2"
                                :class="hover ? 'zoomin':''"
                            >
                        <v-card-title class="amber lighten-1 ">
                        
                        <v-icon
                            dark
                            size="32"
                            class="mr-4"
                        >mdi-home-outline</v-icon>

                        <h4 class=" mr-4 white--text font-weight-light">We Issue</h4>
                        
                        </v-card-title>
                        <v-container>
                        <v-row>
                            <v-col >
                            We issue client risk scoring certificates on demand
                            </v-col>
                        </v-row>
                        </v-container>
                    </v-card>
                        </v-hover>
                    </v-timeline-item>

                    <v-timeline-item
                        color="cyan lighten-1"
                        
                        left
                        >
                                                <v-hover v-slot:default="{ hover }">
                            <v-card
                                :elevation="hover ? 16 : 2"
                                :class="hover ? 'zoomin':''"
                            >
                            <v-card-title class="cyan lighten-1 justify-end" >
                                <h4 class="mr-4 white--text font-weight-light">We Educate</h4>
                                <v-icon
                                    dark
                                    size="32">
                                    mdi-calculator
                                </v-icon>
                            </v-card-title>
                            <v-container>
                            <v-row>
                                <v-col>
                                We develop and provide training modules and assessments online.
                                </v-col>
                            </v-row>
                            </v-container>
                        </v-card>
                        </v-hover>
                    </v-timeline-item>

                </v-timeline>
                </v-row>

                <v-row justify="center" class="space-verticaly" style="margin-bottom:64px">
                    <v-btn class="mx-2" fab dark large color="primary" width="256px" height="256px">
                        <h4>Compliance<br>Hassle<br>Free!</h4>
                    </v-btn>
                </v-row> 

            </v-col>

            <v-col             
                :lg="3"
                :md="1"
                :sm="1"
                :xs="1" >

            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
    .background {
        background-image: url('../assets/header-background.jpg');
        background-size: 100% 100%;
        min-height: 512px;
        position: relative;
    }

    .white-text {
        
        color:white;
    }

    .curvy {
        background-image: url('../assets/curve-invert.png');
        background-size: 100% 100%;
        background-repeat: 0px;
        position:absolute;
        top:0px;
        left:0px;
        height:64px;
        width:100%;

    }

    h4 {
        font-size:22px;
        text-align: center;
    }

    .theme--light.v-timeline::before {
        background: rgba(255, 255, 255, 0.3);
    }

    .zoomin {
        transform: scale(1.05,1.05) ;
        transition: 100ms ease-in-out;
    }

    .shift-accross {
        transform: translate(5,0) ;
        transition: 200ms ease-in-out;
    }

    @media screen and (max-width:1200px) {
        .curvy { 
        height: 64px;
        }
    }

    @media screen and (max-width:900px) {
        .curvy { 
        height: 24px;
        }
    }

    @media screen and (max-width:600px) {
        .curvy { 
        height: 24px;
        }

        h4 {
            font-size:14px;
        }
    }
</style>