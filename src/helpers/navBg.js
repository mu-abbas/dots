export default function navBg(ref) {
  const nav = document.querySelector('nav');
  const navHeight = nav.getBoundingClientRect().height;
  const elementTop = ref.current.getBoundingClientRect().top;
  const bgColor = Array.from(ref.current.classList)
    ?.filter(item => item.startsWith('nav-'))
    ?.at(0)
    ?.split('-')
    ?.at(1);
  const bgClassName = Array.from(nav.classList)
    ?.filter(item => item.startsWith('bg-'))
    ?.at(0);

  if (elementTop <= navHeight * 3.5 && !bgClassName) {
    nav.classList.add(`${bgColor ? `bg-${bgColor}` : 'bg-beige'}`, 'sticky-border');
  }

  if (elementTop > navHeight * 3.5 && bgClassName) {
    nav.classList.remove(bgClassName, 'sticky-border');
  }
}
