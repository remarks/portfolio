<template>
  <section class="portfolio">
    <h1 class="leading-tight text-3xl md:text-4xl font-extrabold">
      Work
    </h1>
    <ul class="mt-8 work-grid">
      <li v-for="(project, i) in projects" :key="i">
        <a :href="project.url" rel="nofollow">
          <img :src="'/work/' + project.image" :class="'border-' + project.style" class="block border-8 mb-4" />
          <h2 :class="'text-' + project.style" class="text-xl md:text-2xl font-bold leading-normal no-underline">
            {{ project.title }}
          </h2>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import projects from '~~/data/work.json'

export default {
  data: () => ({
    projects
  })
}
</script>

<style lang="postcss">
.work-grid {
  display: grid;
  grid-gap: 2rem;
}

@screen md {
  .work-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
  }
}
</style>
