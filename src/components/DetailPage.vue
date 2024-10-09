<template>
  <v-container>
    <v-dialog v-model="dialog" max-width="500">
      <template v-slot:default="{ isActive }">
        <v-card class="pop-up d-flex justify-sm-center align-md-center position-relative">
          <!-- <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions> -->
          <div class="position-absolute top-0 right-0">
            <v-btn icon="mdi-close" variant="text" @click="isActive.value = false"></v-btn>
          </div>
          <img width="344" :src="imageSource" alt="123" class="mt-2" />
          <div class="detail">
            <p>Reimagine this property</p>
            <p>Get a complete picture of a property and see how it feets your needs using PropTexx AI Widget</p>
          </div>
          <div class="d-flex align-md-center justify-space-between ga-4 btn-group">
            <div @click="isActive.value = false">Maybe later</div>
            <div @click="widgetAction">Try widget in action</div>
          </div>
        </v-card>
      </template>
    </v-dialog>

    <v-dialog v-model="dialog2" width="340">
      <v-card>
        <template v-slot:text>
          <v-card-text class="not-found">
            The widget was not found.<br />Please try again later.
          </v-card-text>
        </template>
        <v-card-actions class=" d-flex justify-sm-center align-md-center">
          <div class="btn-group">
            <div @click="dialog2 = false">Try later</div>
          </div>
          <!-- <v-btn text="Close" variant="text" @click="dialog2 = false"></v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row justify="center" class="123">
      <v-col cols="12" md="8" class="456">

        <v-btn class="mb-4 back-to-search ml-4" @click="goBack" text>
          <v-icon icon="mdi-arrow-left" start></v-icon>
          Back to listings page
        </v-btn>

        <v-card v-if="!loading" class="v-card-no-border">
          <v-card-text>
            <v-carousel class="detail-image" height="450" show-arrows="hover" :continuous="false"
              delimiter-icon="mdi-square">
              <v-carousel-item v-for="(each, index) in property.image" :key="index">
                <v-img :src="each" height="450" cover></v-img>
              </v-carousel-item>
            </v-carousel>
            <v-card-title class="px-0">
              <div class="overlay-text">{{ property.title }}</div>
            </v-card-title>
          </v-card-text>

          <!-- <v-card-title class="title mb-2">Basic Information</v-card-title> -->
          <v-card-item class="py-0">
            <div class="title mb-2">{{ property.price }}</div>
            <v-card-subtitle>
              <span class="me-1 description">{{ property.description }}</span>
            </v-card-subtitle>
          </v-card-item>

          <v-card-text class="py-0">
            <div class="text-subtitle-1">{{ property.details.bedrooms }}bds | {{ property.details.bathrooms }}ba | {{
              property.details.interiorArea.totalInteriorLivableArea }}</div>
          </v-card-text>

          <div class="line-space"></div>

          <div class="description-part">
            <span>Description</span>
            <span>{{ property.subtitle }}</span>
          </div>

          <div class="line-space"></div>

          <div class="key-detail-part mt-4">
            <span class="subtitle">Key Details</span>
            <ul>
              <li>
                <span>Property Type:</span>
                <span>&nbsp;{{ property.title }}</span>
              </li>
              <li>
                <span>Year Built:</span>
                <span>&nbsp;{{ property.details.builtYear }}</span>
              </li>
              <li>
                <span>Square Footage:</span>
                <span>&nbsp;{{ property.details.interiorArea.totalInteriorLivableArea }}</span>
              </li>
              <li>
                <span>Bathrooms:</span>
                <span>&nbsp;{{ property.details.bathrooms }}</span>
              </li>
              <li>
                <span>Bedrooms:</span>
                <span>&nbsp;{{ property.details.bedrooms }}</span>
              </li>
            </ul>
          </div>

          <div class="line-space"></div>
        </v-card>
        <div v-else>
          <h3>Property not found</h3>
        </div>
      </v-col>
    </v-row>
    <!-- <HelpPage /> -->
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import houseData from '@/assets/house.json';
import '../assets/styles/global.css';
// import HelpPage from './HelpPage.vue';

