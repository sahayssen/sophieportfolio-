<script>
  import Card from '$lib/components/Data/Card.svelte';
  import CardGrid from '$lib/components/Data/CardGrid.svelte';
  import { base } from '$app/paths';

  let { data } = $props();
  const pieces = data.pieces;
</script>

<div class="container">
 <img src="{base}/photos/pixelsocialmedia.png" alt="Sophie Hayssen in blue pixel font">
</div>
<div class="container wide">
<CardGrid>
    {#each pieces.clips as clip (clip.title)}
      <Card
        href="{base}/clips/{clip.slug}"
        image={clip.image}
        imageAlt={clip.title}
      >
        <h3>{clip.title}</h3>
        <p>{clip.description}</p>
      </Card>
    {/each}
  </CardGrid>
</div>