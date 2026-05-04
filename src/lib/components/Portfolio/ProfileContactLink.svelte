<!--
@component
ProfileContactLink.svelte — Reusable contact item for Profile.

Renders a single list item with a link, optional external behavior,
and an icon snippet.
-->
<script>
  let { href = '', label = '', external = false, icon = null } = $props();
</script>

<li class="contact-item">
  <a
    {href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener' : undefined}
  >
    {#if icon}
      {@const Icon = icon}
      <Icon />
    {/if}
    <span>{label}</span>
  </a>
</li>

<style lang="scss">
  .contact-item a {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
    text-decoration: none;
    color: var(--color-accent);
    font-size: var(--font-size-sm);
    border: var(--border-width-thin) solid var(--color-accent);
    background: var(--color-white);
    padding: var(--spacing-xxs) var(--spacing-xs);
    transition: var(--transition-color);

    &:hover {
      color: var(--color-text);
      border-color: var(--color-border);
    }
  }

  .contact-item :global(svg) {
    width: var(--font-size-lg);
    height: var(--font-size-lg);
    flex-shrink: 0;
  }
</style>
