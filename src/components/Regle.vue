<template>
  <div id="regle-page" class="container">
    <div class="row my-4">
      <div class="col-12 text-center">
        <h1>Bienvenue au Quiz!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Règles du Quiz</h3>
            <ul>
              <li>Vous allez répondre à une série de questions.</li>
              <li>Chaque question a une seule réponse correcte.</li>
              <li>Vous disposez d'un temps limité pour répondre à chaque question.</li>
              <li>À la fin du quiz, vous recevrez vos résultats.</li>
            </ul>
            <p>Êtes-vous prêt à commencer?</p>
            <button @click="startQuiz" class="btn btn-primary">Commencer le Quiz</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Conseils</h5>
            <p class="card-text">Prenez votre temps pour lire attentivement chaque question.</p>
            <p class="card-text">Assurez-vous de sélectionner la réponse qui vous semble correcte.</p>
            <p class="card-text">N'oubliez pas de profiter de l'expérience du quiz!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReglePage',
  methods: {
    startQuiz() {
      const quizId = this.$route.params.id;
      this.$router.push({ name: 'QuizzPage', params: { id: quizId } });
    }
  }
};
</script>

<style scoped>
#regle-page {
  font-family: Arial, sans-serif;
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
