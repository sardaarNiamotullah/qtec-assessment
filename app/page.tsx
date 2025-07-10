import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./home/page";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}