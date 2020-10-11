<template>
  <div class="w-full h-full">
    <section id="home-section" class="hero h-full w-full bg-primary relative">
      <!-- Overlay -->
      <div class="w-full h-full bg-black bg-opacity-85 hero-overlay">
        <div class="container flex flex-col h-full justify-center">
          <div class="flex flex-col md:flex-row gap-8">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              class="flex-1 flex justify-center"
            >
              <img
                class="transition-all duration-500 h-40 md:h-64 rounded-full hover:rounded-none"
                src="@/assets/avatar.jpg"
                alt="Avatar"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              class="flex-1 flex flex-col items-center md:items-start"
            >
              <p class="text-white font-bold text-xl mb-5 md:text-4xl">
                Hi,
                <br />
                My name is Youssef Ahmed
                <br />
                I'm a
                <span class="text-accent">full-stack web devoleper</span> 👨‍💻
                <br />
                Welcome to my website
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
      <div class="gap-8 flex flex-col md:flex-row">
        <div
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          class="flex-1 flex flex-col justify-center shadow-xl border-black border-2 py-5 px-8"
        >
          <img
            class="transition-all duration-500 h-32 rounded-full mx-auto mb-4 hover:rounded-none"
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
          class="flex-1 flex flex-col justify-center shadow-xl border-black border-2 py-5 px-8"
        >
          <div
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            class="title-line font-bold mb-4"
          >
            My skills
          </div>

          <div
            v-for="(skill, i) in skills"
            :key="i"
            class="progress-container group"
          >
            <div class="progress-title">
              {{ skill.name }}
              <!-- <img
                class="progress-logo group-hover:opacity-100"
                :src="
                  require(`@/assets/logos/${skill.name.replace(' ', '_')}.svg`)
                "
                alt=""
              /> -->
            </div>
            <div class="progress-bg">
              <div
                class="progress"
                :style="
                  `--progress: ${skill.percent}; --progress-delay: ${1000 +
                    100 * i}ms`
                "
              ></div>
              <div
                class="progress-percent"
                :style="`--progress-percent-delay: ${1100 + 100 * i}ms`"
              >
                {{ skill.percent }}
              </div>
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
    const skills = ref([
      {
        name: "Vuejs",
        percent: "80%",
      },
      {
        name: "HTML",
        percent: "90%",
      },
      {
        name: "CSS",
        percent: "90%",
      },
      {
        name: "Flutter",
        percent: "65%",
      },
      {
        name: "Firebase",
        percent: "85%",
      },
      {
        name: "SQL",
        percent: "70%",
      },
      {
        name: "Golang",
        percent: "70%",
      },
      {
        name: "Python",
        percent: "80%",
      },
      {
        name: "Photoshop",
        percent: "70%",
      },
      {
        name: "Adobe XD",
        percent: "80%",
      },
    ]);

    const aboutSection = ref(null);

    function scrollToSection(sectionRef: any, sectionName: any) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
      history.pushState({}, null as any, `#${sectionName}`);
    }

    return {
      skills,
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
