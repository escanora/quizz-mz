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
            </div>
        </div>
    </nav>
      <h1>Historique Page</h1>
      <input type="search" name="search" placeholder="Recherche de Quiz">
      <table>
        <tr>
          <td>Recent Quiz</td>
        </tr>
        <tr>
          <td>Recent Quiz</td>
        </tr>
        <tr>
          <td>Recent Quiz</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HistoricPage',
  };
  </script>
  