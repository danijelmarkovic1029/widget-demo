<template>
  <v-app>
    <v-app-bar class="header" app color="primary" dark>
      <v-toolbar-title class="text-h6 logo-container">
        <img src="https://irp.cdn-website.com/cba281d9/dms3rep/multi/Logo_white.svg" @click="this.$router.push('/')"
          alt="P" class="logo-gif mt-2" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/">Houses</v-btn>
      <v-btn text to="/properties">Townhomes</v-btn>
      <v-btn text to="/apartments">Apartments</v-btn>
    </v-app-bar>
    <v-main>
      <v-container class="main-container">
        <router-view />
      </v-container>
    </v-main>

    <v-footer class="footer" app color="primary" dark>
      <v-col class="text-center">
        <span>&copy; 2024 Real Estate App - All Rights Reserved</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.loadExternalWidget();
  },
  methods: {
    loadExternalWidget() {
      if (!customElements.get('proptexx-widget')) {
        const script = document.createElement('script');
        script.src = 'https://static.proptexx.com/copilot/loader.js?k=MzkwNGQ3YTctYmRkZS00MDUxLWJjZTAtMzFiYmNjNmY1MmU0fGU0MGM4ZjkxLWY0NjYtNGMxZC05ZGM3LWJiZjhmNjIwMjIxOA';
        script.async = true;
        document.head.appendChild(script);
      } else {
        console.log('proptexx-widget already registered.');
      }
    }
  }
};
</script>

<style>
.v-main {
  padding-top: 90px !important;
}
.header,
.footer {
  background: linear-gradient(to bottom, #a63721, #d7674a) !important;
  padding: 7px 0;
}

nav {
  display: flex;
  gap: 20px;
  padding: 10px;
  background-color: #f5f5f5;
}

nav a {
  text-decoration: none;
  color: #333;
}

.logo-gif {
  width: 180px;
  cursor: pointer;
}

.main-container {
  max-width: 100vw !important;
  padding: 0 !important;
  margin: 0px !important;
}
</style>