'use client';

import { useState } from 'react';
import { useCart } from '../context/cartContext';
import Header from '../components/header';
import Footer from '../components/footer';

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();

  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const isFormValid = form.name && form.email && form.address;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryCharge = subtotal > 0 ? 5 : 0;
  const total = subtotal + deliveryCharge;

  const handlePlaceOrder = () => {
    if (isFormValid) {
      alert('Order placed successfully!');
      clearCart();
      setForm({ name: '', email: '', address: '' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--dark)] mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your purchase</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Form */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-[var(--dark)]">Shipping Information</h2>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--golden)] focus:border-transparent transition"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--golden)] focus:border-transparent transition"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Shipping Address
                </label>
                <textarea
                  id="address"
                  placeholder="123 Main St, City, Country"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg h-32 focus:ring-2 focus:ring-[var(--golden)] focus:border-transparent transition"
                />
              </div>
            </div>
          </div>

          {/* Right - Summary */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 h-fit sticky top-4">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-[var(--dark)]">Order Summary</h2>
            </div>
            
            <div className="p-6">
              <ul className="divide-y divide-gray-100 mb-6">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-3 flex justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 w-10 h-10 rounded flex items-center justify-center text-gray-400 text-xs">
                        {item.quantity}
                      </div>
                      <div>
                        <p className="font-medium text-[var(--dark)]">{item.title}</p>
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                      </div>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3 border-t border-gray-100 pt-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span>${deliveryCharge.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-[var(--dark)] pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <button
                onClick={handlePlaceOrder}
                disabled={!isFormValid}
                className={`mt-6 w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
                  isFormValid
                    ? 'bg-[var(--purple)] hover:bg-[var(--dark)] shadow-md'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Place Order
              </button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                By placing your order, you agree to our Terms of Service
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}