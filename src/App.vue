<template>
  <v-app>
    <v-app-bar class="header" app color="primary" dark>
      <v-toolbar-title class="text-h6 logo-container">
        <img src="https://irp.cdn-website.com/cba281d9/dms3rep/multi/Logo_white.svg" alt="P" class="logo-gif mt-2" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/">Houses</v-btn>
      <v-btn text to="/properties">Townhomes</v-btn>
      <v-btn text to="/apartments">Apartments</v-btn>
      <v-btn text to="/contact">Help</v-btn>
    </v-app-bar>
a63721
d7674a
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
};
</script>

<style>
.header, .footer {
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
}

.main-container {
  max-width: 100vw !important;
  padding: 0 !important;
  margin: 0px !important;
}
</style>