export default {
  props: ['title'],
  components: {
    // HelpPage
  },
  data() {
    return {
      property: null,
      loading: true,
      dialog: false,
      dialog2: false,
      imageSource: require('@/assets/widget-detail1.png')
    };
  },
  methods: {
    ...mapActions('property', ['updatePropertyDetails']),
    goBack() {
      this.$router.go(-1);
    },
    fetchPropertyDetails(title) {
      const property = houseData.find((p) => p.title === title);
      if (property) {
        this.property = property;
      } else {
        console.error(`Property with title "${title}" not found.`);
      }
    },
    widgetAction() {
      this.dialog = false;
      setTimeout(() => {
        this.autoClickWidgetButton();
      }, 200);
    },
    autoClickWidgetButton() {
      const widgetElement = document.querySelector('proptexx-widget');
      if (!widgetElement) {
        console.log('Widget element not found.');
        this.dialog = false;
        this.dialog2 = true;
        return;
      }
      const shadowRoot = widgetElement.shadowRoot;
      const widgetDiv = shadowRoot.querySelector('.proptexx-widget');
      const widgetButton = widgetDiv.querySelector('.widget-trigger');
      if (shadowRoot && widgetDiv && widgetButton) {
        widgetButton.click();
      } else {
        console.log('Widget div inside shadow root not found.');
        return
      }
    },
  },
  computed: {
    ...mapGetters('property', {
      getPropertyDetails: 'getPropertyDetails'
    }),
  },
  async mounted() {
    this.dialog = true;
    const property = await this.fetchPropertyDetails(this.title);
    if (property) {
      this.property = property;
    }
    this.loading = false
  },
};
</script>

<style scoped>
.title {
  text-transform: none;
  font-family: "Object Sans", "Adjusted Arial", Tahoma, Geneva, sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 24px;
}

.description-part {
  display: flex;
  flex-direction: column;
  padding: 16px;

  span {
    &:first-child {
      color: var(--Dark-Grey, #191919);
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    &:last-child {
      margin-top: 10px;
      display: block;
      color: #000;
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      letter-spacing: 0.1px;
    }
  }
}

.key-detail-part {
  padding: 16px;

  .subtitle {
    color: var(--Dark-Grey, #191919);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  ul {
    li {
      display: flex;

      span {
        margin-top: 10px;
        display: block;
        color: #000;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        line-height: 130%;
        letter-spacing: 0.1px;

        &:first-child {
          font-weight: bold;
        }

      }
    }
  }
}

.text-subtitle-1 {
  font-size: 16px;
  color: black !important;
  font-weight: bold;
}

.v-card-title {
  font-size: 24px;
  font-weight: bold;
}

.v-card-subtitle {
  font-size: 18px;
  color: #555;
}

.detail-property {
  .type {
    background-color: rgb(246, 246, 250);
  }
}

.two-column-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;
}

.two-column-list li {
  flex-basis: 50%;
  box-sizing: border-box;
  padding: 5px;
  color: black;
}

.pop-up {
  width: 690px;
  height: 480px;
  border-radius: 20px !important;
}

.detail {
  text-align: center;
  width: 410px;
  padding: 15px 0 25px;

  p {
    &:first-child {
      font-size: 24px;
      font-weight: bolder;
    }

    &:last-child {
      margin-top: 10px;
      font-size: 18px;
      font-weight: 500;
    }
  }
}

.btn-group {
  div {
    cursor: pointer;
    width: 225px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;

    &:first-child {
      background: white;
      border: 1px solid #ba4b30;
      color: #ba4b30;
    }

    &:last-child {
      background: #ba4b30 !important;
      border: 1px solid #ba4b30;
      color: white;
    }
  }
}

.not-found {
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}
</style>