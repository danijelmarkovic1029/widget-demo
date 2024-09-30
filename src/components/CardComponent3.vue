<template>
  <div @click="showDetails" @mouseover="hover = true" @mouseleave="hover = false">
    <v-card
      class="mx-auto"
      max-width="400"
      :elevation="hover ? 10 : 2"
      :class="{ 'hover-effect': hover }"
      transition="scale-transition"
      min-height="340"
    >
      <v-img class="align-end text-white" :src="imageSrc" height="200" cover>
        <v-card-title>{{ title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pt-4">{{ price }}</v-card-subtitle>

      <v-card-text>
        <div>{{ descriptionLine1 }}</div>
        <div>{{ descriptionLine2 }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    descriptionLine1: {
      type: String,
      required: true,
    },
    descriptionLine2: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      hover: false,
      dialog: false,
    };
  },
  methods: {
    showDetails() {
      this.$router.push({
        name: 'property-detail',
        params: { title: this.title },
      });
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
</style>
