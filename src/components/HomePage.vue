<template>
  <v-container class="estate-container">
    <!-- Particle background container -->
    <div ref="particleBackground" class="particle-background"></div>

    <v-row>
      <v-col cols="12">
        <v-img
          src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/07/image2-xl%401x.jpg"
          height="400px"
          width="100%"
          cover
        >
          <v-container class="white--text d-flex align-center justify-center" height="100%">
            <h1 class="banner-text">Explore Top Properties</h1>
          </v-container>
        </v-img>
      </v-col>
    </v-row>

    <v-row style="max-width: 80%; margin: auto">
      <v-col v-for="(property, index) in properties" :key="index" cols="12" sm="6" md="3">
        <CardComponent
          :title="property.title"
          :subtitle="property.subtitle"
          :image="property.image"
          :rating="property.rating"
          :reviews="property.reviews"
          :price="property.price"
          :description="property.description"
          :availableTimes="property.availableTimes"
          :loading="loading"
          :houseType="property.type"
          :detail="property.details"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Scene, PerspectiveCamera, WebGLRenderer, Points, BufferGeometry, BufferAttribute, PointsMaterial } from 'three';
import CardComponent from './CardComponent.vue';
import housesData from '@/assets/house.json';

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      loading: false,
      properties: housesData,
    };
  },
  mounted() {
    this.initParticleBackground();
  },
  methods: {
    initParticleBackground() {
      const scene = new Scene();
      const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new WebGLRenderer({ alpha: true });

      const particleBackground = this.$refs.particleBackground;
      particleBackground.appendChild(renderer.domElement);

      renderer.setSize(window.innerWidth, window.innerHeight);

      const particleCount = 1000;
      const geometry = new BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      }

      geometry.setAttribute('position', new BufferAttribute(positions, 3));

      const material = new PointsMaterial({
        color: 0x000000,
        size: 0.2,
        sizeAttenuation: true,
        alphaTest: 0.5,
        transparent: true
      });

      const particles = new Points(geometry, material);
      scene.add(particles);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);

        particles.rotation.x += 0.001;
        particles.rotation.y += 0.001;

        renderer.render(scene, camera);
      };

      animate();

      window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });
    },
  },
};
</script>

<style scoped>
.estate-container {
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: max-content;
  padding: 0px !important;
}

.banner-text {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  text-align: center;
  color: white;
}

.v-row.no-gutters {
  margin: 0;
  padding: 0;
}

.particle-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  background-color: gray;
}

.estate-container {
  position: relative;
  z-index: 1;
}

.banner-text {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  text-align: center;
  color: white;
}
</style>
