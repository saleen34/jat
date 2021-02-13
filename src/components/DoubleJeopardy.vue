<template>
  <div>
    <v-container v-show="!showDailyDouble" class="answerText noselect">
      <v-row>
        <v-col v-for="cat in cats" :key="cat.id" @click="expandCat(cat)">
          <v-card
            v-if="cat.show"
            align="center"
            justify="center"
            outlined
            min-height="100px"
            class="catColor"
          >
            {{ cat.name }}
          </v-card>
          <v-card v-if="!cat.show" align="center" justify="center" outlined>
            <v-img src="@/assets/doubleJeopardy.jpeg" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      v-show="!showDailyDouble"
      v-for="(n, answerIndex) in 5"
      :key="answerIndex"
      pa-1
    >
      <v-row pa-3>
        <v-col v-for="(j, catIndex) in 6" :key="catIndex">
          <AnswerText
            :value="cats[answerIndex].id"
            :answer="cats[catIndex].answers[answerIndex].text"
            :state="cats[catIndex].answers[answerIndex].state"
            @click.native="expandAnswer(catIndex, answerIndex)"
          >
          </AnswerText>
        </v-col>
      </v-row>
    </v-container>

    <Overlay
      @close-dialog="largeCard.visible = false"
      :visible="largeCard.visible"
      :text="largeCard.text"
    ></Overlay>

    <YouTube
      v-if="showDailyDouble"
      :id="yt.dd.id"
      :vars="yt.dd.vars"
      @ended="ddEnded"
    >
    </YouTube>

    <audio
      ref="dailyDoubleAudio"
      src="@/assets/audio/dailydouble.mp3"
      preload
      muted
    ></audio>
  </div>
</template>
<script>
import AnswerText from "./AnswerText";
import Overlay from "./Overlay";
import YouTube from "./YouTube";

