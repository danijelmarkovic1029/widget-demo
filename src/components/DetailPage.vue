<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
				
				<v-btn class="mb-4" @click="goBack" color="deep-purple" text>
          Back to search
        </v-btn>

        <v-card>
          <v-card-title>{{ title }}</v-card-title>
          <v-card-subtitle>{{ subtitle }}</v-card-subtitle>

          <v-card-text>
						<v-img :src="image" height="300" cover></v-img>
            <p>{{ description }}</p>
          </v-card-text>

          <v-card-item>
            <v-card-title class="title">{{ title }}</v-card-title>
  
            <v-card-subtitle>
              <span class="me-1">{{ subtitle }}</span>
              <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>
          </v-card-item>
  
          <v-card-text>
            <div class="my-4 text-subtitle-1">{{ price }}</div>
            <div>{{ description }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['title'],
  computed: {
    subtitle() {
      return this.$route.query.subtitle;
    },
    image() {
      return this.$route.query.image;
    },
    price() {
      return this.$route.query.price;
    },
    description() {
      return this.$route.query.description;
    },
  },
	methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
	mounted() {
  },
};
</script>

<style scoped>

.title {
  text-transform: none;
  font-family: "Object Sans", "Adjusted Arial", Tahoma, Geneva, sans-serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
}

.text-subtitle-1 {
  font-size: 16px;
  color: grey;
}

.v-card-title {
  font-size: 24px;
  font-weight: bold;
}

.v-card-subtitle {
  font-size: 18px;
  color: #555;
}
</style>