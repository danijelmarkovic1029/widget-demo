<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="text-h6 logo-container">
        <img :src="require('@/assets/proptexx-logo.svg')" alt="P" class="logo-gif mt-2" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Navigation Links -->
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/properties">Properties</v-btn>
      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/contact">Contact</v-btn>
    </v-app-bar>

    <!-- Router View for Page Content -->
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <!-- Footer (Optional) -->
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
</style>