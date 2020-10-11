<template>
  <header>
    <nav
      class="fixed top-0 w-full flex items-center justify-between bg-primary text-white px-5 md:px-56 py-2 z-50"
    >
      <div class="flex">
        <button
          @click="isOpen = !isOpen"
          class="flex items-center text-gray-500 hover:text-white mr-5 md:hidden"
        >
          <svg
            class="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <div class="font-bold text-2xl">Youssef Ahmed</div>
      </div>
      <scrollactive
        :offset="52"
        active-class="nav-link-active"
        class="hidden md:flex"
      >
        <a href="#home-section" class="scrollactive-item nav-link mr-8">Home</a>
        <a href="#about-section" class="scrollactive-item nav-link mr-8"
          >About</a
        >
      </scrollactive>
    </nav>
    <div
      @click="isOpen = false"
      :class="isOpen ? 'bg-opacity-25' : 'bg-opacity-0 z-hidden'"
      class="overlay transition duration-500 ease-in-out bg-black w-full h-full fixed z-20 "
    />
    <aside
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      class="transform w-64 bg-secondary fixed h-full ease-in-out transition-all duration-300 z-30"
    ></aside>
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
