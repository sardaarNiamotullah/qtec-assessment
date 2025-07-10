import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--light-accent)] border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--dark)] mb-4">
              About QTECbook
            </h3>
            <p className="text-[var(--text)] text-sm">
              Your premier destination for quality books across all genres. We
              bring knowledge to your fingertips.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--dark)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/not-found"
                  className="text-[var(--text)] hover:text-[var(--purple)] text-sm transition-colors"
                >
                  New Releases
                </Link>
              </li>
              <li>
                <Link
                  href="/not-found"
                  className="text-[var(--text)] hover:text-[var(--purple)] text-sm transition-colors"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="/not-found"
                  className="text-[var(--text)] hover:text-[var(--purple)] text-sm transition-colors"
                >
                  Coming Soon
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--dark)] mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/not-found"
                  className="text-[var(--text)] hover:text-[var(--purple)] text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/not-found"
                  className="text-[var(--text)] hover:text-[var(--purple)] text-sm transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/not-found"
                  className="text-[var(--text)] hover:text-[var(--purple)] text-sm transition-colors"
                >
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--dark)] mb-4">
              Newsletter
            </h3>
            <p className="text-[var(--text)] text-sm mb-2">
              Subscribe for updates and offers
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 py-2 px-3 bg-white text-[var(--text)] border border-gray-200 rounded-l focus:outline-none focus:ring-1 focus:ring-[var(--golden)] text-sm"
              />
              <Link 
                href="/not-found"
                className="bg-[var(--dark)] text-[var(--light-accent)] px-4 py-2 rounded-r text-sm hover:bg-[var(--purple)] transition-colors flex items-center justify-center"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-[var(--text)] text-sm">
          <p>© {new Date().getFullYear()} QTECbook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}