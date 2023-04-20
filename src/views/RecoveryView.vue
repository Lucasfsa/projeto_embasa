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
                               
                                <div class="col-12 mb-3 d-flex justify-content-center">
                                    <h5>Recuperar senha</h5>
                                </div>
                                <div class="col-12">
                                    <p>Preencha abaixo o seu e-mail que nós enviaremos as instruções para recuperar a sua senha.</p>
                                </div>    
                                <div class="col-12 ">
                                    <label  class="form-label">E-mail</label>
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

.card {
    border: 3px;
    width: 500px;
}

.card-body {
    background-color: #1a3d63;
}
.register-button{
    width: 70%;

}
</style>