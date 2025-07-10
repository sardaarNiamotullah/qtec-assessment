'use client';

import Link from 'next/link';
import { useCart } from '../context/cartContext';
import Header from '../components/header';
import Footer from '../components/footer';

export default function CartPage() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  const handleDecrease = (id: number) => {
    const item = cartItems.find((i) => i.id === id);
    if (item && item.quantity > 1) {
      addToCart({ ...item, quantity: -1 });
    } else {
      removeFromCart(id);
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--dark)] mb-2">Your Shopping Cart</h1>
          <Link href="/" className="text-[var(--purple)] hover:underline text-sm">
            ← Continue shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <Link
              href="/"
              className="inline-block bg-[var(--purple)] text-white py-2 px-6 rounded-full hover:bg-[var(--dark)] transition-colors"
            >
              Browse Books
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-100">
              {cartItems.map((item) => (
                <li key={item.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-medium text-[var(--dark)]">{item.title}</h3>
                      {/* <p className="text-sm text-gray-500 mb-2">by {item.quantity}</p> */}
                      <p className="text-[var(--purple)] font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border rounded-full">
                        <button
                          onClick={() => handleDecrease(item.id)}
                          className="px-3 py-1 text-gray-600 hover:text-[var(--purple)] transition-colors"
                        >
                          −
                        </button>
                        <span className="px-2 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => addToCart({ ...item, quantity: 1 })}
                          className="px-3 py-1 text-gray-600 hover:text-[var(--purple)] transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-[var(--dark)]">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={clearCart}
                  className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                >
                  Clear cart
                </button>
                <Link
                  href="/checkout"
                  className="bg-[var(--purple)] hover:bg-[var(--dark)] text-white py-2 px-6 rounded-full transition-colors"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}