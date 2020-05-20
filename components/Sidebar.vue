<template>
  <nav class="relative spacing-y-8">
    <!-- <ul class="text-xl font-bold sidebar">
      <li>Work</li>
      <li>Blog</li>
    </ul> -->
    <ul class="sidebar sidebar-secondary">
      <li>
        <a href="https://www.linkedin.com/in/markpinero" target="_blank" rel="noopener">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="https://www.github.com/remarks" target="_blank" rel="noopener">
          Github
        </a>
      </li>
      <li><a href="/resume.pdf" target="_blank" rel="noopener">Resume</a></li>
      <li class="lg:pt-6"><a href="mailto:mark@markpinero.com">Contact</a></li>
    </ul>
  </nav>
</template>

<style lang="postcss">
:root {
  --stack: 1rem;
}

.sidebar {
  display: grid;
  grid-gap: var(--stack);
  grid-template-columns: repeat(4, max-content);
}

@screen lg {
  .sidebar {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(max-content);
    --stack: 0.5rem;
  }

  .sidebar-secondary {
    --stack: 0.25rem;
  }
}
</style>
