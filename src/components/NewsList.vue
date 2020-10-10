<template>
  <v-container fluid class="background">
    <v-row >
        <v-col :xl=2         
            :lg=1
            :md=1
            :sm=0
            :xs=0>
        </v-col>    

        <v-col :xl=8         
            :lg=10
            :md=10
            :sm=12
            :xs=12>
   
            <v-row>
                <v-col 
                    v-for="(article,index) in articles"
                    v-bind:key="index"
                    cols="12"
                    :lg="4"
                    :md="6"
                    :sm="12"
                    :xs="12"
                    >
                        <NewsItem :item="article" :selected="selectArticle" :index="index" ></NewsItem>
                </v-col> 
                    </v-row>
            </v-col> 
        <v-col 
            :xl=2         
            :lg=1
            :md=1
            :sm=0
            :xs=0>
        </v-col>   
    </v-row>
   
    <v-dialog v-model="dialog" scrollable max-width="640px" max-height="80%">
      <v-card>
        <v-card-title style="word-break: break-word">{{ article.title }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: auto;" v-html="article.text">

        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
          <v-btn color="primary darken-1" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
    import NewsItem from './NewsItem';

  export default {
    name: 'NewsList',
    components: {
        NewsItem
    },
    data: () => ({
        dialog : false,
        article : { title:'',text:''},
        articles : [
            {
                title : 'ASSESSING CLIENT RISK: HOW FAR DOES YOUR DUTY GO?',
                image : "/img/news/duty.jpg",
                preview : '<h4>THE FICA DOES NOT MAKE SUPER-INVESTIGATORS OR ENFORCEMENT AGENCIES OF ORDINARY BUSINESSES.</h4> <br><p>I am often asked if it is necessary for accountable institutions (AI) to screen their clients against the various lists available (such as negative publicity, PEP and others – let’s call them Subscriber Lists (SLs)) in addition to the lists strictly prescribed by the FICA. My answer is almost always “no” and there are various reasons for this.</p>',
                text : '<h4>THE FICA DOES NOT MAKE SUPER-INVESTIGATORS OR ENFORCEMENT AGENCIES OF ORDINARY BUSINESSES.</h4> <br><p>I am often asked if it is necessary for accountable institutions (AI) to screen their clients against the various lists available (such as negative publicity, PEP and others – let’s call them Subscriber Lists (SLs)) in addition to the lists strictly prescribed by the FICA. My answer is almost always “no” and there are various reasons for this.</p><p>Let’s deal with the legal requirements first. In South Africa, AIs must perform a customer due diligence in order to identify and assess the risk that clients may be involved in money laundering or terror financing activities (TFA). TFA reporting is dealt with predominantly in section 28A of the FICA, which identifies three distinct reporting scenarios:</p><ol><li>If the AI has under its control or possession, property owned or controlled by an entity which has committed, attempted to commit of facilitated a specified offence (i.e. terrorist and related offences) as defined in the Protection of Constitutional Democracy Against Terrorist and Related Activities Act (POCDATARA); </li><li>If the entity is named in a specific list as published by the President in terms of section 25 of POCDATARA i.e. known terrorists and associates; and</li><li>If the entity’s name appears on a list published by the UN Security Council as an entity against whom targeted financial sanctions have been imposed.</li></ol><br><p>The second and third items above pose little difficulty because there are names which appear on published lists and a bit of common sense will allow an AI to discern whether its client is such a person.  If for instance, a person’s second and third names correspond with a name on a list, it would be reasonable to eliminate the possibility that it is the same client. Please note that the requirement is not that the AI must have absolute certainty, but that it should have reasonable certainty. If say, three out of four names correspond, including e.g. the surname, the AI must determine whether it has reasonable certainty based on the information at hand. If it has, then the report must be made and the legally prescribed consequences must follow. If it has not, then the AI must decide whether it will continue business with that client or whether it will first complete an enhanced due diligence on the client. The approach must be described in the Risk Management and Compliance Program of the AI. It would appear that the requirement for reasonable certainty may be a moving target which is influenced by amongst others, the experience, qualifications, collective corporate wisdom and resources at the disposal of the AI. It is in these cases, to my mind, where SLs might be accessed as part of a prescribed enhanced due diligence procedure, although access to SLs is not prescribed in any way, shape or form as either standard operating procedure for standard CDD or EDD. In fact, making such comparisons as part of standard CDD brings with it a whole new set of problems further discussed below.</p><p>Item 1 above is problematic from a number of perspectives: how would an AI know if a person has committed, attempted to commit or facilitated a TFA without comparing to (a) list(s) of sorts? Surely to expect an AI to compile and maintain its own database of terrorist accused worldwide would transcend the demands of reasonableness?  The requirement seems to push AIs in the direction of consulting lists – but which lists? We can distinguish here between the so-called SLs, which are published and maintained by private enterprises for profit, or lists maintained and prepared by non-profit international institutions such as the United Nations Security Council. In addition, there are also lists maintained by individual countries.</p><p>It has become common practice in South Africa to draw on the integrated lists of known terrorists and associates published by the UNSC – the so-called ISIL (Al-Qaida) lists. I submit that in the ordinary course and subject to the caveat discussed below, these would suffice for meeting the reasonableness demand. They are in the public domain, not for profit and freely accessible via the internet.</p><p>Lists published by individual countries may be regarded as partisan and in many instances, are compiled with political objectives in mind. It is doubtful whether such lists ought to be relied on for our purposes.</p><p>Lists maintained for profit tend to draw on multiple sources to which an algorithm is applied. In a very insightful  <a href="https://www.aljazeera.com/news/2019/10/blacklist-muslims-listed-world-check-evidence-191022115529354.html" target="_blank">article on Al-Jazeera</a>, various pitfalls regarding such lists are discussed. Criticisms range from anti-Muslim bias, which then favours other extremist groups that might also legitimately be seen as terrorist groups to reliance on doubtful sources. The message is clear – a responsible AI should not blindly rely on the results obtained from such lists and would be well advised to conduct further independent investigation. This brings me to the next issue – one of resources.</p><p>It is understandable that an AI may wish to access as many lists as possible in the course of conducting enhanced due diligence because these may be relatively few and far between. The additional demands made on investigative resources and time may be well justified here. To rely on these lists as standard operating procedure in the course of standard due diligence seems to me to be wasteful and fraught with additional risks, not least of which is that a potential client may suffer irreparable harm if it were to become known that an account had been declined based on such information – if taken at face value. There are prohibitions in the act to prevent this type of information from being made public, but if untrue, it will always find a way out and into the public domain.</p><p>In summary then, reliance on country-specific lists is problematic because they may be influenced by political considerations. Reliance of UNSC lists is regarded as adequate but they may suffer from a post 9/11 bias against certain groups. Reliance on commercially available subscription lists, according to Al Jazeera may prove risky due to the variety of sources, including some doubtful ones used. Recognising the inherent risks whilst using such lists must of necessity add a substantial layer of cost in consequence of a due diligence having to be performed on the sources as well. If you have the resources and clients who are willing to ultimately absorb the cost, well and good, but such an approach may well go beyond the demands of reasonableness. </p><p>The eas-e Fica™ customer due diligence and risk rating software interrogates the UNSC and other legally prescribed lists as our minimum value proposition. This is reflected in our pricing structure and renders our solution imminently affordable to small and medium enterprises. We can effortlessly link to other lists based on our clients’ requirements, subject to the caveats above. </p>',
                date : '4 September 2020',
                fullText : ''
            },
            {
                title : 'WHY ANTI-MONEY LAUNDERING COMPLIANCE DISTINGUISHES ITSELF ETHICALLY',
                image : "/img/news/ethical-legal-feature.jpg",
                preview : '<h4>South Africa is losing the fight on corruption according to Shamila Bathoi, the Director of Public Prosecutions, and Government has declared war on fraud and corruption</h4> <br><p>It is therefore in our national interest that we do what we can to help. By combatting organized crime – one of the main targets of anti-money laundering - we are making a direct contribution to the well-being of our society. When we do so because we want to do the right thing instead of merely because we have to, it makes a substantial qualitative difference and gives us a sense of having done something meaningful.</p>',
                text : '<h4>South Africa is losing the fight on corruption according to Shamila Bathoi, the Director of Public Prosecutions, and Government has declared war on fraud and corruption</h4> <br><p>It is therefore in our national interest that we do what we can to help. By combatting organized crime – one of the main targets of anti-money laundering - we are making a direct contribution to the well-being of our society. When we do so because we want to do the right thing instead of merely because we have to, it makes a substantial qualitative difference and gives us a sense of having done something meaningful.</p><p>My general argument why anti-money laundering distinguishes itself ethically (i.e. the right thing to do) goes as follows: Culture is the most valuable contributor to our perception of ethics i.e. how we ought to live our lives in order to derive some sense of meaning. Although culture comprises many aspects and icons, not all contribute equally to our ethics. Here, most important are our values. Values shape beliefs and beliefs inform attitude. When our attitude shapes our behavior, the closer we are with our values and, it is said, the more moral and the more pleasant our society. Since even before ancient Greek times and in many cultures, to live in and contribute to such a society was said to be the greatest good. Other cultural icons by comparison, play a far lesser role.</p><p> Behaviour can be determined through values, customs and norms. Generally what distinguishes values and custom from norms is that the corresponding behaviours are voluntary – whereas norms (taken here strictly as legal and compliance imperatives) are usually associated with prescriptions and penalties to keep them in place. Values are formed through a combination of things: they must be generally accepted, widely held and constantly reinforced. It does happen that legislation and compliance requirements assume the nature of values when these three components are present, but not always.</p><p> In modern, complicated times, the chances that regulations correspond with broader society’s values are few and far between. Increasingly, regulation is used as an instrument to enforce somebody else’s view of what ought to be. When this happens, adhering to compliance is not voluntary for the sake of the greater good, but a “tick-box” exercise for self-preservation. When regulatory requirements match the shared values of society, compliance becomes an ethical act because one willingly participates for the sake of those values. So, to speak about a culture of compliance does not automatically elevate compliance to ethics. It can as easily become a corporate cultural icon of simply and unquestioningly obeying the rules for the sake of avoiding sanctions.</p><p> Combatting money laundering is a complex and massive endeavor which can only be successful if executed on an international scale according to uniform standards. The main aim of anti-money laundering is to make it difficult for organized criminals to enjoy the proceeds of their crimes. It stands to reason that success here will serve to reduce the instances of drug and weapons smuggling, poaching, terrorism, human trafficking and child prostitution. These are noble objectives which can scarcely be said not to form an integral part of any society’s value system. The regulatory environment is consistent with the preservation of these values as embodied in the long title of the Financial Intelligence Centre act: “To establish a Financial Intelligence Centre in order to combat money laundering activities and the financing of terrorist and related activities”; and therefore, to comply will be consistent with acting ethically. In fact, due to the scope and magnitude of the international efforts to combat money laundering, compliance is just about the only way in which the average business can make a contribution to this fight. It is one of those instances where it is the right thing to do, and worth doing to the best of your ability. </p>',
                date : '26 August 2020',
                fullText : ''
            },
            {
                title : 'DON’T BE CAUGHT NAPPING BY THE NEW ANTI-MONEY LAUNDERING REGIME',
                image : "/img/news/caught-napping.jpeg",
                preview : '<h4>A MUST READ FOR:	ACCOUNTANTS, AUDITORS AND COMPANY SECRETARIES, CREDIT PROVIDERS AND DEALERS IN HIGH VALUE GOODS</h4> <br><p>The scourge of money laundering substantially contributes to fraud, corruption and organized crime and is costing the South African economy dearly. Part of the solution is to increase the scope of anti-money laundering legislation and to increase the intensity of regulatory oversight in the form of both legal and compliance enforcement. Legal enforcement means you get criminally charged if you participate in money laundering/terrorist financing as defined in the Prevention of Organised Crime Act (POCA) and the Protection of Constitutional Democracy Against Terrorist and Related Activities Act (POCDATARA) and compliance enforcement means you get fined if you don’t comply with the requirements of the Financial Intelligence Act (FICA).</p>',
                text : '<h4>A MUST READ FOR:	ACCOUNTANTS, AUDITORS AND COMPANY SECRETARIES, CREDIT PROVIDERS AND DEALERS IN HIGH VALUE GOODS</h4> <br><p>The scourge of money laundering substantially contributes to fraud, corruption and organized crime and is costing the South African economy dearly. Part of the solution is to increase the scope of anti-money laundering legislation and to increase the intensity of regulatory oversight in the form of both legal and compliance enforcement. Legal enforcement means you get criminally charged if you participate in money laundering/terrorist financing as defined in the Prevention of Organised Crime Act (POCA) and the Protection of Constitutional Democracy Against Terrorist and Related Activities Act (POCDATARA) and compliance enforcement means you get fined if you don’t comply with the requirements of the Financial Intelligence Act (FICA).</p>',
                date : '25 July 2020',
                fullText : ''
            },
                        {
                title : 'PUBLIC COMPLIANCE COMMUNICATION #46',
                image : "/img/news/reserve-bank.jpg",
                preview : '<h4>NEW CDD MUST BE COMPLETED ON ALL CLIENTS</h4> <br><p>The FIC, in conjunction with the SA Reserve Bank and the FSCA issued PCC46 on 20 March 2020. Due to the complexities and expanded scope of customer risk assessment prescribed in the FIC Amendment Act 2017, accountable institutions were afforded an extended transition period to implement all new requirements. The last of these was the requirement to perform Customer Due Diligence on clients in order to arrive at a risk assessment.</p>',
                text : '<h4>NEW CDD MUST BE COMPLETED ON ALL CLIENTS</h4> <br><p>The FIC, in conjunction with the SA Reserve Bank and the FSCA issued PCC46 on 20 March 2020.</p> <p>Due to the complexities and expanded scope of customer risk assessment prescribed in the FIC Amendment Act 2017, accountable institutions were afforded an extended transition period to implement all new requirements. The last of these was the requirement to perform Customer Due Diligence on clients in order to arrive at a risk assessment.</p> <p>The first tranche of clients that had to be assessed were clients taken on between 01 April 2017 and 01 April 2019. These clients had to be assessed by 01 April 2019. Thereafter, the FIC allowed a reasonable time period for the assessment of all other (older) clients, provided that the institution had a programme which was described in its RMCP.</p><p> The effect of this PCC is that the regulators are of the view that this latter time period has now also expired and that enforcement measures will be applied forthwith should any institution not have fully complied with the requirements.</p><p>This means that all the institution’s clients with whom it still maintains a business relationship must have been assessed in terms of the new CDD criteria, risk-rated, risks mitigated and procedures adopted for the maintenance and on-going management of all client data subject to change.</p><p>THIS IS EXACTLY WHAT THE eas-e Fica™ SOLUTION OFFERS. For more info click on “Learn more” on this website or contact us for an online demo.</p>',    
                date : '01 June 2020',
                fullText : ''
            },
            {
                title : 'ETHICS: ARE WE BORN WITH OUR SENSE OF RIGHT AND WRONG?',
                image : "/img/news/curious_toddler.jpg",
                preview : '<h4>We are all at least once in our lives, confronted with an ethical dilemma</h4> <br><p>when we are forced to make a life-altering decision and must choose between two or more equally compelling or abhorrent choices: where the distinction between right and wrong or good and bad is not clear at all. Yet, we manage because we draw on something deep inside ourselves – an inexplicable intuition of sorts. The source of this “intuition” is generally regarded as either a deity or man-made. The first approach requires belief without evidence whilst the second defies belief without evidence. Businesses in South Africa must exhibit the values of fairness, transparency, responsibility and accountability. This is impossible in ethics shaped by belief without evidence. Only a knowledge-based approach to ethics can achieve this, but it does not happen automatically. </p>',
                text : '<h4>We are all at least once in our lives, confronted with an ethical dilemma</h4> <br><p>when we are forced to make a life-altering decision and must choose between two or more equally compelling or abhorrent choices: where the distinction between right and wrong or good and bad is not clear at all. Yet, we manage because we draw on something deep inside ourselves – an inexplicable intuition of sorts. The source of this “intuition” is generally regarded as either a deity or man-made. The first approach requires belief without evidence whilst the second defies belief without evidence. Businesses in South Africa must exhibit the values of fairness, transparency, responsibility and accountability. This is impossible in ethics shaped by belief without evidence. Only a knowledge-based approach to ethics can achieve this, but it does not happen automatically. </p><p>Three factors combine:  First, we must keep the origins of ethics simple. Ethics originated some 5000 years ago with the advent of agrarian societies and the establishment of larger villages and cities. Humans had won the initial battle against survival and started asking questions about the meaning of life, and, in the absence of answers, about ways to live meaningful lives. Also, we needed to find ways to work and live together in harmony in larger groups. These questions combine to form the seedbed for political, legal and ethical systems. Ethics are answers to questions about how to derive meaning from the way we live life whilst making a contribution to (or at least not harm) the society in which we live. This is true about businesses too.</p><p>The second major factor is one which distinguishes business ethics from other forms of ethics. Unlike the meaning of life, which is unanswerable, the purpose of the business is known. This provides employees with a backdrop against which to measure their actions. Business ethics need not suffer from the lack of clarity brought about by uncertainties in personal ethics. </p><p>Third: Major philosophical and neuro-scientific advances are being made in our understanding of consciousness - that which regulates our perceptions about ourselves and enables us to make those calls about good and bad.  These advances have removed much of the myth surrounding the topic. Our capacity for empathy, which is seen as the foundation of ethical awareness, develops from roughly our 2nd and 3rd years to our 7th year and contains two further stages. During our first few years, we are almost exclusively preoccupied with following our survival instincts – an important one in humans manifesting as eagerness to please. </p><p>Our consciousness is not a mysterious power implanted in us, and neither is our sense of right and wrong. Our earliest impressions of right and wrong are functions of our survival instincts and our eagerness to please. Because they are first, it is hard to isolate them for what they are, but they are merely transmissions of the earliest approvals and disapprovals we encountered as babies. We owe it to ourselves to constantly challenge these deep-seated premises on which we base major life decisions without question.</p><p>The modern day business environment does not tolerate an approach to ethics rooted in myth. The requirement for accountability and responsibility places an obligation on business people to stay at the cutting edge of knowledge, including the advances discussed here. Business ethics has a lot going for it - it’s role and application can be clear provided the origins are understood. It can be free of ambiguity provided the business has a clear and palatable purpose. It must be recognized as a function of human endeavor and not shrouded in mysticism. </p>',    
                date : '01 February 2020',
                fullText : ''
            },
                        {
                title : 'FEEDBACK ON IEASA NATIONAL ROADSHOW OCTOBER 2018: #1',
                image : "/img/news/estate-agents.jpg",
                preview : '<h4>ESTATE AGENTS AND THE TIMING OF CUSTOMER DUE DILIGENCE</h4> <br><p>During the recent national roadshow conducted by eas-e Fica under the auspices of the Institute of Estate Agents of South Africa, a number of practical issues arose. We will deal with some of them in this and forthcoming articles. Prior to the amendments to the FICA, estate agents operated under an exemption which regulated the timing of the “Know-Your-Client” procedure. This was done to avoid the unnecessary inconvenience of performing KYC on every buyer before being able to show them a property.</p>',
                text : '<h4>ESTATE AGENTS AND THE TIMING OF CUSTOMER DUE DILIGENCE</h4> <br><p>During the recent national roadshow conducted by eas-e Fica under the auspices of the Institute of Estate Agents of South Africa, a number of practical issues arose. We will deal with some of them in this and forthcoming articles. Prior to the amendments to the FICA, estate agents operated under an exemption which regulated the timing of the “Know-Your-Client” procedure. This was done to avoid the unnecessary inconvenience of performing KYC on every buyer before being able to show them a property.</p>',
                date : '29 October 2018',
                fullText : ''
            },
                        {
                title : 'ESTATE AGENTS AND CUSTOMER RISK RATING',
                image : "/img/news/risk-loss.jpeg",
                preview : '<h4>DIFFERENT STROKES FOR DIFFERENT FOLKS</h4> <br><p>Any reference to the Financial Intelligence Centre Act immediately conjures up the issue of Know Your Client or KYC. This is understandable as the KYC obligations used to be the set of obligations that attracted the most attention and without which, no transaction could proceed. Estate agents were subject to certain exemptions with regards to the timing of the KYC, but it still had to be done.</p>',
                text : '<h4>DIFFERENT STROKES FOR DIFFERENT FOLKS</h4> <br><p>Any reference to the Financial Intelligence Centre Act immediately conjures up the issue of Know Your Client or KYC. This is understandable as the KYC obligations used to be the set of obligations that attracted the most attention and without which, no transaction could proceed. Estate agents were subject to certain exemptions with regards to the timing of the KYC, but it still had to be done.</p>',
                date : '29 March 2018',
                fullText : ''
            },
                        {
                title : 'ESTABLISHING BENEFICIAL OWNERSHIP',
                image : "/img/news/owner.jpg",
                preview : '<p>Worldwide, the adoption of stricter anti-money laundering standards includes a requirement that beneficial owners of entities must be identified as part of a Customer Due Diligence (CDD) procedure. In some countries such as South Africa, this forms part of an initial CDD whilst in others it may form part of enhanced CDD. Regardless of where it fits in, the fact of the matter is: establishing beneficial ownership is easier said than done. In South Africa, beneficial ownership occurs when a natural person, alone or together with other natural persons, either own or exercise effective control over a juristic person.</p>',
                text : '<p>Worldwide, the adoption of stricter anti-money laundering standards includes a requirement that beneficial owners of entities must be identified as part of a Customer Due Diligence (CDD) procedure. In some countries such as South Africa, this forms part of an initial CDD whilst in others it may form part of enhanced CDD. Regardless of where it fits in, the fact of the matter is: establishing beneficial ownership is easier said than done. In South Africa, beneficial ownership occurs when a natural person, alone or together with other natural persons, either own or exercise effective control over a juristic person.</p>',
                date : '6 March 2018',
                fullText : ''
            }
        ]
    }),
    methods: {
        selectArticle: function(i) {
            console.log('selected ' + i);
            this.article = this.articles[i];
            this.dialog = true;
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
