export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="flex justify-between items-center px-4 py-3 shadow-md">
        <div className="text-xl font-bold">Каталог</div>
        <button className="bg-gray-100 px-3 py-1 rounded-full text-sm">Кошик</button>
      </header>

      <section className="px-4 py-2">
        <input
          type="text"
          placeholder="Пошук товарів..."
          className="w-full px-4 py-2 border rounded-full text-sm shadow-sm"
        />
      </section>

      <section className="px-4 py-2 flex gap-2 overflow-x-auto">
        {["Усі", "Смартфони", "Ноутбуки", "Побутова", "Аксесуари"].map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 text-sm bg-gray-100 rounded-full whitespace-nowrap"
          >
            {cat}
          </button>
        ))}
      </section>

      <section className="p-4 grid grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div key={id} className="rounded-lg border p-3 text-sm">
            <div className="bg-gray-200 h-24 rounded mb-2"></div>
            <p className="font-semibold">Samsung Galaxy A14</p>
            <p className="text-xs text-gray-500">64GB / Silver</p>
            <p className="text-red-600 font-bold mt-1">₴4 999</p>
          </div>
        ))}
      </section>

      <footer className="text-xs text-center text-gray-500 py-4 border-t">
        © 2025 LowcostBox
      </footer>
    </main>
  );
}