export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="flex justify-between items-center px-4 py-3 shadow-md">
        <div className="text-xl font-bold">Товар</div>
        <button className="bg-gray-100 px-3 py-1 rounded-full text-sm">Кошик</button>
      </header>

      <section className="p-4">
        <div className="bg-gray-200 h-48 rounded-xl mb-4"></div>
        <h1 className="text-xl font-bold mb-1">iPhone 13 Pro</h1>
        <p className="text-sm text-gray-500 mb-3">256GB / Graphite</p>

        <p className="text-red-600 text-lg font-bold mb-4">₴29 999</p>

        <div className="flex gap-2 mb-4">
          {["128GB", "256GB", "512GB"].map((variant) => (
            <button
              key={variant}
              className="px-3 py-1 text-sm bg-gray-100 rounded-full"
            >
              {variant}
            </button>
          ))}
        </div>

        <button className="w-full bg-black text-white py-3 rounded-full text-sm">
          Додати в кошик
        </button>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Опис товару</h2>
          <p className="text-sm text-gray-700">
            Потужний смартфон з чіпом A15 Bionic, чудовою камерою і тривалим часом автономної роботи. Підтримує 5G та має дисплей Super Retina XDR.
          </p>
        </div>
      </section>

      <footer className="text-xs text-center text-gray-500 py-4 border-t mt-6">
        © 2025 LowcostBox
      </footer>
    </main>
  );
}