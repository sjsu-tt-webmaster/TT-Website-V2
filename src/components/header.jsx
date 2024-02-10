import { Transition } from "@headlessui/react";
import clsx from "clsx";
import NextLink from "next/link";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";

const ROUTES = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Brothers", path: "/brothers" },
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

const Header = function Header() {
  const { asPath, pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-6 top-6 z-10 mx-auto flex h-16 items-center justify-between rounded-lg bg-gray-800 px-4 text-white">
      <h1 className="mr-6 text-xl font-semibold">&Theta;&Tau; | &Omega;&Epsilon; Chapter</h1>
      <nav className="hidden md:block">
        <ul className="flex space-x-2">
          {ROUTES.map(({ path, name }) => (
            <li key={name}>
              <Link active={[asPath, pathname].includes(path)} href={path}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="md:hidden" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <svg
          className={clsx("h-8 w-8 transition", { "rotate-90": isOpen })}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        as={Fragment}
        show={isOpen}
      >
        <nav className="absolute inset-x-0 -bottom-2 translate-y-full rounded-lg bg-gray-800 p-4 transition md:hidden">
          <ul className="flex flex-col items-stretch space-y-4">
            {ROUTES.map(({ path, name }) => (
              <li key={name} onClick={() => setIsOpen(false)}>
                <Link className="block text-center" active={pathname === path} href={path}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Transition>
    </header>
  );
};

export default Header;
