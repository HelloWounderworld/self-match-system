<template>
  <div class="app-container">
    <!-- Header Section -->
    <header class="header">
      <img src="./assets/logo.jpeg" alt="NHK Logo" class="logo" />
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Election Logo -->
      <img src="./assets/logo.jpeg" alt="Election 2024" class="election-logo" />
      <h2 class="title">人気番組ボートマッチ</h2>
      <img src="./assets/vote_logo.png" alt="Vote Icon" class="vote-icon" />
      <p class="description">あなたの好きな番組は？</p>

      <!-- Start Button -->
      <button class="start-button">スタートする</button>
    </main>

    <!-- Footer Section -->
    <footer class="footer">
      <button class="footer-button">仕組み</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "VoteMatchApp",
};
</script>

<style scoped>
/* General Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.app-container {
  text-align: center;
  background-color: #f8f9fa; /* Light background */
  padding: 20px;
  min-height: 100vh;
}

/* Header */
.header {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
}

.logo {
  height: 40px;
}

/* Main Content */
.main-content {
  margin-top: 30px;
}

.election-logo {
  height: 80px;
  margin-bottom: 20px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.vote-icon {
  width: 150px;
  height: auto;
  margin: 20px 0;
}

.description {
  font-size: 14px;
  color: #555;
  margin-bottom: 30px;
}

/* Start Button */
.start-button {
  background-color: #f44336; /* Red color */
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

.start-button:hover {
  background-color: #d32f2f;
}

/* Footer */
.footer {
  margin-top: 30px;
}

.footer-button {
  background-color: transparent;
  border: 2px solid #ccc;
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 14px;
  cursor: pointer;
}

.footer-button:hover {
  border-color: #aaa;
}
</style>