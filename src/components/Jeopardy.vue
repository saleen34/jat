<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="cat in cats" :key="cat.id">
          <v-card class="pa-2" v-if="cat.show">
            {{ cat.name }}
          </v-card>
          <v-card class="pa-2" v-if="!cat.show"> BLANK </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-for="(n, answerIndex) in 6" :key="answerIndex">
      <v-row>
        <v-col v-for="(j, catIndex) in 6" :key="catIndex">
          <AnswerText
            :value="cats[catIndex].id"
            :answer="cats[catIndex].answers[answerIndex].text"
            :state="cats[catIndex].answers[answerIndex].state"
            @click.native="setSelected(catIndex, answerIndex)"
          >
          </AnswerText>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import AnswerText from "./AnswerText";

export default {
  name: "Jeopardy",
  components: {
    AnswerText,
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
  },
  props: {
    toggleCats: Boolean,
  },
  watch: {
    toggleCats(val) {
      for (let i = 0; i < 6; i++) {
        setTimeout(() => this.cats[i].show = val, 1000 * i);
      }
    },
  },
  data: () => ({
    cats: [
      {
        id: 100,
        show: false,
        name: "C1",
        answers: [
          {
            state: "value",
            text: "c1_one_ans",
          },
          {
            state: "value",
            text: "c1_two_ans",
          },
          {
            state: "value",
            text: "c1_three_ans",
          },
          {
            state: "value",
            text: "c1_four_ans",
          },
          {
            state: "value",
            text: "c1_five_ans",
          },
          {
            state: "value",
            text: "c1_six_ans",
          },
        ],
      },
      {
        id: 200,
        show: false,
        name: "C2",
        answers: [
          {
            state: "value",
            text: "c2_one_ans",
          },
          {
            state: "value",
            text: "c2_two_ans",
          },
          {
            state: "value",
            text: "c2_three_ans",
          },
          {
            state: "value",
            text: "c2_four_ans",
          },
          {
            state: "value",
            text: "c2_five_ans",
          },
          {
            state: "value",
            text: "c2_six_ans",
          },
        ],
      },
      {
        id: 300,
        show: false,
        name: "C3",
        answers: [
          {
            state: "value",
            text: "c3_one_ans",
          },
          {
            state: "value",
            text: "c3_two_ans",
          },
          {
            state: "value",
            text: "c3_three_ans",
          },
          {
            state: "value",
            text: "c3_four_ans",
          },
          {
            state: "value",
            text: "c3_five_ans",
          },
          {
            state: "value",
            text: "c3_six_ans",
          },
        ],
      },
      {
        id: 400,
        show: false,
        name: "C4",
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
        name: "C5",
        answers: [
          {
            state: "value",
            text: "c5_one_ans",
          },
          {
            state: "value",
            text: "c5_two_ans",
          },
          {
            state: "value",
            text: "c5_three_ans",
          },
          {
            state: "value",
            text: "c5_four_ans",
          },
          {
            state: "value",
            text: "c5_five_ans",
          },
          {
            state: "value",
            text: "c5_six_ans",
          },
        ],
      },
      {
        id: 600,
        show: false,
        name: "C6",
        answers: [
          {
            state: "value",
            text: "c6_one_ans",
          },
          {
            state: "value",
            text: "c6_two_ans",
          },
          {
            state: "value",
            text: "c6_three_ans",
          },
          {
            state: "value",
            text: "c6_four_ans",
          },
          {
            state: "value",
            text: "c6_five_ans",
          },
          {
            state: "value",
            text: "c6_six_ans",
          },
        ],
      },
    ],
  }),
};
</script>