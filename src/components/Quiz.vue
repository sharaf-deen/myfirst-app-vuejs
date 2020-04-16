<template>

<div>
  <h1>{{ quiz.title }}</h1>
  <div v-for="(question, index) in quiz.questions" :key="index">
    <div v-show="index === questionIndex">
      <h2>{{ question.text }}</h2>
      <ol>
        <li v-for="(response, index) in question.responses" :key="index">
          <label>
            <input type="radio" 
                   v-bind:value="response.correct" 
                   v-bind:name="index" 
                   v-model="userResponses[index]"> {{response.text}}
          </label>
        </li>
      </ol>
      <button v-if="questionIndex > 0" v-on:click="prev">prev</button>
      <button v-on:click="next">next</button>
    </div>
  </div>
  <div v-show="questionIndex === quiz.questions.length">
    <h2>Quiz finished</h2>
    <p>Total score: {{ score() }} / {{ quiz.questions.length }}</p>
    <button v-on:click="restart">restart</button>
  </div>
</div>
  
</template>


<script>

var quiz = {
      title: "Quiz",
      questions: [
         {
            text: "Question 1",
            responses: [
              {text: 'Wrong answer.'}, 
              {text: 'Right answer.', correct: true}, 
            ]
          }, 
          {
            text: "Question 2",
            responses: [
              {text: 'Right answer.', correct: true}, 
              {text: 'Wrong answer.'}, 
            ]
          }, 
      ]
};

export default {
  data() {
    return {
      quiz: quiz,
      questionIndex: 0,
      userResponses: Array(quiz.questions.length).fill(false),
    }
   },
   methods: {
    next: function() {
      this.questionIndex++;
    },
    prev: function() {
      this.questionIndex--;
    },
    score: function() {
      return this.userResponses.filter(function(val) { return val }).length;
    },
    restart: function(){
			 	this.questionIndex=0;
		 		this.userResponses=Array(quiz.questions.length).fill(null);
		 },
  }
}
</script>