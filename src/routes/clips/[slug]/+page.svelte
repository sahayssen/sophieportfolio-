<script>
  import Kicker from '$lib/components/Article/Kicker.svelte';
  import Headline from '$lib/components/Article/Headline.svelte';
  import Image from '$lib/components/Media/Image.svelte';
  import { base } from '$app/paths';
  let { data } = $props();
  const pieces = data.pieces;
</script>

<div class="container">
  <Kicker text="Sophie's Portfolio" href="{base}/" />
  <Headline text={data.clips.title} />

  <Image src={data.clips.image} alt={data.clips.title} />

  <p>{data.clips.description}</p>
</div>
