<template>
  <div id="home-page" class="container">
    <div class="row my-4">
      <div class="col-12">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Recherche de Quiz" v-model="searchQuery" @input="searchQuizzes">
          <span class="input-group-text"><i class="bi bi-search"></i></span>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-if="quizzes.length === 0" class="col-12 text-center">
        <p>Aucun quizz trouvé.</p>
      </div>
      <div v-else v-for="quiz in quizzes" :key="quiz.id" class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">{{ quiz.titre }}</h3>
            <p class="card-text">{{ quiz.description }}</p>
            <button @click="viewQuizDetails(quiz.id)" class="btn btn-primary">Voir les détails</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      quizzes: [],
      searchQuery: ''
    };
  },
  created() {
    this.fetchQuizzes();
  },
  methods: {
    fetchQuizzes() {
      axios.get('/api/quizzes')
        .then(response => {
          this.quizzes = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    searchQuizzes() {
      axios.get(`/api/quizzes?search=${this.searchQuery}`)
        .then(response => {
          this.quizzes = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    viewQuizDetails(quizId) {
      this.$router.push({ name: 'QuizDetails', params: { id: quizId } });
    }
  }
};
</script>

<style scoped>
#home-page {
  font-family: Arial, sans-serif;
}
</style>
