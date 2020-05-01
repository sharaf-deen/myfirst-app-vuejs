<template>
    <div v-if="questions.length" class="quiz container header center">
      <router-link to="/">
        <a class="btn-floating disabled btn-large"><i class="material-icons">home</i></a>
      </router-link>
      <br><br><br>
        <h3 class="center-align grey-text" v-html="index+1 + ' of 10'"></h3>
        <h3 class="center-align deep-purple-text" v-html="currentQuestion.question"></h3>
        <br>
        <div v-for="(answer, index) in shuffledAnswers" :key="index" class="answers">
          <button class="chip" @click="selectAnswer(index)" :class="submitClass(index)" v-html="answer"></button>
        </div>
        <br>
        <div class="actions">
          <button :disabled="index >= 9 || submitted" id="next" @click="skip">Skip</button>
          <button
            id="submit"
            @click="submitAnswer"
            :disabled="submitted || selectedIndex === null"
          >Submit</button>
        </div>
      </div>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";

export default {
  name: "Question",
  props: {
    category: String
  },
  data() {
    return {
      questions: [],
      index: 0,
      selectedIndex: null,
      shuffledAnswers: [],
      correctIndex: null,
      submitted: false
    };
  },
  mounted() {
    this.$store.dispatch("getQuestions", this.category)
    .then(() => {
      this.questions = this.$store.state.questions;
      this.$store.dispatch("resetDefault");
      // console.log(this.questions)
    });
    
  },
  computed: {
    answers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer
      ];
      return answers;
    },
    currentQuestion() {
      return this.questions[this.index];
    },
    ...mapGetters(["numTotal", "numCorrect"])
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        if (this.questions.length) {
          this.selectedIndex = null;
          this.submitted = false;
          this.shuffleAnswers();
        }
      }
    }
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },
    shuffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer
      ];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentQuestion.correct_answer
      );
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.$store.dispatch("incrementNumCorrect");
      }
      this.$store.dispatch("incrementNumTotal");
    },
    skip() {
      this.next();
      this.increment(false);
    },
    next() {
      this.index++;
    },
    submitAnswer() {
      let isCorrect = false;

      if (this.correctIndex === this.selectedIndex) {
        isCorrect = true;
      }
      this.submitted = true;

      this.increment(isCorrect);
      setTimeout(() => {
        if (this.index < 9) {
          this.next();
        } else {
          this.$router.push("/result");
        }
      }, 2000);
    },
    submitClass(index) {
      let submit = "answer";
      if (this.submitted && this.correctIndex === index) {
        submit = "answer correct";
      } else if (
        this.submitted &&
        this.selectedIndex !== this.correctIndex &&
        this.selectedIndex === index
      ) {
        submit = "answer wrong";
      } else if (!this.submitted && this.selectedIndex === index) {
        submit = "answer selected";
      }

      return submit;
    }
  }
};
</script>

<style scoped>

.btn {
  background-color: whitesmoke
}

.quiz{
    margin-top: 60px;
    padding: 20px;
    max-width: 500px
}
.quiz h3{
    font-size: 2em;
    margin: 20px auto
}
.quiz .field{
    margin: 20px auto;
    position: relative
}


.quiz p {
  font-weight: bold;
  font-size: 1.1em;
}

.quiz .answers {
  display: flex;
  flex-direction: column;
}

.quiz .answers .answer {
  margin-bottom: 10px;
  font-size: 1.2em;
}

.quiz .actions {
  display: flex;
  justify-content: space-between;
}

.quiz .actions button {
  display: inline;
  width: 100px;
  color: #fff;
  border: none;
  padding: 15px;
  font-size: 1em;
  border-radius: 50px;
}

.quiz .actions button:focus {
  outline: none;
}

#submit {
  background: #673ab7;
}

#submit:disabled {
  background: #9e6ef1 !important;
  cursor: not-allowed;
}

#submit:hover {
  background: #9e6ef1;
}

#next {
  background:#e91e63;
}

#next:disabled {
  background: #e91e63 !important;
  cursor: not-allowed;
}

#next:hover {
  background:#eb5b8b;
}

.selected {
  background: #d0e2dd;
  border: 1px solid #d0e2dd;
}

.correct {
  background: #acdfba;
  border: 1px solid #acdfba;
}

.wrong {
  background: #ee8787;
  border: 1px solid #ee8787;
  color: #fff;
}

@media (max-width: 600px) {
  .quiz .actions {
    justify-content: center;
  }

  #submit {
    margin-left: 10px;
  }
}
</style>