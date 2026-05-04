<script>
  import Kicker from '$lib/components/Article/Kicker.svelte';
  import Headline from '$lib/components/Article/Headline.svelte';
  import Image from '$lib/components/Media/Image.svelte';
  import { base } from '$app/paths';
  let { data } = $props();
  const pieces = data.pieces;
</script>

<div class="container">
<div class="blue">
  <Kicker text="Sophie's Portfolio" href="{base}/" />
  <Headline text={data.clips.title} />

  <Image src={data.clips.image} alt={data.clips.title} />

  <p>{data.clips.description}</p>
</div>
</div>

<style>
.blue{
  color: var(--color-accent);
  font-family: 'Quantico', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
</style>