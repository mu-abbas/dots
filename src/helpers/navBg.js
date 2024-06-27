export default function navBg(ref) {
  const nav = document.querySelector('nav');
  const navHeight = nav.getBoundingClientRect().height;
  const elementTop = ref.current.getBoundingClientRect().top;

  if (elementTop <= navHeight * 4 && !nav.classList.contains('bg-beige')) {
    nav.classList.add('bg-beige', 'sticky-border');
  }

  if (elementTop > navHeight * 4 && nav.classList.contains('bg-beige')) {
    nav.classList.remove('bg-beige', 'sticky-border');
  }
}
