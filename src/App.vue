<template>
  <v-app>
    <v-app-bar class="header" app color="primary" dark>
      <v-toolbar-title class="text-h6 logo-container">
        <img src="https://irp.cdn-website.com/cba281d9/dms3rep/multi/Logo_white.svg" @click="this.$router.push('/')"
          alt="P" class="logo-gif mt-2" />
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main class="main">
      <v-container class="main-container">
        <router-view />
      </v-container>

      <!-- <div class="notification1" ref="notification1">
        <v-img :aspect-ratio="16 / 9" max-width="500" :src="imageSource" alt="123" class="mt-2">
        </v-img>
        <div class="widget-detail">
          <p>Reimagine this property</p>
          <p class="mt-2">Visualize the possibilities! Redesign rooms with new furnishings and see if this home fits
            your lifestyle.
          </p>
        </div>
        <div class="detail-close">
          <v-icon class="close-icon" @click="autoClickWidgetButton">mdi-close</v-icon>
        </div>
      </div> -->
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
  data() {
    return {
      imageSource: require('@/assets/freepik.svg')
    };
  },
  mounted() {
    this.loadExternalWidget();
    // this.autoClickWidgetButton();
  },
  methods: {
    loadExternalWidget() {
      if (!customElements.get('proptexx-widget')) {
        const script = document.createElement('script');
        script.src = 'https://static.proptexx.com/copilot/loader.js?k=MzkwNGQ3YTctYmRkZS00MDUxLWJjZTAtMzFiYmNjNmY1MmU0fGU0MGM4ZjkxLWY0NjYtNGMxZC05ZGM3LWJiZjhmNjIwMjIxOA&t=1';
        script.async = true;
        document.head.appendChild(script);
      } else {
        console.log('proptexx-widget already registered.');
      }
    },
    autoClickWidgetButton() {
      const widgetElement = document.querySelector('proptexx-widget');
      if (!widgetElement) {
        console.log('Widget element not found.');
        this.dialog = false;
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
  }
};
</script>

<style>
.v-main {
  padding-top: 90px !important;
}

.header,
.footer {
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
  cursor: pointer;
}

.main-container {
  max-width: 100vw !important;
  padding: 0 !important;
  margin: 0px !important;
}

.notification1 {
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