<template>
  <div id="quiz-page" class="container">
    <div class="row my-4">
      <div class="col-12 text-center">
        <h1>{{ quiz.titre }}</h1>
      </div>
    </div>
    <div v-if="currentQuestion < quiz.questions.length" class="row">
      <div class="col-md-8 offset-md-2">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Question {{ currentQuestion + 1 }}</h3>
            <p class="card-text">{{ quiz.questions[currentQuestion].texte }}</p>
            <div v-if="quiz.questions[currentQuestion].fichier">
              <img :src="quiz.questions[currentQuestion].fichier" class="img-fluid" alt="Question Image">
            </div>
            <div class="mt-4">
              <div v-for="(option, index) in quiz.questions[currentQuestion].options" :key="index" class="form-check">
                <input class="form-check-input" type="radio" :name="'question' + currentQuestion" :id="'option' + index" :value="option" v-model="selectedOption">
                <label class="form-check-label" :for="'option' + index">
                  {{ option }}
                </label>
              </div>
            </div>
            <button @click="nextQuestion" class="btn btn-primary mt-4" :disabled="!selectedOption">Suivant</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <div class="col-12 text-center">
        <h2>Merci d'avoir complété le quiz!</h2>
        <p>Vos résultats seront bientôt disponibles.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'QuizzPage',
  data() {
    return {
      quiz: {
        id: 1,
        titre: 'Nom du Quiz',
        questions: []
      },
      currentQuestion: 0,
      selectedOption: null
    };
  },
  created() {
    this.fetchQuizQuestions();
  },
  methods: {
    fetchQuizQuestions() {
      const quizId = this.$route.params.id;
      axios.get(`/api/quizzes/${quizId}/questions`)
        .then(response => {
          this.quiz = response.data;
          this.quiz.questions.forEach(question => {
            axios.get(`/api/questions/${question.id}/options`)
              .then(res => {
                question.options = res.data.map(option => option.texte);
              })
              .catch(error => {
                console.error(error);
              });
          });
        })
        .catch(error => {
          console.error(error);
        });
    },
    nextQuestion() {
      if (this.selectedOption) {
        // Enregistrer la réponse de l'utilisateur ici
        this.selectedOption = null;
        this.currentQuestion++;
      }
    }
  }
};
</script>

<style scoped>
#quiz-page {
  font-family: Arial, sans-serif;
}

.card {
  margin-top: 20px;
}

.card-body {
  text-align: left;
}

.form-check {
  margin-bottom: 10px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
