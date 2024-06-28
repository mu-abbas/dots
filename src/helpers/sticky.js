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
    (parseInt(ref.current.style.top) >= topValue + 50 ||
      parseInt(ref.current.style.top) <= topValue - 50 ||
      parseInt(main.style.top) >= mainShortTop + 50 ||
      parseInt(main.style.top) <= mainShortTop - 50 ||
      !ref.current.style.top ||
      !main.style.top)
  ) {
    if (lastSection) {
      main.style.top = `${mainShortTop}px`;
    }
    ref.current.style.top = `${topValue}px`;
  }

  // element longer than view port and

  if (
    elementHeight > conditionalValue &&
    (parseInt(ref.current.style.top) >= viewPortHeight - elementHeight + 50 ||
      parseInt(ref.current.style.top) <= viewPortHeight - elementHeight - 50 ||
      parseInt(main.style.top) >= mainLongTop + 50 ||
      parseInt(main.style.top) <= mainLongTop - 50 ||
      !ref.current.style.top ||
      !main.style.top)
  ) {
    if (lastSection) {
      main.style.top = `${mainLongTop}px`;
    }
    ref.current.style.top = `${viewPortHeight - elementHeight}px`;
  }
}
