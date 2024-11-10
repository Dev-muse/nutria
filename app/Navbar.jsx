'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './assets/nutria-logo.svg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const navItems = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Team',
    link: '/team',
  },
  {
    label: 'Process',
    link: '/process',
  },
  {
    label: 'Pricing',
    link: '/pricing',
  },
  {
    label: 'Blog',
    link: '/blog',
  },
];

export default function Navbar() {
  const pathName = usePathname();
  console.log('curr path', pathName);
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <div className="bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-8 w-auto"
                    src={Logo}
                    width={24}
                    height={24}
                    alt="Nutria logo"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="hidden sm:ml-6 md:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                  {navItems.map(({ label, link }, id) => {
                    return (
                      <Link
                        href={link}
                        key={id}
                        className={`${
                          pathName == link
                            ? 'inline-flex items-center border-b-2 border-secondary px-1 pt-1 text-sm font-medium text-secondary'
                            : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-white hover:text-secondary'
                        }`}
                      >
                        {label}
                      </Link>
                    );
                  })}
                </div>
                <button className="hidden md:flex items-center text-black py-2 px-4 m-1 ml-7 rounded-lg text-sm lg:text-base bg-secondary">
                  Contact Us
                </button>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}

              {navItems.map(({ label, link }, id) => {
                return (
                  <DisclosureButton
                    as="a"
                    href={link}
                    key={id}
                    className={`${
                      pathName == link
                        ? 'block border-l-4 border-secondary bg-primary py-2 pl-3 pr-4 text-base font-medium text-white'
                        : 'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                    }`}
                  >
                    {label}
                  </DisclosureButton>
                );
              })}
            </div>
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
}
