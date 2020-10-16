<template>
  <header>
    <nav
      class="fixed top-0 z-50 w-full py-2 text-white border-b-4 bg-primary border-accent"
    >
      <div class="container flex items-center justify-between px-5">
        <div class="flex flex-1">
          <button
            @click="isOpen = !isOpen"
            class="flex items-center mr-5 text-gray-500 hover:text-white md:hidden"
          >
            <svg
              class="w-5 h-5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <div class="text-2xl font-bold">Youssef Ahmed</div>
        </div>
        <div class="c-gap-wrapper">
          <scrollactive
            :offset="52"
            active-class="nav-link-active"
            class="hidden md:flex c-gap c-gap-8"
          >
            <a href="#home-section" class="scrollactive-item nav-link">Home</a>
            <a href="#about-section" class="scrollactive-item nav-link"
              >About</a
            >
          </scrollactive>
        </div>
      </div>
    </nav>
    <div
      @click="isOpen = false"
      :class="isOpen ? 'bg-opacity-25' : 'bg-opacity-0 z-hidden'"
      class="fixed z-20 w-full h-full transition duration-500 ease-in-out bg-black overlay "
    />
    <aside
      :class="isOpen ? 'translate-x-0 nav-open' : '-translate-x-full'"
      class="fixed z-30 w-64 h-full py-8 transition-all duration-300 ease-in-out transform bg-secondary"
    >
      <scrollactive
        :offset="52"
        active-class="title-line"
        class="flex flex-col"
      >
        <div class="flex justify-center mb-5">
          <img
            class="h-32 transition-all duration-500 rounded-full md:h-64 hover:rounded-none"
            src="@/assets/my_avatar.jpg"
            alt="Avatar"
          />
        </div>
        <a
          href="#home-section"
          class="mb-5 delay-500 scrollactive-item nav-link menu-link"
          >Home</a
        >
        <a
          href="#about-section"
          class="mb-5 delay-700 scrollactive-item nav-link menu-link"
          >About</a
        >
      </scrollactive>
    </aside>
  </header>
</template>

<script lang="ts">
import { ref } from "@vue/composition-api";
import Vue from "vue";

export default Vue.extend({
  name: "Nav",
  setup() {
    const isOpen = ref(false);
    return {
      isOpen,
    };
  },
});
</script>

<style scoped></style>
