<template>
  <div class="head-section">
    <transition appear
                @before-enter="beforeEnter"
                @enter="enter">
      <h1 class="welcome-text">Welcome to my Page</h1>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "header-section",
  methods: {
    beforeEnter(el) {   //where the animation will start from
      el.style.opacity = '0';
      el.style.transform = 'translateY(-200px)';
    },
    enter(el) {   //where the animation will end up
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
      })
    }
  }
}
</script>

<style scoped lang="scss">
.head-section {
  display: flex;
  justify-content: center;

  .welcome-text {
    z-index: 2;
    color: white;
    font-size: 3.5em;
  }
}


</style>
