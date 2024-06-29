<template>
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
    <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Login #10</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-6 col-lg-4">
					<div class="login-wrap p-0">		          	<h3 class="mb-4 text-center">Have an account?</h3>
                    <form action="#" class="signin-form">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Username" required>
                    </div>
                    <div class="form-group">
                    <input id="password-field" type="password" class="form-control" placeholder="Password" required>
                    <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="form-control btn btn-primary submit px-3">S'inscrire</button>
                    </div>
                    <div class="form-group d-md-flex">
                        <div class="w-50">
                            <label class="checkbox-wrap checkbox-primary">Remember Me
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="w-50 text-md-right">
                                        <a href="#" style="color: #fff">Forgot Password</a>
                                    </div>
                    </div>
                  </form>
                      <button>inscrireS'</button>
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

<style lang="scss" scoped>

</style>