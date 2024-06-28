export default function stickyFn(ref, lastSection = false) {
  const nav = document.querySelector('nav');
  const main = document.querySelector('main');

  const viewPortHeight = window.innerHeight;
  const viewPortWidth = window.innerWidth;
  const elementHeight = ref.current.getBoundingClientRect().height;
  const navHeight = nav.getBoundingClientRect().height;
  const mainHeight = main.getBoundingClientRect().height;

  const roundValue = viewPortWidth >= 1536 ? 40 : viewPortWidth >= 1024 ? 32 : 24;
  const topValue = navHeight - roundValue;
  const conditionalValue = viewPortHeight - navHeight + roundValue;
  const mainShortTop = -(mainHeight - elementHeight);
  const mainLongTop = viewPortHeight - mainHeight;

  // element shorter than view port
  if (
    elementHeight <= conditionalValue &&
    (ref.current.style.top !== `${topValue}px` || main.style.top !== `${mainShortTop}px`)
  ) {
    if (lastSection) {
      main.style.top = `${mainShortTop}px`;
    } else {
      ref.current.style.top = `${topValue}px`;
    }
  }

  // element longer than view port and
  if (
    elementHeight > conditionalValue &&
    (ref.current.style.top !== `${viewPortHeight - elementHeight}px` || main.style.top !== `${mainLongTop}px`)
  ) {
    if (lastSection) {
      main.style.top = `${mainLongTop}px`;
    } else {
      ref.current.style.top = `${viewPortHeight - elementHeight}px`;
    }
  }
}
