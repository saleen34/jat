<template>
  <div>
    <v-container v-show="!showDailyDouble" class="answerText noselect">
      dd: {{ dailyDouble }}
      <v-row>
        <v-col v-for="cat in cats" :key="cat.id" @click="expandCat(cat)">
          <v-card
            v-if="cat.show"
            align="center"
            justify="center"
            outlined
          >
            {{ cat.name }}
          </v-card>
          <v-card
            max-width="250"
            v-if="!cat.show"
            align="center"
            justify="center"
            outlined
          >
            <v-img src="@/assets/cat.jpeg" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      v-show="!showDailyDouble"
      v-for="(n, answerIndex) in 6"
      :key="answerIndex"
    >
      <v-row>
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
  name: "Jeopardy",
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
      let didDD = false;
      this.cats[catIndex].answers[answerIndex].state = "blank";

      didDD = this.checkDailyDouble();

      if (!didDD) {
        this.largeCard.text = this.cats[catIndex].answers[answerIndex].text;
        this.largeCard.visible = true;
      }
    },
    checkDailyDouble() {
      this.dailyDouble.counter++;
      if (
        !this.dailyDouble.done &&
        this.dailyDouble.counter === this.dailyDouble.when
      ) {
        this.$refs.dailyDoubleAudio.play();
        this.showDailyDouble = true;
        return true;
      }
      return false;
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
        id: "FEU2jg5AknE",
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
      visible: false,
    },
    cats: [
      {
        id: 100,
        show: false,
        name: "Potent Potables",
        answers: [
          {
            state: "value",
            text: "This cocktail contains tequila, orange juice, and grenadine, and was created by Bobby Lozoff and Billy Rice in the early 1970s.",
          },
          {
            state: "value",
            text: "French bartender Fernand Petiot claimed to have invented this cocktail in 1921, originally referred to as a \"Bucket of blood\"",
          },
          {
            state: "value",
            text: "When preparing this, fresh lime juice is added to simple syrup, mint leaves then muddled.",
          },
          {
            state: "value",
            text: "This lemon-lime drink was part of the \"clear craze\" of the 1990s that produced products such as Crystal Pepsi and Tab Clear.",
          },
          {
            state: "value",
            text: "A cousin to the long island iced tea,  this colorful drink is one of the strongest cocktails you can drink. Hasta la vista, baby.",
          },
          {
            state: "value",
            text: "Coming in at 8.1% AVB, this 40-ounce imbibe comes in both Black and Silver labels.",
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
            text: "First-team All-ACC in 1987, this NBA player was the shortest to ever play coming in at 5 ft 3 in",
          },
          {
            state: "value",
            text: "In 1994, this athlete became embroiled in controversy when her ex-husband orchestrated an attack on her fellow U.S. skating rival Nancy Kerrigan.",
          },
          {
            state: "value",
            text: "Born in Portland, Oregon this MLB player played as an outfielder, catcher, and first baseman winning consecutive MVP's, 4 Slugger Awards and 5 Gold Gloves.",
          },
          {
            state: "value",
            text: "Winning a gold medal at the 1964 Summer Olympics, this fighter was the first to beat Muhammad Ali.",
          },
          {
            state: "value",
            text: "This running back in 2015, at the age of 30 became the oldest in NFL history to be named first-team All-Pro.",
          },
          {
            state: "value",
            text: "This two-time Olympic gold medalist, and two-time FIFA Women's World Cup champion was hailed as a soccer icon, she played as a forward for the United States women's national soccer team from 1987 to 2004.",
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
          },
          {
            state: "value",
            text: "This fiber obtained from goats has been used to make yarn, textiles and clothing for hundreds of years.",
          },
          {
            state: "value",
            text: "A synthetic fiber known for its exceptional elasticity",
          },
          {
            state: "value",
            text: "Made from the underside of the animal skin, which is softer and more pliable than, though not as durable as, the outer skin layer.",
          },
          {
            state: "value",
            text: "A type of woven tufted fabric in which the cut threads are evenly distributed, with a short dense pile, giving it a distinctive soft feel.",
          },
          {
            state: "value",
            text: "A type of textile weave with a pattern of diagonal parallel ribs. It is one of three fundamental types of textile weaves along with plain weave and satin.",
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
            text: "c4_one_ans",
          },
          {
            state: "value",
            text: "c4_two_ans",
          },
          {
            state: "value",
            text: "c4_three_ans",
          },
          {
            state: "value",
            text: "c4_four_ans",
          },
          {
            state: "value",
            text: "c4_five_ans",
          },
          {
            state: "value",
            text: "c4_six_ans",
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
            text: "An American singer, songwriter, actress, author, businesswoman, and humanitarian, known primarily for he massive sweater melons.",
          },
          {
            state: "value",
            text: "Donning tiggo bitties, she is best known for her numerous appearances in Playboy, her work on Home Improvement, Baywatch, and V.I.P.",
          },
          {
            state: "value",
            text: "Meat dress, little monsters and huge Headlamps.",
          },
          {
            state: "value",
            text: "An American media personality, socialite, and model she first gained media attention as a friend and stylist of Paris Hilton.",
          },
          {
            state: "value",
            text: "Films she has acted in have grossed over $6 billion worldwide, and she was the world's highest-paid actress in 2015 and 2016. She shares initials with a former In Living Color dancer.",
          },
          {
            state: "value",
            text: "Heather Graham and her \"twins\" where front and center as Roller Girl in this 1997 drama.",
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
            text: "She rose to prominence as the lead vocalist of the alternative rock band Hole, which she formed in 1989.",
          },
          {
            state: "value",
            text: "This furniture outlet is located on SW Cascade Ave, Beaverton, OR",
          },
          {
            state: "value",
            text: "A place to shoot hoops.",
          },
          {
            state: "value",
            text: "Its the highest in the land.",
          },
          {
            state: "value",
            text: "She gained recognition for her starring role as Monica on the NBC sitcom Friends.",
          },
          {
            state: "value",
            text: "A surname of German origin. The name was first found in Saxony. It means, \"charcoal burner\".",
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