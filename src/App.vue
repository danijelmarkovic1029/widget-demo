<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="text-h6 logo-container">
        <img :src="require('@/assets/proptexx-logo.svg')" alt="P" class="logo-gif mt-2" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/">Houses</v-btn>
      <v-btn text to="/properties">Townhomes</v-btn>
      <v-btn text to="/apartments">Apartments</v-btn>
      <v-btn text to="/contact">Help</v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="main-container">
        <router-view />
      </v-container>
    </v-main>

    <v-footer app color="primary" dark>
      <v-col class="text-center">
        <span>&copy; 2024 Real Estate App - All Rights Reserved</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
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
}

.main-container {
  max-width: 100vw !important;
  padding: 0 !important;
  margin: 0px !important;
}
</style>