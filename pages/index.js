
// pages/index.js (Next.js site entry)
import Head from 'next/head';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: "Nike Air Foamposite One 'Penny'",
    price: 240,
    image: "/sneaker1.jpg",
    sizes: "Men/Women US 7-13",
    description: "A timeless classic with futuristic vibes, built for both performance and style."
  },
  {
    id: 2,
    name: "Air Jordan 1 Mid 'Neutral Grey'",
    price: 125,
    image: "/sneaker2.jpg",
    sizes: "Men/Women US 7-13",
    description: "A sleek and versatile AJ1 Mid featuring neutral tones for everyday wear."
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Sneaks Link</title>
        <meta name="description" content="Your plug for the hottest sneakers." />
      </Head>

      <header className="flex justify-between items-center p-4 shadow-md">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Sneaks Link Logo" width={50} height={50} />
          <h1 className="text-xl font-bold">Sneaks Link</h1>
        </div>
      </header>

      <main className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Available Sneakers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map(product => (
            <div key={product.id} className="border rounded-lg p-4">
              <Image src={product.image} alt={product.name} width={500} height={400} className="rounded" />
              <h3 className="text-lg font-bold mt-2">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-sm">Sizes: {product.sizes}</p>
              <p className="font-semibold mt-1">${product.price}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center p-6 text-sm text-gray-500">
        <p>© 2025 Sneaks Link. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </footer>
    </>
  );
}
