<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                  <a class="nav-item nav-link active" href="/accueil">Accueil</a>
                  <a class="nav-item nav-link" href="/login">Login</a>
                  <a class="nav-item nav-link" href="/historic">Historique</a>
                  <a class="nav-item nav-link" href="/finquiz">FinQuiz</a>
                  <a class="nav-item nav-link" href="/Page5">Remerciement pour l'inscription</a>
                  <a class="nav-item nav-link" href="/Page6">avant le debut des quiz</a>
                  <a class="nav-item nav-link" href="/quiz">Quiz</a>
                  <a class="nav-item nav-link" href="/descrip">description</a>
                  <a class="nav-item nav-link" href="/score">score</a>
              </div>
          </div>
      </nav>
    <a href="#">Retour</a><strong>Quizz "nom du Quiz"</strong><a href="#">Voir</a>
    <p>Q1: Qui est Goku?</p>
    <input type="text" placeholder="Saisir le résultat">
    Timer....
    <a href="#">Passer</a>
  </div>
</template>

<script>
export default {
    name:'quiz_'
}
</script>

<style>

</style>