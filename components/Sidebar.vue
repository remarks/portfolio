<template>
  <div class="relative stack">
    <!-- <ul class="sidebar font-bold text-xl">
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
      <li class="md:pt-6"><a href="mailto:mark@markpinero.com">Contact</a></li>
    </ul>
  </div>
</template>

<style lang="postcss">
:root {
  --stack: 1rem;
}

.stack > * + * {
  margin-top: 2rem;
}

.sidebar {
  display: grid;
  grid-gap: var(--stack);
  grid-template-columns: repeat(4, max-content);
}

@screen md {
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
