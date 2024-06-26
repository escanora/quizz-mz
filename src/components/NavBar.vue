<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Quiz App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/quiz-creation" class="nav-link">Quiz Creation</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/question-management" class="nav-link">Question Management</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/answer-management" class="nav-link">Answer Management</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/quiz-edit-delete" class="nav-link">Quiz Edit/Delete</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #f8f9fa;
    padding: 20px;
  }
  
  .navbar-brand {
    font-weight: bold;
  }
  
  .navbar-nav {
    display: flex;
    justify-content: space-between;
  }
  
  .nav-link {
    color: #333;
    padding: 5px 10px;
    text-decoration: none;
  }
  
  .nav-link:hover {
    background-color: #eee;
  }
  </style>