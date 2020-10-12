<template>
  <div class="w-full h-full">
    <section id="home-section" class="hero h-full w-full bg-primary relative">
      <!-- Overlay -->
      <div
        class="w-full h-full bg-black bg-opacity-85 hero-overlay pattern-vertical-lines-lg text-secondary text-opacity-25 px-5"
      >
        <div class="container flex flex-col h-full justify-center">
          <div class="flex flex-col md:flex-row pattern-dots-md py-5 -mb-8">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              class="flex-1 flex justify-center mb-8"
            >
              <img
                class="transition-all duration-500 h-40 md:h-64 rounded-full hover:rounded-none"
                src="@/assets/my_avatar.jpg"
                alt="Avatar"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              class="flex-1 flex flex-col items-center md:items-start mb-8"
            >
              <p class="text-white font-bold text-xl md:text-4xl mb-5">
                Hi,
                <br />
                My name is
                <span class="bg-accent">Youssef Ahmed</span>
                <br />
                I'm a full-stack web devoleper
                <br />
                Welcome to my website
              </p>
              <div>
                <button
                  @click="scrollToSection(aboutSection, 'about-section')"
                  type="button"
                  class="text-white transition-all duration-500 border-accent border-2 hover:bg-accent font-bold py-4 px-10"
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
      class="flex flex-col relative mx-auto py-20 px-5 pattern"
    >
      <div class="custom-shape-divider-top-1602488617">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class="container">
        <div
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="600"
          class="title-line text-3xl font-bold mb-20"
        >
          About me
        </div>
        <div class="flex flex-col md:flex-row -mr-8 -mb-8">
          <div
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            class="bg-background flex-1 flex flex-col justify-center shadow-xl border-black border-2 py-5 px-8 mr-8 mb-8"
          >
            <img
              class="transition-all duration-500 h-32 rounded-full mx-auto mb-4 hover:rounded-none"
              src="@/assets/my_avatar.jpg"
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
            class="bg-background flex-1 flex flex-col justify-center shadow-xl border-black border-2 py-5 px-8 mr-8 mb-8"
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

<style lang="postcss">
.hero {
  background-image: url("~@/assets/hero_bg.jpg");
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.pattern {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
