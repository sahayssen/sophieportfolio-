<script>
  import { base } from '$app/paths';
  import Profile from '$lib/components/Portfolio/Profile.svelte';
  let { data } = $props();
  const content = data.content;
</script>

<div class="container">
<div class="title-image">
  <img src="{base}/photos/pixelsophie.png" alt="Sophie Hayssen in blue pixel font">
</div>
<button>
  <span class="button_top"> Writing </span>
</button>
<button>
  <span class="button_top"> Data Projects </span>
</button>
<a href="{base}/social-media" style="text-decoration: none;">
  <button>
    <span class="button_top"> Social Media </span>
  </button>
</a>
</div>



<div class="container">
  <Profile
    name={content.profile.name}
    tagline={content.profile.tagline}
    photo={content.profile.photo}
    photoAlt={content.profile.photoAlt}
    email={content.profile.email}
    github={content.profile.github}
    linkedin={content.profile.linkedin}
    bio={content.profile.bio}
  />
</div> 

<style>

button {
  /* Variables */
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #0018f5;
  font-size: 17px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  margin: 1rem;
}

.button_top {
  display: block;
  box-sizing: border-box;
  border: 2px solid var(--button_outline_color);
  border-radius: var(--button_radius);
  padding: .75em 1.5rem;
  background: var(--button_color);
  color: var(--button_outline_color);
  transform: translateY(-0.2em);
  transition: transform 0.1s ease;
}

button:hover.button_top {
  /* Pull the button upwards when hovered */
  transform: translateY(-0.33em);
}

button:active.button_top {
  /* Push the button downwards when pressed */
  transform: translateY(0);
}
</style>



