<template>
  <Topbar/>
  <div class="body-index">
      <div class="d-flex justify-content-center ">
        <h2 class="mt-4">Solicitações de Atendimento</h2>
      </div>
      <div class="row mt-2 d-flex justify-content-center">
        <div class="box-item me-5 mt-4 shadow d-flex align-items-end col-6">
          <h5>Esgotamento sanitário</h5>
        </div>
        <div class="box-item  mt-4 shadow  d-flex align-items-end col-6">
          <h5>Falta de água</h5>
        </div>

        <div class="box-item me-5  mt-4  d-flex align-items-end shadow col-6">
          <h5>Erro na leitura do hidrômetro</h5>
        </div>
        <div class="box-item  mt-4 shadow  d-flex align-items-end col-6">
          <h5>Vazamento de água</h5>
        </div>

        <div class="box-item mt-4 me-5 shadow  d-flex align-items-end col-6">
          <h5>Perguntas frequentes</h5>
        </div>
        <div class="box-item  mt-4 shadow  d-flex align-items-end col-6">
          <h5>Religação de água</h5>
        </div>

      </div>

  </div>
</template>

<script setup>
import Topbar from '../components/Topbar.vue'

</script>

<style scoped>
.body-index{
  width: 100%;
  height: 535px;
  background-color: white;
}

.box-item{
  width: 500px;
  height: 100px;
  background-color: #F5F5F5;
  border-radius: 6px;
  border-bottom: 4px solid;
  border-color: #1a3d63;

}
</style>