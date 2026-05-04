import pieces from '$lib/data/pieces.yaml';

export const load = ({ params }) => {
  const clip = pieces.clips.find((c) => c.slug === params.slug);

  return {
    showHeader: false,
    showFooter: false,
    pieces,
    clips: clip,
  };
};