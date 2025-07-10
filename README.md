# 📚 Bookstore App

A clean and modern online bookstore built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This project demonstrates dynamic routing, state management via React Context, reusable components, and responsive UI using Tailwind. Users can browse books, view detailed information, and add items to a cart and checkout.

---

## 🚀 Features

- 📖 **Browse Featured Books** with details like title, author, price, rating, and image
- 🔍 **Dynamic Book Detail Page** (`/detail/[id]`) with rich descriptions and metadata
- 🛒 **Shopping Cart Functionality** with `addToCart`, `clearCart`, and quantity handling
- 🧾 **Checkout Page** with form validation and order summary
- 📦 **Reusable Components** like `BookCard`, `Header`, `Footer`, and cart context provider
- 🎨 **Fully Responsive Design** with Tailwind CSS
- 📷 **Optimized Images** using `next/image`

---

## 🧱 Project Structure

```
.
├── app/
    ├── layout.tsx
    ├── page.tsx                 # HomePage
    ├── checkout/
    │   └── page.tsx             # Checkout Page
    └── detail/[id]/
    │   └── page.tsx             # Book Detail Page
    ├── components/
    │   ├── bookCard.tsx
    │   ├── header.tsx
    │   └── footer.tsx
    ├── context/
    │   └── cartContext.tsx          # Global cart state management
    ├── data/
        └── books.ts                 # Featured books data (with images)
├── public/
│   └── *.png                    # Book images
├── styles/
│   └── globals.css              # Tailwind
├── tsconfig.json
└── README.md                    # This file
```

---

## 📦 Tech Stack

- **Next.js 14 (App Router)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Context API** (for Cart state)
- **next/image** (for optimized image loading)

---


## 🛠️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/sardaarNiamotullah/qtec-assessment.git
   cd qtec-assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

---

## 📁 Adding New Books

To add new books:

1. Open `data/books.ts`
2. Add a new entry with this structure:
   ```typescript
   {
     id: 9,
     title: "New Book",
     author: "Author Name",
     price: 21.99,
     description: "...",
     rating: 4.7,
     reviews: 1200,
     pages: 300,
     published: "July 2024",
     publisher: "Publisher Name",
     isbn: "1234567890",
     genre: "Genre Name",
     image: "/new-book.png"
   }
   ```
3. Place `new-book.png` in `/public/`

---

## 📦 Deployment

This app can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- Any Node-compatible host

---

## 💡 Improvements for the Future

- ✅ Add quantity selector to cart
- ✅ Add real checkout/payment integration
- ✅ Add book search & category filters
- ✅ Implement user login & orders

---

## 🧑‍💻 Author

**Sardaar Niamotullah** 

**Happy coding! 🚀**