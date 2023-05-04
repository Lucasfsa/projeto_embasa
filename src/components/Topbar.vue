<template>
  <nav class="navbar navbar-expand-lg topbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/logo_embasa.png" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Pesquisar..." aria-label="Search">
          <button class="btn btn-primary me-4"  type="submit">Buscar</button>
        </form>
        <span> <img src="/user.png"></span>

      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "Topbar"
}
</script>

<style scoped>
.navbar{
  background-color: #234F7E;
}

.footer{
  height: 60px;
  width:100%;
  background-color: white;
  position: fixed;
  bottom: 0;
}
</style>