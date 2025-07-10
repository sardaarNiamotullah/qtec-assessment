import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-md">
          <div className="text-[var(--purple)] text-9xl font-bold mb-4">404</div>
          <h1 className="text-3xl font-bold text-[var(--dark)] mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-[var(--text)] mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[var(--dark)] hover:bg-[var(--purple)] text-[var(--light-accent)] font-medium py-2 px-6 rounded-full transition-colors"
            >
              Go to Homepage
            </Link>
            <Link
              href="/"
              className="border border-[var(--dark)] text-[var(--dark)] hover:bg-gray-100 font-medium py-2 px-6 rounded-full transition-colors"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}