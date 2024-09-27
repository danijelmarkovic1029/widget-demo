<template>
  <div @click="showDetails" @mouseover="hover = true" @mouseleave="hover = false">
    <v-card
      class="mx-auto"
      max-width="400"
      :elevation="hover ? 10 : 2"
      :class="{ 'hover-effect': hover }"
      transition="scale-transition"
    >
      <v-img class="align-end text-white" :src="imageSrc" height="200" cover>
        <v-card-title>{{ title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pt-4">{{ subtitle }}</v-card-subtitle>

      <v-card-text>
        <div>{{ descriptionLine1 }}</div>
        <div>{{ descriptionLine2 }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text @click.stop="onShare">{{ shareText }}</v-btn>
        <v-btn color="orange" text @click.stop="onExplore">{{ exploreText }}</v-btn>
      </v-card-actions>
    </v-card>

    <!-- Modal for showing details -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>{{ subtitle }}</v-card-subtitle>

        <v-card-text>
          <v-img :src="imageSrc" height="300" cover></v-img>
          <p>{{ descriptionLine1 }}</p>
          <p>{{ descriptionLine2 }}</p>
        </v-card-text>

        <v-card-actions>
          <v-btn text color="red" @click="dialog = false">Close</v-btn>
        </v-card-actions>
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
    shareText: {
      type: String,
      default: 'Share',
    },
    exploreText: {
      type: String,
      default: 'Explore',
    },
  },
  data() {
    return {
      hover: false,
      dialog: false,
    };
  },
  methods: {
    onShare() {
      // Add share logic
      alert('Shared!');
    },
    onExplore() {
      // Add explore logic
      alert('Exploring!');
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
</style>
