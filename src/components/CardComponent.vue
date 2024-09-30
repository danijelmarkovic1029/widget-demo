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

      <div class="image-container">
        <v-img :src="image" height="250" cover></v-img>
        <div class="overlay-text">{{ houseType }}</div>
      </div>

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

      <v-card-actions class="view-property">
        <v-btn class="text-none" color="primary" variant="flat" text="Reserve" block @click.stop="showDetails">
          View Property
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

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
    houseType: {
      type: String,
      required: true,
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
    detail: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hover: false,
      dialog: false,
      selection: '',
    };
  },
  methods: {
    ...mapActions('property', ['updatePropertyDetails']),
    reserve() {
      alert('Reservation made!');
    },
    showDetails() {
      const data = {
        title: this.title,
        subtitle: this.subtitle,
        image: this.image,
        price: this.price,
        description: this.description,
        details: this.detail
      };
      this.updatePropertyDetails(data)
      this.$router.push({
        name: 'detail-page',
        params: { title: this.title },
      });
    },
  },
};
</script>

<style scoped>
.image-container {
  position: relative;
}

.overlay-text {
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: rgb(208, 60, 11);
  padding: 2px 10px;
  border-radius: 5px;
}

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

.view-property {
  max-width: 90%;
  margin: auto;
}
</style>
