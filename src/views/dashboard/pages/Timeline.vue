<template>
  <v-container id="timeline" fluid tag="section">
    <section class="text-center">
      <h1 class="font-weight-light mb-2 headline">Car Timeline</h1>
      <v-row>
        <v-col cols="12" sm="6" md="10">
          <v-text-field
            v-model="carNumber.carNo"
            label="Car No."
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-btn class="mx-2" fab dark large color="cyan" @click="getTimeLine">
            <v-icon dark> mdi-send </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </section>
    <!--       fill-dot
        large -->
    <v-row>
      <v-col>
        <v-timeline align-top v-if="timelineloaded">
          <v-timeline-item
            v-for="(timeline, i) in timelines"
            :key="i"
            color="info"
            icon="mdi - send"
          >
            <v-card class="pa-6">
              <v-row>
                Transaction Time :
                <v-chip :color="black" class="overline mb-3" small>
                  {{ new Date(timeline.transaction_time).toLocaleString() }}
                </v-chip>
              </v-row>
              <v-row>
                <p class="subtitle-1 font-weight-light" />
                Transactio - Type  : 
                <v-chip :color="black" class="overline mb-3" small>
                  {{ timeline.transactionType==1?"Leaving":"Entry" }}
                </v-chip>
              </v-row>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "DashboardPagesTimeline",

  data: () => ({
    menu: false,
    carNumber: {
      carNo: "",
    },
    timelineloaded: false,
    // timelines: [
    //   {
    //     chip: "Some title",
    //     color: "error",
    //     icon: "mdi-briefcase",
    //     text:
    //       "Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.",
    //     subtext: "11 hours ago via twitter",
    //   },
    //   {
    //     chip: "Another one",
    //     color: "success",
    //     icon: "mdi-puzzle",
    //     text:
    //       "Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....",
    //   },
    //   {
    //     chip: "Another title",
    //     color: "info",
    //     icon: "mdi-fingerprint",
    //     text:
    //       "Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM. What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye",
    //     action: "info",
    //     actionIcon: "mdi-wrench",
    //     actions: ["Action", "Another Action", "Something else here"],
    //   },
    //   {
    //     chip: "Another one",
    //     color: "warning",
    //     icon: "mdi-airplane-landing",
    //     text:
    //       "Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue team",
    //   },
    // ],
  }),
  computed: {
    ...mapState("transaction", {
      timelines: (state) => state.timeLine,
    }),
  },
  methods: {
    getTimeLine() {
      this.$store.dispatch("transaction/timeLine", this.carNumber);
      this.carNumber.carNo = "";
    },
  },
  watch: {
    timelines: {
      handler() {
        this.timelineloaded = true;
      },
      deep: true,
    },
  },
};
</script>
