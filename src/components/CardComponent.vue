<template>
  <div @click="showDetails" @mouseover="hover = true" @mouseleave="hover = false">
    <v-card
      :disabled="loading"
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
      :elevation="hover ? 10 : 2"
      :class="{ 'hover-effect': hover }"
      transition="scale-transition"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate />
      </template>

      <v-img :src="image" height="250" cover></v-img>

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

      <v-divider class="mx-4 mb-1"></v-divider>

      <v-card-actions>
        <v-btn color="deep-purple-lighten-2" text="Reserve" block border @click.stop="reserve">
          Rent
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="dialog" max-width="600px">
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
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: 'Local Favorite',
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    price: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    availableTimes: {
      type: Array,
      default: () => ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hover: false,
      dialog: false,
      selection: '',
    };
  },
  methods: {
    reserve() {
      alert('Reservation made!');
    },
    showDetails() {
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
.hover-effect {
  transform: scale(1.05);
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
	cursor: pointer;
}

.title {
  text-transform: none;
  font-family: "Object Sans", "Adjusted Arial", Tahoma, Geneva, sans-serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
}
</style>
