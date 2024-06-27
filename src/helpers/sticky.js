export default function stickyFn(ref, headerBg = false, hero = false, lastSection = false) {
  const nav = document.querySelector('nav');
  const main = document.querySelector('main');
  const mainTop = main.getBoundingClientRect().top;
  const viewPortHeight = window.innerHeight;
  const viewPortWidth = window.innerWidth;
  const elementEnd = ref.current.getBoundingClientRect().bottom;
  const elementTop = ref.current.getBoundingClientRect().top;
  const elementHeight = ref.current.getBoundingClientRect().height;
  const navHeight = document.querySelector('nav').getBoundingClientRect().height;
  const roundValue = viewPortWidth >= 1536 ? 40 : viewPortWidth >= 1024 ? 32 : 24;
  const topValue = hero ? 0 : navHeight - roundValue;
  const conditionalValue = viewPortHeight - navHeight + roundValue;

  // element shorter than view port
  if (elementHeight <= conditionalValue && ref.current.style.top !== topValue) {
    if (lastSection && elementTop <= topValue && main.style.top === 'unset') {
      main.style.top = `${mainTop}px`;
    } else if (lastSection && elementTop > topValue && main.style.top !== 'unset') {
      main.style.top = 'unset';
    } else {
      ref.current.style.top = `${topValue}px`;
    }
  }

  // element longer than view port and
  if (
    elementHeight > conditionalValue &&
    elementEnd - roundValue <= viewPortHeight &&
    ref.current.style.top === 'unset'
  ) {
    if (lastSection) {
      main.style.top = `${mainTop}px`;
    }
    ref.current.style.top = `${elementTop}px`;
  }

  if (
    elementHeight > conditionalValue &&
    elementEnd - roundValue > viewPortHeight &&
    ref.current.style.top !== 'unset'
  ) {
    if (lastSection) {
      main.style.top = 'unset';
    }
    ref.current.style.top = 'unset';
  }

  // changing nav bar bg color
  if (headerBg && elementTop <= navHeight * 4 && !nav.classList.contains('bg-beige')) {
    nav.classList.add('bg-beige', 'sticky-border');
  }

  if (headerBg && elementTop > navHeight * 4 && nav.classList.contains('bg-beige')) {
    nav.classList.remove('bg-beige', 'sticky-border');
  }
}
