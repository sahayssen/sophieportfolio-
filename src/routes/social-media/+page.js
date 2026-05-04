import pieces from '$lib/data/pieces.yaml';

export function load() {
  return {
    // Set to false to hide the NYCity News Service header
    showHeader: false,
    // Set to false to hide the site footer
    showFooter: false,
    pieces,
  };
}