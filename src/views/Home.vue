<template>
  <div class="w-full h-full">
    <section id="home-section" class="hero h-full w-full bg-primary relative">
      <!-- Overlay -->
      <div class="w-full h-full bg-black bg-opacity-85 hero-overlay">
        <div class="container flex flex-col h-full justify-center">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex justify-center">
              <img
                data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
                class="h-40 md:h-64 rounded-full"
                src="@/assets/avatar.jpg"
                alt="Avatar"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              class="flex flex-col items-center md:items-start"
            >
              <p class="text-white font-bold text-xl mb-5 md:text-4xl">
                Hi, 👋
                <br />
                My name is Youssef Ahmed 👀
                <br />
                I'm a
                <span class="text-accent">full-stack web devoleper</span> 👨‍💻
                <br />
                Welcome to my website ❤️
              </p>
              <div>
                <button
                  @click="scrollToSection(aboutSection, 'about-section')"
                  type="button"
                  class="text-white transition-all duration-500 border-accent border-2 hover:bg-accent py-4 px-10"
                >
                  About me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      ref="aboutSection"
      id="about-section"
      class="flex flex-col container relative mx-auto px-4 py-20"
    >
      <div
        data-aos="fade-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="600"
        class="title-line text-3xl font-bold mb-20"
      >
        About me
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          class="w-full h-full flex flex-col justify-center shadow-2xl border-black border-2 py-5 px-8"
        >
          <img
            class="h-32 rounded-full mx-auto mb-4"
            src="@/assets/avatar.jpg"
          />
          <p class="text-justify font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            quis diam tempor dolor condimentum auctor ut in mi. Etiam a
            tristique nisi. Nam volutpat, erat a eleifend pharetra, nunc enim
            posuere arcu, nec ullamcorper mi nulla id nulla. Ut tempor tempor
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          class="flex flex-col justify-center shadow-2xl border-black border-2 py-5 px-8"
        >
          <div
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            class="title-line font-bold mb-4"
          >
            My skills
          </div>

          <div class="progress-container">
            <div class="progress-title">Vuejs</div>
            <div class="progress-bg">
              <div class="progress pw-80 delay-1000"></div>
              <div class="progress-percent delay-1100">80%</div>
            </div>
          </div>
          <div class="progress-container">
            <div class="progress-title">HTML</div>
            <div class="progress-bg">
              <div class="progress pw-90 delay-1100"></div>
              <div class="progress-percent delay-1200">90%</div>
            </div>
          </div>
          <div class="progress-container">
            <div class="progress-title">CSS</div>
            <div class="progress-bg">
              <div class="progress pw-90 delay-1200"></div>
              <div class="progress-percent delay-1300">90%</div>
            </div>
          </div>
          <div class="progress-container">
            <div class="progress-title">SQL</div>
            <div class="progress-bg">
              <div class="progress pw-70 delay-1300"></div>
              <div class="progress-percent delay-1400">70%</div>
            </div>
          </div>
          <div class="progress-container">
            <div class="progress-title">Golang</div>
            <div class="progress-bg">
              <div class="progress pw-70 delay-1400"></div>
              <div class="progress-percent delay-1500">70%</div>
            </div>
          </div>
          <div class="progress-container">
            <div class="progress-title">Python</div>
            <div class="progress-bg">
              <div class="progress pw-80 delay-1500"></div>
              <div class="progress-percent delay-1600">80%</div>
            </div>
          </div>
          <div class="progress-container">
            <div class="progress-title">Photoshop</div>
            <div class="progress-bg">
              <div class="progress pw-70 delay-1600"></div>
              <div class="progress-percent delay-1700">70%</div>
            </div>
          </div>
          <div class="progress-container">
            <div class="progress-title">Adobe XD</div>
            <div class="progress-bg">
              <div class="progress pw-80 delay-1700"></div>
              <div class="progress-percent delay-1800">80%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any*/
import { ref } from "@vue/composition-api";
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  setup() {
    const aboutSection = ref(null);

    function scrollToSection(sectionRef: any, sectionName: any) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
      history.pushState({}, null as any, `#${sectionName}`);
    }

    return {
      aboutSection,
      scrollToSection,
    };
  },
});
</script>

<style>
.hero {
  background-image: url("~@/assets/hero_bg.jpg");
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
