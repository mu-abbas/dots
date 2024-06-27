export default function stickyFn(ref, lastSection = false) {
  const nav = document.querySelector('nav');
  const main = document.querySelector('main');
  const mainTop = main.getBoundingClientRect().top;
  const viewPortHeight = window.innerHeight;
  const viewPortWidth = window.innerWidth;
  const elementEnd = ref.current.getBoundingClientRect().bottom;
  const elementTop = ref.current.getBoundingClientRect().top;
  const elementHeight = ref.current.getBoundingClientRect().height;
  const navHeight = nav.getBoundingClientRect().height;
  const roundValue = viewPortWidth >= 1536 ? 40 : viewPortWidth >= 1024 ? 32 : 24;
  const topValue = navHeight - roundValue;
  const conditionalValue = viewPortHeight - navHeight + roundValue;

  // element shorter than view port
  if (
    elementHeight <= conditionalValue &&
    elementTop <= topValue &&
    (ref.current.style.top === 'unset' || (lastSection && main.style.top === 'unset'))
  ) {
    if (lastSection && elementTop > topValue - 50) main.style.top = `${mainTop}px`;
    ref.current.style.top = `${topValue}px`;
  }

  if (
    elementHeight <= conditionalValue &&
    elementTop > topValue &&
    (ref.current.style.top !== 'unset' || (lastSection && main.style.top !== 'unset'))
  ) {
    if (lastSection) main.style.top = 'unset';
    ref.current.style.top = 'unset';
  }

  // element longer than view port and
  if (
    elementHeight > conditionalValue &&
    elementEnd - roundValue <= viewPortHeight &&
    elementEnd - roundValue > viewPortHeight - 50 &&
    (ref.current.style.top === 'unset' || (lastSection && main.style.top === 'unset'))
  ) {
    if (lastSection) main.style.top = `${mainTop}px`;
    ref.current.style.top = `${elementTop}px`;
  }

  if (
    elementHeight > conditionalValue &&
    elementEnd - roundValue > viewPortHeight &&
    (ref.current.style.top !== 'unset' || (lastSection && main.style.top !== 'unset'))
  ) {
    if (lastSection) main.style.top = 'unset';
    ref.current.style.top = 'unset';
  }
}
