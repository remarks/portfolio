<template>
  <div class="container space-y-8 md:space-y-16">
    <div class="max-w-2xl space-y-4 text-xl leading-snug lg:text-2xl lg:space-y-6">
      <h1 class="text-4xl font-extrabold leading-none tracking-tight lg:text-5xl">
        Hi, I'm Mark Pinero.
      </h1>
      <p>
        I'm a Senior Front End Developer specializing in <strong>Vue.js</strong>, currently working for
        <a href="https://humnutrition.com" class="font-extrabold" rel="noopener">
          HUM Nutrition
        </a>
        in Los Angeles, CA.
      </p>
      <p>
        Working with various creative agencies and startups, I have a keen eye for user experience and design.
      </p>
      <p v-if="consulting">
        <a href="mailto:mark@markpinero.com">I'm available for consulting.</a>
      </p>
    </div>

    <Work />
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
