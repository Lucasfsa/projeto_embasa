<script setup>
</script>

<template>
    <div>
        <div class="row justify-content-start">

            <div class="col-12 logo1-size">
                <img src="public\logo_embasa.png">
            </div>

            <div class="col-12 logo2-size">
                <img src="public/logo_projeto.png">
            </div>
        </div>

        <div class="row ">
            <div class="col d-flex justify-content-center ">
                <div class="card" style="color:gainsboro">
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">E-mail</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Senha</label>
                                <input type="password" class="form-control" id="exampleInputPassword1">
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Cliente</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Colaborador</label>
                            </div>
                            <div class="d-grid gap-2 mb-2">
                                <button class="btn btn-primary" type="button">Entrar</button>
                            </div>
                            <p>Recuperar minha senha</p>
                            <div class="d-grid gap-2 mt-2">
                                <button class="btn btn-primary" type="button">Cadastre-se</button>
                            </div> 
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.logo1-size {
    width: 198;
    height: 95px;
}

.logo2-size {
    width: 142px;
    height: 77px;
}

.card{
    border: 3px ;
    width: 350px;
}
    .card-body {
    background-color: #1a3d63;
}
</style>