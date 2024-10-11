<template>
  <v-container>
    <v-dialog v-model="dialog" max-width="500">
      <template v-slot:default="{ isActive }">
        <v-card class="pop-up d-flex justify-sm-center align-md-center position-relative">
          <div class="position-absolute top-0 right-0">
            <v-btn icon="mdi-close" variant="text" @click="isActive.value = false"></v-btn>
          </div>
          <img width="344" :src="imageSource" alt="123" class="mt-2" />
          <div class="detail">
            <p>Reimagine this property</p>
            <p>Get a complete picture of a property and see how it feets your needs using PropTexx AI Widget</p>
          </div>
          <div class="d-flex align-md-center justify-space-between ga-4 btn-group">
            <div @click="closeAction">Maybe later</div>
            <div @click="widgetAction">Try widget in action</div>
          </div>
        </v-card>
      </template>
    </v-dialog>

    <v-dialog v-model="notFoundDialog" width="340">
      <v-card>
        <template v-slot:text>
          <v-card-text class="not-found">
            The widget was not found.<br />Please try again later.
          </v-card-text>
        </template>
        <v-card-actions class=" d-flex justify-sm-center align-md-center">
          <div class="btn-group">
            <div @click="notFoundDialog = false">Try later</div>
          </div>
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
    <div class="notification-detail" @click="closeWidgetDetail">
      <v-img :aspect-ratio="16 / 9" max-width="500" :src="imageSource" alt="widget detail" class="mt-2">
      </v-img>
      <div class="widget-detail">
        <p>Reimagine this property</p>
        <p class="mt-2">Visualize the possibilities! Redesign rooms with new furnishings and see if this home fits
          your lifestyle.
        </p>
      </div>
      <div class="detail-close">
        <v-icon class="close-icon">mdi-close</v-icon>
      </div>
    </div>
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
      notFoundDialog: false,
      imageSource: require('@/assets/widget-detail1.png'),
      staging: {
        "title": "Custom shining Room",
        "subtitle": "Designed for those who value style and storage, this room features a luxurious walk-in closet. With ample shelving, hanging space, and drawers, it's ideal for organizing your wardrobe and accessories.",
        "image": [
          require('@/assets/staging/1.jpeg'),
          require('@/assets/staging/2.jpeg'),
          require('@/assets/staging/3.jpg'),
          require('@/assets/staging/4.jpeg'),
          require('@/assets/staging/5.jpeg'),
          require('@/assets/staging/6.jpeg'),
          require('@/assets/staging/7.jpeg'),
          require('@/assets/staging/8.jpeg'),
          require('@/assets/staging/9.jpeg'),
          require('@/assets/staging/10.jpeg'),
          require('@/assets/staging/11.jpeg'),
          require('@/assets/staging/12.jpeg'),
          require('@/assets/staging/13.jpeg'),
          require('@/assets/staging/14.jpeg'),
          require('@/assets/staging/15.jpeg'),
          require('@/assets/staging/16.jpeg'),
          require('@/assets/staging/17.jpeg'),
          require('@/assets/staging/18.jpeg'),
          require('@/assets/staging/19.jpeg'),
          require('@/assets/staging/20.jpeg'),
          require('@/assets/staging/21.jpeg'),
          require('@/assets/staging/22.jpeg'),
          require('@/assets/staging/23.jpeg'),
          require('@/assets/staging/24.jpeg'),
          require('@/assets/staging/25.jpeg'),
          require('@/assets/staging/26.jpeg'),
          require('@/assets/staging/27.jpeg'),
          require('@/assets/staging/28.jpeg'),
          require('@/assets/staging/29.jpeg'),
          require('@/assets/staging/30.jpeg'),
          require('@/assets/staging/31.jpeg'),
          require('@/assets/staging/32.jpeg'),
          require('@/assets/staging/33.jpeg'),
          require('@/assets/staging/34.jpeg'),
          require('@/assets/staging/35.jpeg'),
          require('@/assets/staging/36.jpeg'),
          require('@/assets/staging/37.jpeg'),
          require('@/assets/staging/38.jpeg'),
          require('@/assets/staging/39.jpeg'),
          require('@/assets/staging/40.jpeg'),
          require('@/assets/staging/41.jpeg'),
          require('@/assets/staging/42.jpeg'),
          require('@/assets/staging/43.jpeg'),
          require('@/assets/staging/44.jpeg'),
        ],
        "rating": 4.5,
        "reviews": 413,
        "price": "$41,500",
        "description": "3248 Burning Memory Lane, FL 32801",
        "availableTimes": ["5:30PM", "7:30PM", "8:00PM", "9:00PM"],
        "type": "Essential appliances",
        "details": {
          "bedrooms": 2,
          "builtYear": 2020,
          "bathrooms": 1,
          "fullBathrooms": 2,
          "halfBathrooms": 1,
          "kitchenFeatures": "F",
          "heating": "Heat Pump",
          "features": ["BayWin", "D/D", "EIK", "FP", "NewKit", "Study", "Sunny", "W/D"],
          "hasFireplace": false,
          "interiorArea": {
            "totalStructureArea": 2400,
            "totalInteriorLivableArea": "2,950 sqft"
          },
          "property": {
            "parking": {
              "totalSpaces": 2
            },
            "exteriorFeatures": ["cGdn", "Patio"]
          }
        }
      },
      refurnishing: {
        "title": "Modern Indoor System",
        "subtitle": "Stay warm during the winter months with heated flooring in both the bedroom and bathroom. This feature provides an extra layer of luxury, ensuring that your space remains cozy and comfortable all year round.",
        "image": [
          require('@/assets/refurnishing/1.jpg'),
          require('@/assets/refurnishing/2.jpeg'),
          require('@/assets/refurnishing/3.jpeg'),
          require('@/assets/refurnishing/4.jpeg'),
          require('@/assets/refurnishing/5.jpeg'),
          require('@/assets/refurnishing/6.jpeg'),
          require('@/assets/refurnishing/7.jpeg'),
          require('@/assets/refurnishing/8.jpeg'),
          require('@/assets/refurnishing/9.jpeg'),
          require('@/assets/refurnishing/10.jpeg'),
          require('@/assets/refurnishing/11.jpeg'),
          require('@/assets/refurnishing/12.jpeg'),
          require('@/assets/refurnishing/13.jpeg'),
          require('@/assets/refurnishing/14.jpeg'),
          require('@/assets/refurnishing/15.jpeg'),
          require('@/assets/refurnishing/16.jpeg'),
          require('@/assets/refurnishing/17.jpeg'),
          require('@/assets/refurnishing/18.jpeg'),
          require('@/assets/refurnishing/19.jpeg'),
          require('@/assets/refurnishing/20.jpeg'),
          require('@/assets/refurnishing/21.jpeg'),
          require('@/assets/refurnishing/22.jpeg'),
          require('@/assets/refurnishing/23.jpeg'),
          require('@/assets/refurnishing/24.jpeg'),
          require('@/assets/refurnishing/25.jpeg'),
          require('@/assets/refurnishing/26.jpeg'),
          require('@/assets/refurnishing/27.jpeg'),
          require('@/assets/refurnishing/28.jpeg'),
          require('@/assets/refurnishing/29.jpeg'),
          require('@/assets/refurnishing/30.jpeg'),
          require('@/assets/refurnishing/31.jpeg'),
          require('@/assets/refurnishing/32.jpeg'),
          require('@/assets/refurnishing/33.jpeg'),
          require('@/assets/refurnishing/34.jpeg'),
          require('@/assets/refurnishing/35.jpeg'),
          require('@/assets/refurnishing/36.jpeg'),
          require('@/assets/refurnishing/37.jpeg'),
          require('@/assets/refurnishing/38.jpeg'),
          require('@/assets/refurnishing/39.jpeg'),
          require('@/assets/refurnishing/40.jpeg'),
          require('@/assets/refurnishing/41.jpeg'),
          require('@/assets/refurnishing/42.jpeg'),
          require('@/assets/refurnishing/43.jpeg'),
          require('@/assets/refurnishing/44.jpeg'),
        ],
        "rating": 4.3,
        "reviews": 423,
        "price": "$34,500",
        "description": "991 Callison Lane, FL 32801",
        "availableTimes": ["5:30PM", "7:30PM", "8:00PM", "9:00PM"],
        "type": "Two bedrooms",
        "details": {
          "bedrooms": 3,
          "builtYear": 2022,
          "bathrooms": 1,
          "fullBathrooms": 2,
          "halfBathrooms": 1,
          "kitchenFeatures": "F",
          "heating": "Heat Pump",
          "features": ["BayWin", "D/D", "EIK", "FP", "NewKit", "Study", "Sunny", "W/D"],
          "hasFireplace": false,
          "interiorArea": {
            "totalStructureArea": 2400,
            "totalInteriorLivableArea": "1,950 sqft"
          },
          "property": {
            "parking": {
              "totalSpaces": 2
            },
            "exteriorFeatures": ["cGdn", "Patio"]
          }
        }
      }
    };
  },
  methods: {
    ...mapActions('property', ['updatePropertyDetails']),
    goBack() {
      this.$router.go(-1);
    },
    fetchPropertyDetails(title) {
      if (title === this.staging.title) {
        this.property = this.staging;
      } else if (title === this.refurnishing.title) {
        this.property = this.refurnishing;
      } else {
        const property = houseData.find((p) => p.title === title);
        if (property) {
          this.property = property;
        } else {
          console.error(`Property with title "${title}" not found.`);
        }
      }
    },
    closeAction() {
      this.dialog = false;
      this.detectWidgetButton();
    },
    closeWidgetDetail() {
      const notificationDiv = document.querySelector('.notification-detail');
      if (notificationDiv) {
        notificationDiv.classList.remove('visible');
      } else {
        console.error('Notification div not found.');
      }
    },
    
    widgetAction() {
      this.dialog = false;
      setTimeout(() => {
        this.autoClickWidgetButton();
      }, 200);
    },

    detectWidgetButton() {  // detect widget button
      const widgetElement = document.querySelector('proptexx-widget');
      if (!widgetElement) {
        console.log('Widget element not found.');
        this.dialog = false;
        this.notFoundDialog = true;
        return;
      }
      const shadowRoot = widgetElement.shadowRoot;
      const widgetDiv = shadowRoot.querySelector('.proptexx-widget');
      const widgetButton = widgetDiv.querySelector('.widget-trigger');
      if (shadowRoot && widgetDiv && widgetButton) {
        const buttonRect = widgetButton.getBoundingClientRect();
        const notificationDiv = document.querySelector('.notification-detail');

        notificationDiv.style.position = 'fixed';
        notificationDiv.style.visibility = 'hidden';

        const notificationWidth = notificationDiv.offsetWidth;
        const notificationHeight = notificationDiv.offsetHeight;

        const buttonCenterX = buttonRect.left + (buttonRect.width / 2);
        const buttonCenterY = buttonRect.top + (buttonRect.height / 2);

        notificationDiv.style.left = `${buttonCenterX - notificationWidth}px`;
        notificationDiv.style.top = `${buttonCenterY - notificationHeight}px`;

        setTimeout(() => {
          notificationDiv.style.visibility = 'visible';
          notificationDiv.classList.add('visible');
        });
      } else {
        console.log('Widget div inside shadow root not found.');
        return
      }
      widgetButton.addEventListener('click', this.handleWidgetButtonClick);
    },
    
    autoClickWidgetButton() { // widget dialog when try widget button
      const widgetElement = document.querySelector('proptexx-widget');
      if (!widgetElement) {
        console.log('Widget element not found.');
        this.dialog = false;
        this.notFoundDialog = true;
        return;
      }
      const shadowRoot = widgetElement.shadowRoot;
      const widgetDiv = shadowRoot.querySelector('.proptexx-widget');
      const widgetButton = widgetDiv.querySelector('.widget-trigger');
      widgetButton.addEventListener('click', this.handleWidgetButtonClick);
      if (shadowRoot && widgetDiv && widgetButton) {
        widgetButton.click();
      } else {
        console.log('Widget div inside shadow root not found.');
        return
      }
    },

    handleWidgetButtonClick() { // event occurs when the widget button is clicked
      this.closeWidgetDetail();
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


.notification-detail {
  cursor: pointer;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.5s ease, transform 0.5s ease;
  transform-origin: bottom right;
  width: 400px;
  height: 100px;
  bottom: 100px;
  right: 200px;
  border: 2px solid #cf6146;
  border-radius: 10px;
  box-shadow: 10px 10px 30px #c0c0c0;
  display: flex;
  gap: 5px;
  justify-content: space-between;
  padding: 10px 10px 21px;
  position: fixed;
  background: white;

  &.visible {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform-origin: bottom right;
  }

  .v-img {
    height: 100%;
    width: 112px;
  }

  .widget-detail {
    p {
      &:first-child {
        color: var(--Dark-Grey, #191919);
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      &:last-child {
        color: var(--Dark-Grey, #191919);
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }

  .detail-close {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    i {
      cursor: pointer;
    }
  }
}
</style>