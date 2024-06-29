<template>
  <div id="cont">
    <header>
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
                  <a class="nav-item nav-link" href="/descrip">Descrip</a>
              </div>
          </div>
      </nav>
    </header>
    <section>
      <div>
        <div id="search">

          <input type="search" name="search" placeholder="Recherche de Quiz">

        </div>
      </div>
    </section>
    <aside>
      <div id="present">
        <button id="gauche">Left</button>
        Présentation du Quiz
        <button id="doite">Rigth</button>
      </div>
    </aside>
    <footer>
        <div id="profil">
          <p>Username</p>
          <p>Identifiant</p>
        </div>
    </footer>
  </div>
</template>
  
<script>
export default {
  name: 'HomePage',
};
</script>
  
<style scoped>

</style>