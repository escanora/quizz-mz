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
    <div id="present">
        
        <div class="container">
        <div class="row">
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            </div>
              <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title"></h3>
                    <div> 
                        
                        <a href="accueil">left</a>
                        <h2>description du QUiz</h2>
                        <p>Modo/Date/Heure</p>
                        <button id="participe">Participer</button>
                        <h3>Phrase de motivation</h3>
                    </div>
                  </div>
                </div>
              </div>
             
        </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: 'DescP'
}
</script>

<style>

</style>