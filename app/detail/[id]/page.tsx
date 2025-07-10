'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useCart } from '../../context/cartContext';
import { featuredBooks } from '../../data/books';

export default function BookDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const bookId = parseInt(id);
  const book = featuredBooks.find((b) => b.id === bookId);
  const { addToCart } = useCart();

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--background)]">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold text-[var(--dark)] mb-4">
            Book not found
          </h1>
          <Link href="/" className="text-[var(--purple)] hover:underline">
            Return to homepage
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Book Image */}
            <div className="md:w-1/3">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold text-[var(--dark)] mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-[var(--purple)] mb-4">
                by {book.author}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[var(--dark)] mb-2">
                  Description
                </h3>
                <p className="text-[var(--text)] mb-6">{book.description}</p>
              </div>

              <div className="flex items-center mb-6">
                <div className="flex text-[var(--golden)]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < Math.floor(book.rating) ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {book.rating} ({book.reviews.toLocaleString()} reviews)
                </span>
              </div>

              <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-8">
                <p className="text-2xl font-bold text-[var(--dark)]">
                  ${book.price.toFixed(2)}
                </p>
                <button
                  onClick={() =>
                    addToCart({
                      id: book.id,
                      title: book.title,
                      price: book.price,
                      quantity: 1,
                    })
                  }
                  className="bg-[var(--dark)] cursor-pointer hover:bg-[var(--purple)] text-[var(--light-accent)] font-medium py-2 px-6 rounded-full transition-colors"
                >
                  Add to Cart
                </button>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-[var(--dark)]">
                  Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-600">Pages</h4>
                    <p>{book.pages}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-600">
                      Published
                    </h4>
                    <p>{book.published}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-600">
                      Publisher
                    </h4>
                    <p>{book.publisher}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-600">ISBN</h4>
                    <p>{book.isbn}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-600">Genre</h4>
                    <p>{book.genre}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
