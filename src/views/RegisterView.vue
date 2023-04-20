<script setup>
</script>

<template>
    <div>
        <div class="row">

            <div class="col mb-5 d-flex justify-content-center">
                <img class="logo1-size" src="public\logo_embasa.png">
            </div>
        </div>

        <div class="row ">
            <div class="col d-flex justify-content-center ">
                <div class="card" style="color:gainsboro">
                    <div class="card-body">
                        <form>

                            <div class="row">

                                <div class="col-sm-6 ">
                                    <label  class="form-label">Nome</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1">

                                    <label  class="form-label">Sobrenome</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1">

                                    <label  class="form-label">E-mail</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1">

                                    <label  class="form-label">Tipo de conta</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1">

                                    <label  class="form-label">Senha</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1">

                                    <label  class="form-label">Repetir senha</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1">
                                </div>

                                <div class="col-sm-6">
                                    <label for="exampleInputEmail1" class="form-label">CPF</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1">

                                    <label for="exampleInputEmail1" class="form-label">Data de nascimento</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1">

                                    <label for="exampleInputEmail1" class="form-label">Cidade</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1">

                                    <label for="exampleInputEmail1" class="form-label">CEP</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1">

                                    <label for="exampleInputEmail1" class="form-label">Número</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1">

                                    <label for="exampleInputEmail1" class="form-label">Tipificação da residência</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1">
                                </div>

                                <div class="mt-4 col-sm-6 d-flex justify-content-center">
                                    
                                    <button class="btn btn-secondary register-button" type="button">Cancelar</button>
                                </div> 

                                <div class="mt-4 col-sm-6 d-flex justify-content-center">
                                    <button class="btn btn-primary register-button" type="button">Cadastrar</button>
                                </div> 
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
    width: 120px;
    height: 60px;
}

.logo2-size {
    width: 120px;
    height: 60px;
}

.card{
    border: 3px ;
    width: auto;
}
    .card-body {
    background-color: #1a3d63;
}

.register-button{
    width: 70%;

}
</style>