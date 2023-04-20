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
                            <div class="row">
                               
                                <div class="col-12 mb-3 d-flex justify-content-center">
                                    <img class="logo-1" src="public\verificacao.png">
                                </div>
                                <div class="col-12  d-flex justify-content-center">
                                    <p>Senha alterada com sucesso!</p>
                                </div>  
                                <div class="col-12  d-flex justify-content-center">
                                    <p>Parabéns! Agora pode voltar a acessar a plataforma</p>
                                </div>   
                            
                                <div class="mt-4 col-sm-12 d-flex justify-content-center">
                                    <button class="btn btn-secondary register-button" type="button">Voltar</button>
                                </div> 

                            </div>

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

.logo-1{
    width: 60px;
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
    width:40%;

}
</style>