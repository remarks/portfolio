<template>
  <div class="container">
    <div class="max-w-2xl text-xl lg:text-2xl">
      <h1 class="leading-tight text-4xl lg:text-5xl font-extrabold">
        Hi, I'm Mark Pinero.
      </h1>
      <p class="mt-4">
        I'm a Senior Front End Developer specializing in Vue.js, currently working for
        <a href="https://humnutrition.com" class="font-extrabold" rel="noopener">
          HUM Nutrition
        </a>
        in Los Angeles, CA.
      </p>
      <p class="mt-4">
        Working with creative agencies and various startups, I have a keen eye for UX and design.
      </p>
      <p v-if="consulting" class="mt-4">
        <a href="mailto:mark@markpinero.com">I'm available for consulting.</a>
      </p>
    </div>

    <Work class="mt-8" />
  </div>
</template>

<script>
import Work from '~/components/Work'

export default {
  components: {
    Work
  },

  data: () => ({
    consulting: true
  })
}
</script>
