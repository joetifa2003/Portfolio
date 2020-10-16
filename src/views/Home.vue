<template>
  <div class="w-full h-full">
    <section id="home-section" class="relative w-full h-full hero bg-primary">
      <!-- Overlay -->
      <div
        class="w-full h-full px-5 text-opacity-25 bg-black bg-opacity-90 hero-overlay pattern-vertical-lines-lg text-secondary"
      >
        <div class="container flex flex-col justify-center h-full">
          <div
            class="py-10 text-opacity-25 border-4 c-gap-wrapper pattern-dots-lg border-accent text-accent"
          >
            <div class="flex flex-col c-gap c-gap-x-8 md:flex-row">
              <div
                data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
                class="flex items-center justify-center flex-1"
              >
                <img
                  class="h-40 transition-all duration-500 rounded-full md:h-64 hover:rounded-none"
                  src="@/assets/my_avatar.jpg"
                  alt="Avatar"
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
                class="flex flex-col items-center flex-1 md:items-start"
              >
                <p
                  class="mb-5 text-xl font-bold text-white sm:text-2xl md:text-4xl"
                >
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
                    class="px-10 py-4 font-bold text-white transition-all duration-500 border-2 border-accent hover:bg-accent"
                  >
                    About me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container h-auto px-5 bg-cover bg-background">
      <section
        ref="aboutSection"
        id="about-section"
        class="relative flex flex-col h-full mx-auto"
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
        <div
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="600"
          class="my-20 text-3xl font-bold title-line"
        >
          About me
        </div>
        <div class="c-gap-wrapper">
          <div class="flex flex-col c-gap c-gap-8 md:flex-row">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              class="flex flex-col justify-center flex-1 px-8 py-5 border-2 border-black shadow-xl bg-background"
            >
              <img
                class="h-40 mx-auto mb-4 transition-all duration-500 rounded-full hover:rounded-none"
                src="@/assets/my_avatar.jpg"
              />
              <p class="font-bold text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                quis diam tempor dolor condimentum auctor ut in mi. Etiam a
                tristique nisi. Nam volutpat, erat a eleifend pharetra, nunc
                enim posuere arcu, nec ullamcorper mi nulla id nulla. Ut tempor
                tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer quis diam tempor dolor condimentum auctor ut in mi.
                Etiam a tristique nisi. Nam volutpat, erat a eleifend pharetra,
                nunc enim posuere arcu, nec ullamcorper mi nulla id nulla. Ut
                tempor tempor
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              class="flex flex-col justify-center flex-1 px-8 py-5 border-2 border-black shadow-xl bg-background"
            >
              <div
                data-aos="fade-in"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
                class="mb-4 font-bold title-line"
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
                    :style="`--progress-percent-delay: ${1200 + 100 * i}ms`"
                  >
                    {{ skill.percent }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="h-full">
        <div
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="600"
          class="my-20 text-3xl font-bold title-line"
        >
          Project Goals
        </div>
        <div class="mt-8 c-gap-wrapper">
          <div class="flex flex-wrap c-gap-padding c-gap-8">
            <div
              v-for="(item, i) in whatCanIDo"
              :key="i"
              data-aos="flip-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              :data-aos-delay="250 * i"
              class="w-full sm:w-1/2 lg:w-1/4"
            >
              <div
                class="flex flex-col items-center justify-center h-full p-5 transition-all duration-500 transform border-2 border-black shadow-xl cursor-pointer hover:shadow-2xl group hover:bg-black hover:scale-110"
              >
                <i
                  :class="`mdi ${item.icon} text-6xl group-hover:text-white`"
                ></i>
                <div
                  class="text-4xl font-bold text-center group-hover:text-white"
                >
                  {{ item.title }}
                </div>
                <p
                  class="text-center whitespace-pre-line group-hover:text-white"
                >
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative flex flex-col h-full pb-20 mx-auto">
        <div
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="600"
          class="my-20 text-3xl font-bold title-line"
        >
          Contact me
        </div>
        <div class="mt-8 c-gap-wrapper">
          <div class="flex flex-wrap c-gap-padding c-gap-8">
            <div
              v-for="(item, i) in contacts"
              :key="i"
              data-aos="flip-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              :data-aos-delay="250 * i"
              class="w-full sm:w-1/2 lg:w-1/4"
            >
              <div
                @click="openLink(item.link)"
                class="flex flex-col items-center justify-center h-full p-5 transition-all duration-500 transform border-2 border-black shadow-xl cursor-pointer hover:shadow-2xl group hover:bg-black hover:scale-110"
              >
                <i
                  :class="`mdi ${item.icon} text-6xl group-hover:text-white`"
                ></i>
                <div
                  class="text-4xl font-bold text-center group-hover:text-white"
                >
                  {{ item.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any*/
import { ref } from "@vue/composition-api";
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  setup() {
    const whatCanIDo = ref([
      {
        icon: "mdi-flash-circle",
        title: "Fast",
        desc: "Fast load times and lag free interaction, my highest priority.",
      },
      {
        icon: "mdi-devices",
        title: "Responsive",
        desc: "My layouts will work on any device, big or small.",
      },
      {
        icon: "mdi-lightbulb-outline",
        title: "Intuitive",
        desc: "Strong preference for easy to use, intuitive UX/UI.",
      },
      {
        icon: "mdi-rocket",
        title: "Dynamic",
        desc:
          "Websites don't have to be static,\n I love making pages come to life.",
      },
    ]);

    const skills = ref([
      {
        name: "Javascript",
        percent: "95%",
      },
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
        name: "Tailwind",
        percent: "90%",
      },
      {
        name: "Bootstrap",
        percent: "80%",
      },
      {
        name: "Vuetify",
        percent: "80%",
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

    const openLink = (url: string) => {
      const win = window.open(url, "_blank");
      win?.focus();
    };

    const contacts = ref([
      {
        icon: "mdi-facebook",
        title: "Facebook",
        link: "https://www.facebook.com/joetifa2003",
      },
      {
        icon: "mdi-linkedin",
        title: "Linkedin",
        link: "https://www.facebook.com/joetifa2003",
      },
      {
        icon: "mdi-lightbulb-outline",
        title: "Instgram",
        link: "https://www.facebook.com/joetifa2003",
      },
      {
        icon: "mdi-whatsapp",
        title: "Whatsapp",
        link: "https://api.whatsapp.com/send?phone=01111400113",
      },
    ]);

    const aboutSection = ref(null);

    function scrollToSection(sectionRef: any, sectionName: any) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
      history.pushState({}, null as any, `#${sectionName}`);
    }

    return {
      whatCanIDo,
      skills,
      contacts,
      openLink,
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
