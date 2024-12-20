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
            <button class="start-button" @click="start">スタートする</button>
        </main>

        <!-- Footer Section -->
        <footer class="footer">
            <button class="footer-button">仕組み</button>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Home",
    methods: {
        start() {
            this.$router.push('/themes');
        }
    }
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
    background-color: #f8f9fa;
    padding: 2vw;
    min-height: 100vh;
}

/* Header */
.header {
    display: flex;
    justify-content: flex-end;
    padding: 1vw 2vw;
}

.logo {
    height: 5vh;
}

/* Main Content */
.main-content {
    margin-top: 3vh;
}

.election-logo {
    height: 10vh;
    margin-bottom: 2vh;
}

.title {
    font-size: 3vw;
    font-weight: bold;
    margin-bottom: 2vh;
}

.vote-icon {
    width: 20vw;
    height: auto;
    margin: 2vh 0;
}

.description {
    font-size: 2vw;
    color: #555;
    margin-bottom: 3vh;
}

/* Start Button */
.start-button {
    background-color: #f44336;
    color: white;
    font-size: 2.5vw;
    padding: 1vw 2vw;
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
    margin-top: 3vh;
}

.footer-button {
    background-color: transparent;
    border: 2px solid #ccc;
    padding: 1vw 2vw;
    border-radius: 50px;
    font-size: 2vw;
    cursor: pointer;
}

.footer-button:hover {
    border-color: #aaa;
}
</style>
