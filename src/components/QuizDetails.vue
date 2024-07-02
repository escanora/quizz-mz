<template>
  <div id="quiz-details" class="container">
    <div class="row my-4">
      <div class="col-12">
        <a @click="goBack" class="btn btn-outline-primary mb-3">
          <i class="bi bi-arrow-left"></i> Retour
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">{{ quiz.titre }}</h2>
            <p class="card-text">{{ quiz.description }}</p>
            <p class="card-text">Durée du Quiz: {{ quiz.duree }} minutes</p>
            <button @click="startQuiz" class="btn btn-primary">Participer au Quiz</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Phrase de Motivation</h5>
            <p class="card-text">Vous êtes sur le point de tester vos connaissances. Bonne chance!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'QuizDetails',
  data() {
    return {
      quiz: {}
    };
  },
  created() {
    this.fetchQuizDetails();
  },
  methods: {
    fetchQuizDetails() {
      const quizId = this.$route.params.id;
      axios.get(`/api/quizzes/${quizId}`)
        .then(response => {
          this.quiz = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    goBack() {
      this.$router.go(-1);
    },
    startQuiz() {
      this.$router.push({ name: 'ReglePage', params: { id: this.quiz.id } });
    }
  }
};
</script>

<style scoped>
#quiz-details {
  font-family: Arial, sans-serif;
}

.btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:hover {
  background-color: #007bff;
  color: white;
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
