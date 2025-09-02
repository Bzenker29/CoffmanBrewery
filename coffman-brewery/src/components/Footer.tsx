import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--brewery-dark)] text-[var(--brewery-light)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brewery Info */}
          <div>
            <h3 className="text-xl font-bold text-[var(--brewery-primary)] mb-4">
              Coffman Brewery
            </h3>
            <p className="text-sm mb-4">
              Your one stop shop for a great time with friends
            </p>
            <div className="text-sm">
              <p>123 Brewery Lane</p>
              <p>Aiken, SC 12345</p>
              <p>(444) 555-1234</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[var(--brewery-primary)] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[var(--brewery-primary)]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-[var(--brewery-primary)]"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/beer"
                  className="hover:text-[var(--brewery-primary)]"
                >
                  Beer List
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-[var(--brewery-primary)]"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-[var(--brewery-primary)] mb-4">
              Hours
            </h4>
            <div className="text-sm space-y-1">
              <p>Mon - Thur: 2PM - 9PM</p>
              <p>Fri - Sat: 12PM - 11PM</p>
              <p>Sun: 12PM - 10PM</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-[var(--brewery-primary)] mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[var(--brewery-light)] hover:text-[var(--brewery-primary)]"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-[var(--brewery-light)] hover:text-[var(--brewery-primary)]"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--brewery-secondary)] mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Coffman Brewery. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
}
