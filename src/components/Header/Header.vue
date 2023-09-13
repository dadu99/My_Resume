<template>
  <div class="head-section">
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <h1 class="welcome-text">Welcome to My Resume</h1>
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
  .welcome-text {
    padding: 15px;
    text-align: center;
    font-size: 3em;
    color: #c4661f;
    z-index: 2;
  }
}

@media only screen and (max-width: 768px) {
  .head-section {
      .welcome-text {
        text-align: center;
        font-size: 1.6em;
        font-weight: 300;
      }
    }
}
</style>