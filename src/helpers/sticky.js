export default function stickyFn(ref) {
  const nav = document.querySelector('nav');

  const viewPortHeight = window.innerHeight;
  const viewPortWidth = window.innerWidth;
  const elementHeight = ref.current.getBoundingClientRect().height;
  const navHeight = nav.getBoundingClientRect().height;

  const roundValue = viewPortWidth >= 1536 ? 40 : viewPortWidth >= 1024 ? 32 : 24;
  const topValue = navHeight - roundValue;
  const conditionalValue = viewPortHeight - navHeight + roundValue;

  // element shorter than view port
  if (elementHeight <= conditionalValue && ref.current.style.top !== `${topValue}px`)
    ref.current.style.top = `${topValue}px`;

  // element longer than view port and
  if (elementHeight > conditionalValue && ref.current.style.top !== `${viewPortHeight - elementHeight}px`) {
    ref.current.style.top = `${viewPortHeight - elementHeight}px`;
  }
}
