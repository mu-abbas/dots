import Link from 'next/link';
import MobileNavAccordionItem from './MobileNavAccordionItem';

function MobileNavLink({ label, href, isActive, color = 'blue', subLinks }) {
  return (
    <li className={`flex gap-4 items-center`}>
      {href !== '/services' && href !== '/resources' && (
        <Link
          href={href}
          className={`transition duration-300 ${
            isActive ? (color === 'blue' ? 'text-blue' : 'text-green') : color === 'blue' ? '' : 'text-offWhite'
          } ${color === 'blue' ? 'hover:text-blue' : 'hover:text-green'}`}
        >
          {label}
        </Link>
      )}
      {(href === '/services' || href === '/resources') && (
        <MobileNavAccordionItem isActive={isActive} subLinks={subLinks} href={href} label={label} />
      )}
    </li>
  );
}

export default MobileNavLink;
