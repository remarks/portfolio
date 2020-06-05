<template>
  <section id="portfolio" class="space-y-8">
    <h1 class="text-3xl font-extrabold leading-none tracking-tight lg:text-4xl">
      Work
    </h1>
    <ul class="work-grid">
      <li v-for="(project, i) in projects" :key="i">
        <a :href="project.url" rel="nofollow" target="_blank">
          <img :src="'/work/' + project.image" :class="'border-' + project.style" class="block mb-4 border-8" />
          <h2 :class="'text-' + project.style" class="text-xl font-bold leading-normal no-underline lg:text-2xl">
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
