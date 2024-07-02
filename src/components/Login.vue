<template>
    <section class="ftco-section">
        <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-6 text-center mb-5"></div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4">
                    <div class="login-wrap p-4 shadow-lg rounded-lg">
                        <h4 class="mb-4 text-center">Bienvenue sur le Quizz MangaZone</h4>
                        <form action="#" class="signin-form">
                            <div class="form-group mb-3">
                                <input type="text" class="form-control" placeholder="Nom d'utilisateur" required>
                            </div>
                            <div class="form-group mb-3 position-relative">
                                <input id="password-field" type="password" class="form-control" placeholder="Mot de passe" required>
                                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                            </div>
                            <div class="form-group mb-4">
                                <button type="submit" class="btn btn-primary btn-block submit">Se connecter</button>
                            </div>
                            <div class="form-group text-center mb-3">
                                <a href="#" style="color: #ffff;">Mot de passe oublié ?</a>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-outline-secondary btn-block submit">Continuez en tant qu'invité</button>
                            </div>
                            <p class="form-group mb-3 mt-2">Pas de compte ?
                              <a href="#" style="color: #ffff;"> S'inscrire</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LoginPage'
}
</script>

<style scoped>
.login-wrap {
    background: linear-gradient(135deg, #3498db, #8e44ad);
    color: #fff;
}

.signin-form {
    background-color: transparent;
}

.field-icon {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    cursor: pointer;
}

.btn-primary {
    background-color: #1abc9c;
    border-color: #1abc9c;
}

.btn-primary:hover {
    background-color: #16a085;
    border-color: #16a085;
}

.btn-outline-secondary {
    color: #fff;
    border-color: #fff;
}

.btn-outline-secondary:hover {
    background-color: #fff;
    color: #1abc9c;
    border-color: #1abc9c;
}
</style>
