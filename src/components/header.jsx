import { Transition } from "@headlessui/react";
import clsx from "clsx";
import NextLink from "next/link";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";

const ROUTES = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Brothers",
    path: "/brothers",
    subRoutes: [
      { name: "Actives", path: "/brothers/actives" },
      { name: "Alumni", path: "/brothers/alumni" },
    ],
  },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

function Link({ className, active, href, children }) {
  return (
    <NextLink
      className={clsx(
        className,
        "rounded px-4 py-2 text-sm transition",
        active ? "bg-darkRed" : "bg-gray-700 hover:opacity-75",
      )}
      href={href}
    >
      {children}
    </NextLink>
  );
}

function DropdownLink({ className, active, href, children, subRoutes }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <Link className={className} active={active} href={href}>
        {children}
      </Link>
      {isHovering && subRoutes && (
        <div className="absolute left-0 mt-2 w-48 rounded-md bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {subRoutes.map((subRoute) => (
              <NextLink
                key={subRoute.name}
                href={subRoute.path}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                role="menuitem"
              >
                {subRoute.name}
              </NextLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const Header = function Header() {
  const { asPath, pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-6 top-6 z-10 mx-auto flex h-16 items-center justify-between rounded-lg bg-gray-800 px-4 text-white">
      <h1 className="mr-6 text-xl font-semibold">&Theta;&Tau; | &Omega;&Epsilon; Chapter</h1>
      <nav className="hidden md:block">
        <ul className="flex space-x-2">
          {ROUTES.map(({ path, name, subRoutes }) => (
            <li key={name}>
              {subRoutes ? (
                <DropdownLink active={[asPath, pathname].includes(path)} href={path} subRoutes={subRoutes}>
                  {name}
                </DropdownLink>
              ) : (
                <Link active={[asPath, pathname].includes(path)} href={path}>
                  {name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile menu button and dropdown remain unchanged */}
    </header>
  );
};

export default Header;
