import BookCard from "../components/bookCard";
import { featuredBooks } from "../data/books";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <main className="container mx-auto px-4 py-12 flex-grow">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--dark)] mb-6">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-lg text-[var(--text)] max-w-2xl mx-auto mb-8">
            Explore our curated collection of books across all genres. From bestsellers to hidden gems, we have something for every reader.
          </p>
          <button className="bg-[var(--dark)] hover:bg-[var(--purple)] text-[var(--light-accent)] font-medium py-2 px-6 rounded-full transition-colors">
            Browse Collection
          </button>
        </section>

        {/* Featured Books */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--dark)] mb-6 border-b border-gray-200 pb-2">
            Featured Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <div key={book.id} className="h-full">
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
