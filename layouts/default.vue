<template>
  <div class="page-wrapper">
    <Sidebar />
    <nuxt />
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'

export default {
  components: {
    Sidebar
  }
}
</script>

<style lang="postcss">
body {
  @apply text-gray-800;
}

a {
  @apply text-red-600 transition-all duration-500 ease-in-out;

  &:hover {
    @apply text-red-900;
  }
}

.page-wrapper {
  @apply border-red-600 min-h-screen p-8;
  border-top-width: 20px;
  display: grid;
  grid-gap: 3rem;
  grid-template-rows: max-content 1fr;
}

@screen lg {
  .page-wrapper {
    @apply p-20;
    border-top-width: 0;
    border-left-width: 20px;
    grid-template-areas: 'sidebar' 'content';
    grid-template-columns: 200px auto;
    grid-template-rows: 1fr;
    grid-gap: 2rem;
  }
}
</style>
