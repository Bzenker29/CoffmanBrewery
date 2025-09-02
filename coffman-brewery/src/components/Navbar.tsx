"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[var(--brewery-light)] shadow-md border-b-2 border-[var(--brewery-accent)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-[var(--brewery-dark)]"
            >
              Coffman Brewery
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className=" font-bold text-[var(--brewery-dark)] hover:text-[var(--brewery-primary-dark)]"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className=" font-bold text-[var(--brewery-dark)] hover:text-[var(--brewery-primary-dark)]"
            >
              Menu
            </Link>
            <Link
              href="/beer"
              className=" font-bold text-[var(--brewery-dark)] hover:text-[var(--brewery-primary-dark)]"
            >
              Beer List
            </Link>
            <Link
              href="/contact"
              className=" font-bold text-[var(--brewery-dark)] hover:text-[var(--brewery-primary-dark)]"
            >
              Contact
            </Link>
            <Link
              href="/events"
              className="font-bold text-[var(--brewery-dark)] hover:text-[var(--brewery-primary-dark)]"
            >
              Events
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--brewery-primary)] hover:text-[var(--brewery-primary-dark)]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/*Mobile Menu*/}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 text-[var(--brewery-dark)]"
              >
                Home
              </Link>
              <Link
                href="/menu/page.tsx"
                className="block px-3 py-2 text-[var(--brewery-dark)]"
              >
                Menu
              </Link>
              <Link
                href="/beer/page.tsx"
                className="block px-3 py-2 text-[var(--brewery-dark)]"
              >
                Beer List
              </Link>
              <Link
                href="/contact/page.tsx"
                className="block px-3 py-2 text-[var(--brewery-dark)]"
              >
                Contact
              </Link>
              <Link
                href="/events/page.tsx"
                className="block px-3 py-2 text-[var(--brewery-dark)]"
              >
                Events
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
