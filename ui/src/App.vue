<template>
  <div class="text-center py-5 bg-light">
    <!-- Header Section -->
    <div class="d-flex justify-content-between align-items-center px-4">
      <img src="./assets/nhk_logo.png" alt="NHK Logo" class="img-fluid" style="height: 40px;" />
    </div>

    <!-- Main Content -->
    <div class="mt-4">
      <!-- Election Logo -->
      <img src="./assets/nhk_logo.png" alt="Election 2024" class="img-fluid mb-3" style="height: 80px;" />
      <h2 class="h5">人気番組 ボートマッチ</h2>
      <img src="./assets/vote_logo.png" alt="Vote Icon" class="img-fluid my-4" style="width: 150px; height: auto;" />
      <p>あなたの好きな番組をお選びください。</p>
    </div>

    <!-- Start Button -->
    <button class="btn btn-danger btn-lg rounded-pill mt-4" @click="startVoting">
      スタートする
    </button>

    <!-- Footer Button -->
    <div class="mt-4">
      <button class="btn btn-outline-secondary rounded-pill px-4" @click="showInfo">
        仕組み
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VoteMatchApp",
  methods: {
    startVoting() {
      // Lógica para iniciar a votação
      alert("Iniciando a votação...");
    },
    showInfo() {
      // Lógica para mostrar informações
      alert("Aqui estão as informações sobre o sistema.");
    }
  }
};
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>
