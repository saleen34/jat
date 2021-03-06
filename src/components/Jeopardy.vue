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
            <v-img src="@/assets/jeopardy.jpg" />
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

    <OverlayDD
      @close-dialog="closeDDSplash"
      :visible="ddSplash"
    ></OverlayDD>

    <OverlayVideo
      @close-dialog="closeAllVideos"
      :visible="isVideoVisible('ship')"
      link="ship.mp4"
    ></OverlayVideo>

    <OverlayVideo
      @close-dialog="closeAllVideos"
      :visible="isVideoVisible('apple')"
      link="apple.mp4"
    ></OverlayVideo>

    <OverlayVideo
      @close-dialog="closeAllVideos"
      :visible="isVideoVisible('glass')"
      link="glass.mp4"
    ></OverlayVideo>

    <OverlayVideo
      @close-dialog="closeAllVideos"
      :visible="isVideoVisible('hits')"
      link="hits.mp4"
    ></OverlayVideo>

    <OverlayVideo
      @close-dialog="closeAllVideos"
      :visible="isVideoVisible('witch')"
      link="witch.mp4"
    ></OverlayVideo>

    <OverlayVideo
      @close-dialog="closeAllVideos"
      :visible="isVideoVisible('adios')"
      link="adios.mp4"
    ></OverlayVideo>

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
import OverlayDD from "./OverlayDD";
import OverlayVideo from "./OverlayVideo";

export default {
  name: "Jeopardy",
  components: {
    AnswerText,
    Overlay,
    OverlayDD,
    OverlayVideo,
  },
  methods: {
    isVideoVisible(what) {
      if (this.videoCard.link === what) {
        return true;
      }
      return false;
    },
    closeDDSplash() {
      this.videoCard.link = 'adios';
      this.showDailyDouble = true;
    },
    closeAllVideos() {
      this.showDailyDouble = false;
      this.videoCard.link = '';
    },
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
      if (this.cats[catIndex].answers[answerIndex].link) {
        this.videoCard.link = this.cats[catIndex].answers[answerIndex].link;
      } else if (this.cats[catIndex].answers[answerIndex].dd) {
        this.soundDailyDouble();
        this.ddSplash = true;
      } else {
        this.largeCard.text = this.cats[catIndex].answers[answerIndex].text;
        this.largeCard.visible = true;
      }
      this.cats[catIndex].answers[answerIndex].state = "blank";
    },
    soundDailyDouble() {
      this.$refs.dailyDoubleAudio.play();
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
  data: () => ({
    showDailyDouble: false,
    largeCard: {
      text: "",
      visible: false,
    },
    ddSplash: false,
    videoCard: {
      link: "",
    },
    cats: [
      {
        id: 100,
        show: false,
        name: "Potent Potables",
        answers: [
          {
            state: "value",
            text:
              "This cocktail contains tequila, orange juice, and grenadine, and was created in the early 1970s.",
            dd: false,
          },
          {
            state: "value",
            text:
              'A French bartender is said to have invented this cocktail in 1921, originally referred to as a "Bucket of blood"',
            dd: false,
          },
          {
            state: "value",
            text:
              'This lemon-lime drink was part of the "clear craze" of the 1990s that produced products such as Crystal Pepsi and Tab Clear.',
            dd: false,
          },
          {
            state: "value",
            text: "",
            dd: true,
          },
          {
            state: "value",
            text:
              "Coming in at 8.1% AVB, this 40-ounce imbibe comes in both Black and Silver labels.",
            dd: false,
          },
        ],
      },
      {
        id: 200,
        show: false,
        name: "Sports",
        answers: [
          {
            state: "value",
            text:
              "First-team All-ACC in 1987, this NBA player was the shortest to ever play coming in at 5 ft 3 in",
            dd: false,
          },
          {
            state: "value",
            text:
              "Born in Portland, Oregon #3 played as an outfielder, catcher, and first baseman winning consecutive MVP's, 4 Slugger Awards and 5 Gold Gloves.",
            dd: false,
          },
          {
            state: "value",
            text:
              "Winning a gold medal at the 1964 Summer Olympics, this fighter was the first to beat Muhammad Ali.",
            dd: false,
          },
          {
            state: "value",
            text:
              "This running back in 2015, at the age of 30 became the oldest in NFL history to be named first-team All-Pro.",
            dd: false,
          },
          {
            state: "value",
            text:
              "She was hailed as a soccer icon, played as a forward for the US women's national soccer team from 1987 to 2004.",
            dd: false,
          },
        ],
      },
      {
        id: 300,
        show: false,
        name: "Fabric",
        answers: [
          {
            state: "value",
            text: "Types of this delicate fabric include Brussels & Chantilly",
            dd: false,
          },
          {
            state: "value",
            text:
              "This fiber obtained from goats has been used to make yarn, textiles and clothing for hundreds of years.",
            dd: false,
          },
          {
            state: "value",
            text: "A synthetic fiber known for its exceptional elasticity",
            dd: false,
          },
          {
            state: "value",
            text:
              "A type of woven tufted fabric in which the cut threads are evenly distributed, with a short dense pile, giving it a distinctive soft feel.",
            dd: false,
          },
          {
            state: "value",
            text:
              "A type of textile weave with a pattern of diagonal parallel ribs. It is one of three fundamental types along with plain and satin.",
            dd: false,
          },
        ],
      },
      {
        id: 400,
        show: false,
        name: "Hold your tongue",
        answers: [
          {
            state: "value",
            text: "",
            dd: false,
            link: 'apple',
          },
          {
            state: "value",
            text: "",
            dd: false,
            link: 'glass',
          },
          {
            state: "value",
            text: "",
            dd: false,
            link: 'ship',
          },
          {
            state: "value",
            text: "",
            dd: false,
            link: 'witch',
          },
          {
            state: "value",
            text: "",
            dd: false,
            link: 'hits',
          },
        ],
      },
      {
        id: 500,
        show: false,
        name: "FAMOUS TITIES",
        answers: [
          {
            state: "value",
            text:
              "A famous American country singer, songwriter and actress she cannot be eclipsed by her massive sweater melons alone.",
            dd: false,
          },
          {
            state: "value",
            text:
              "Donning tiggo bitties, she is best known for her numerous appearances in Playboy, her work on Home Improvement, Baywatch, and V.I.P.",
            dd: false,
          },
          {
            state: "value",
            text: "Meat dress, little monsters and huge Headlamps.",
            dd: false,
          },
          {
            state: "value",
            text:
              "An American media personality, socialite, and model she first gained media attention as a friend and stylist of Paris Hilton.",
            dd: false,
          },
          {
            state: "value",
            text:
              'Heather Graham and her "twins" were front and center as Roller Girl in this 1997 drama.',
            dd: false,
          },
        ],
      },
      {
        id: 600,
        show: false,
        name: "40th Potpourri",
        answers: [
          {
            state: "value",
            text:
              "She rose to prominence as the lead vocalist of the alternative rock band Hole, which she formed in 1989.",
            dd: false,
          },
          {
            state: "value",
            text: "A place to shoot hoops.",
            dd: false,
          },
          {
            state: "value",
            text: "It's the highest in the land.",
            dd: false,
          },
          {
            state: "value",
            text:
              "She gained recognition for her starring role as Monica on the NBC sitcom Friends.",
            dd: false,
          },
          {
            state: "value",
            text:
              'A surname of German origin. The name was first found in Saxony. It means, "charcoal burner".',
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
