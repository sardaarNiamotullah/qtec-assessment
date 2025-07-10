'use client';

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/cartContext";
import type { Book } from "../data/books";

export default function BookCard({ book }: { book: Book }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition flex flex-col h-full">
      <Link href={`/detail/${book.id}`} className="block">
        <div className="relative w-full h-64">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
      </Link>

      <div className="flex flex-col justify-between flex-grow p-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-[var(--dark)] mb-1">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="font-medium text-[var(--purple)]">
              ${book.price.toFixed(2)}
            </span>
            <span className="text-yellow-500">
              ★ {book.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <button
          onClick={() =>
            addToCart({
              id: book.id,
              title: book.title,
              price: book.price,
              quantity: 1,
            })
          }
          className="bg-[var(--dark)] cursor-pointer hover:bg-[var(--purple)] text-[var(--light-accent)] font-medium py-2 px-4 rounded-full transition-colors text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
