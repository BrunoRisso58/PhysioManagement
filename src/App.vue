<template>
  <NavBar />
  <router-view :key="this.$route.path" /> <!-- this key attribute forces a replacement of the router-view component every time a navigation event occurs -->
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  data() {
    return {
      navContainer: null,
    }
  },
  components: {
    NavBar
  },
  methods: {
    highlightNavContainer() {
      let navItems = document.querySelectorAll(".nav-item");

      navItems.forEach((item) => {
        if (item.parentNode.classList.value.includes("highlighted")) {
          item.parentNode.classList.remove("highlighted")
        }
      })

      this.navContainer = document.querySelector(".router-link-active").parentNode;
      this.navContainer.classList.add("highlighted")
    }
  },
  updated() {
    this.highlightNavContainer();
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, Arial, Helvetica;
    color: #181818;
  }

  body {
    font-size: 1rem
  }
</style>