export default {
  name: "DoubleJeopardy",
  components: {
    AnswerText,
    Overlay,
    YouTube,
  },
  methods: {
    setSelected(catIndex, answerIndex) {
      if (this.cats[catIndex].answers[answerIndex].state === "value") {
        this.cats[catIndex].answers[answerIndex].state = "answer";
      } else if (this.cats[catIndex].answers[answerIndex].state === "answer") {
        this.cats[catIndex].answers[answerIndex].state = "blank";
      } else {
        this.cats[catIndex].answers[answerIndex].state = "value";
      }
    },
    expandCat(cat) {
      this.largeCard.text = cat.name;
      this.largeCard.visible = true;
    },
    expandAnswer(catIndex, answerIndex) {
      if (this.cats[catIndex].answers[answerIndex].dd) {
        this.doDailyDouble();
      } else {
        this.largeCard.text = this.cats[catIndex].answers[answerIndex].text;
        this.largeCard.visible = true;
      }
      this.cats[catIndex].answers[answerIndex].state = "blank";
    },
    doDailyDouble() {
      if (!this.dailyDouble.done) {
        this.$refs.dailyDoubleAudio.play();
        this.showDailyDouble = true;
      }
    },
    ddEnded() {
      let frames = document.getElementsByTagName("iframe");
      for (let i = 0; i < frames.length; ++i) {
        frames[i].remove();
      }
      this.showDailyDouble = false;
      this.dailyDouble.done;
    },
  },
  props: {
    toggleCats: Boolean,
  },
  watch: {
    toggleCats(val) {
      for (let i = 0; i < 6; i++) {
        setTimeout(() => (this.cats[i].show = val), 1000 * i);
      }
    },
  },
  created: function () {
    // this.dailyDouble.when = Math.floor(Math.random() * 36) + 1;
    this.dailyDouble.when = 2;
  },
  data: () => ({
    showDailyDouble: false,
    yt: {
      dd: {
        id: "DZXsmCIMeRU",
        vars: {
          autoplay: 0,
          controls: 1,
        },
      },
    },
    dailyDouble: {
      counter: 0,
      when: -1000,
      done: false,
    },
    largeCard: {
      text: "",
      dd: false,
      visible: false,
    },
    cats: [
      {
        id: 400,
        show: false,
        name: "Piles of shit",
        answers: [
          {
            state: "value",
            text:
              'Spanish for "little fly" these insects carry diseases, feed on humans and really suck.',
            dd: false,
          },
          {
            state: "value",
            text:
              '"Milt, we\'re gonna need to go ahead and move you downstairs into storage B"',
            dd: false,
          },
          {
            state: "value",
            text:
              "This pile of shit, crashed into a manure truck while trying to run down Marty.",
            dd: false,
          },
          {
            state: "value",
            text:
              'This beanie wearing animated shit head frequently says, "Screw you guys, I\'m going home!"',
            dd: false,
          },
          {
            state: "value",
            text:
              'This fictional giant asshole blamed his "little" hand for poisoning him.',
            dd: false,
          },
        ],
      },
      {
        id: 800,
        show: false,
        name: "Dirty Acronyms",
        answers: [
          {
            state: "value",
            text: "dtf",
            dd: false,
          },
          {
            state: "value",
            text: "q2c",
            dd: false,
          },
          {
            state: "value",
            text: "fwb",
            dd: false,
          },
          {
            state: "value",
            text: "ipn",
            dd: false,
          },
          {
            state: "value",
            text: "lkitr",
            dd: false,
          },
        ],
      },
      {
        id: 1200,
        show: false,
        name: "Drugs",
        answers: [
          {
            state: "value",
            text: 'This chemical in cannabis is what makes you feel "high".',
            dd: false,
          },
          {
            state: "value",
            text:
              "Marketed as a legal cough suppressant in the late 1800s, this narcotic goes by the street name smack.",
            dd: false,
          },
          {
            state: "value",
            text:
              "This hallucinogen was recently decriminalized in Oregon, and may be beneficial in treating mental health issues.",
            dd: false,
          },
          {
            state: "value",
            text:
              "I believe I can fly... well some people think they can on this drug.",
            dd: false,
          },
          {
            state: "value",
            text:
              "A dissociative drug used as an anesthetic in veterinary practices.",
            dd: false,
          },
        ],
      },
      {
        id: 1600,
        show: false,
        name: "Name that movie",
        answers: [
          {
            state: "value",
            text: "You're breaking up with me because I'm too... blonde?",
            dd: false,
          },
          {
            state: "value",
            text:
              "You're in big trouble though, pal. I eat pieces of shit like you for breakfast!",
            dd: false,
          },
          {
            state: "value",
            text: "There's no crying in baseball!",
            dd: false,
          },
          {
            state: "value",
            text:
              "It rubs the lotion on its skin or else it gets the hose again.",
            dd: false,
          },
          {
            state: "value",
            text:
              "Nobody's trading with anybody. This ain't a goddamn, fucking city council meeting, you know? Now listen up, Mr. Pink. There's two ways you can go on this job: my way or the highway.",
            dd: false,
          },
        ],
      },
      {
        id: 2000,
        show: false,
        name: "Reversing entropy",
        answers: [
          {
            state: "value",
            text: "It's nearly impossible to do this when sneezing.",
            dd: false,
          },
          {
            state: "value",
            text:
              "While most are vulnerable, doing this to yourself isn't funny.",
            dd: false,
          },
          {
            state: "value",
            text:
              "Once out of its tube, this is nearly impossible to get back in.",
            dd: false,
          },
          {
            state: "value",
            text:
              "This large soft comforter cover is frustratingly cumbersome to put on by yourself.",
            dd: false,
          },
          {
            state: "value",
            text:
              'Resisting the urge to "pop" this tests even the most disciplined of will powers.',
            dd: false,
          },
        ],
      },
      {
        id: 2000,
        show: false,
        name: '"Bored" Games',
        answers: [
          {
            state: "value",
            text: "Round and round we go, just don't land on a PP or BW.",
            dd: false,
          },
          {
            state: "value",
            text: "",
            dd: true,
          },
          {
            state: "value",
            text: "Impossible to spell and even harder to score. Trump!",
            dd: false,
          },
          {
            state: "value",
            text: "Take over the world... oops, lost an army!",
            dd: false,
          },
          {
            state: "value",
            text: "Flicking plastic disks into a target.",
            dd: false,
          },
        ],
      },
    ],
  }),
};
</script>
<style lang="css" scoped>
.theme--light.v-card {
  background-color: #060ce9;
  color: #ffcc00;
}
.answerText {
  cursor: pointer;
}
.catColor {
  color: white!important;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.theme--light.v-sheet--outlined {
  border: 3px solid black !important;
}
.theme--light.v-card.blank {
  color: #060ce9;
}
</style>