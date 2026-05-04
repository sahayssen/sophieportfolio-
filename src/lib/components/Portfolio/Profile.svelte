<!--
@component
Profile.svelte — A personal portfolio profile card.

Displays a headshot, name, tagline, contact links, and an optional
"now / next" bio section. Intended as the hero block of a portfolio page.

USAGE EXAMPLE:
<Profile
  photo="/photos/jane-smith.jpg"
  bio="Currently reporting on evictions for The City.
  email="jane@example.com"
  github="janesmith"
  linkedin="janesmith"

Next, I'm exploring machine learning tools for document analysis."
/>
-->
<script>
  import Image from '$lib/components/Media/Image.svelte';
  import IconEmail from '$lib/components/Icons/IconEmail.svelte';
  import IconGitHub from '$lib/components/Icons/IconGitHub.svelte';
  import IconLinkedIn from '$lib/components/Icons/IconLinkedIn.svelte';
  import ProfileContactLink from './ProfileContactLink.svelte';
  import ProfileBio from './ProfileBio.svelte';

  let { name, tagline, photo, photoAlt, email, github, linkedin, bio } =
    $props();

  const contacts = $derived(
    [
      email
        ? {
            href: `mailto:${email}`,
            label: 'Email',
            external: false,
            icon: IconEmail,
          }
        : null,
      github
        ? {
            href: `https://github.com/${github}`,
            label: 'GitHub',
            external: true,
            icon: IconGitHub,
          }
        : null,
      linkedin
        ? {
            href: `https://linkedin.com/in/${linkedin}`,
            label: 'LinkedIn',
            external: true,
            icon: IconLinkedIn,
          }
        : null,
    ].filter(Boolean)
  );
</script>

<section class="profile">
  <div class="profile-hero">
    <div class="hero-copy">
      <h1>{name}</h1>
      {#if tagline}
        <p class="tagline">{tagline}</p>
      {/if}

      <ProfileBio text={bio} />

       <ul class="contact">
        {#each contacts as contact (contact.label)}
          <ProfileContactLink
            href={contact.href}
            label={contact.label}
            external={contact.external}
            icon={contact.icon}
          />
        {/each}
      </ul>
    </div>

    {#if photo}
      <div class="hero-photo-wrap">
        <Image src={photo} alt={photoAlt ?? name} size="full" />
      </div>
    {/if}
  </div>
</section>

<style lang="scss">
  @use '$lib/styles' as *;

  .profile {
    font-family: 'Quantico';
    color: var(--color-accent);
    margin-top: -40px;
    margin-bottom: var(--spacing-lg);
    padding: 0 0 var(--spacing-md) 0;
  }

  .profile-hero {
    display: grid;
    gap: var(--spacing-md);

    @include tablet {
      grid-template-columns: minmax(0, 1fr) var(--max-width-image-small);
      align-items: start;
    }
  }

  h1 {
    font-size: clamp(3.25rem, 7vw, 4.25rem);
    font-family: inherit;
    color: var(--color-accent);
    line-height: var(--leading-tight);
    margin: 0;
    letter-spacing: var(--letter-spacing-tight);
    margin-bottom: var(--spacing-xxs);

    @include mobile {
      font-size: var(--font-size-display);
    }
  }

  .tagline {
    margin: 0 0 var(--spacing-sm);
    font-size: var(--font-size-xl);
    line-height: var(--leading-caption);
    max-width: 42rem;
  }

  .hero-photo-wrap {
    padding: var(--spacing-sm);

    @include mobile {
      max-width: var(--max-width-image-small);
    }
  }

  .hero-photo-wrap :global(.image-figure) {
    margin: 0;
  }

  .hero-photo-wrap :global(.image) {
    display: block;
    width: 100%;
    max-width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    margin: 0;
    background: var(--color-light-gray);

    @include mobile {
      max-height: 400px;
    }
  }

  .contact {
    list-style: none;
    padding: 1rem;
    margin: -12px 0 var(--spacing-md) 0;
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-md);
  }
</style>
