export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="flex justify-between items-center px-4 py-3 shadow-md">
        <div className="text-xl font-bold">LowcostBox</div>
        <div className="flex items-center gap-3">
          <button className="text-sm">🇺🇦 UA</button>
          <button className="bg-gray-100 px-3 py-1 rounded-full text-sm">Кошик</button>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 text-center">
        <h1 className="text-2xl font-semibold mb-2">Техніка з Європи за доступними цінами</h1>
        <p className="text-sm text-gray-700">Обирай з тисячі товарів з гарантією та доставкою</p>
        <button className="mt-4 px-6 py-2 bg-black text-white rounded-full">Перейти до каталогу</button>
      </section>

      <section className="px-4 py-6">
        <input
          type="text"
          placeholder="Пошук товарів..."
          className="w-full px-4 py-2 border rounded-full text-sm shadow-sm"
        />
      </section>

      <section className="p-4">
        <h2 className="text-xl font-bold mb-4">Популярні категорії</h2>
        <div className="grid grid-cols-2 gap-4">
          {['Смартфони', 'Ноутбуки', 'Аксесуари', 'Побутова техніка'].map((cat) => (
            <div key={cat} className="p-4 bg-gray-100 rounded-xl text-center text-sm font-medium">
              {cat}
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-6">
        <div className="bg-yellow-100 p-4 rounded-xl text-center">
          <h3 className="font-bold text-lg mb-1">🔥 Акція тижня!</h3>
          <p className="text-sm text-gray-700">Знижки до 30% на побутову техніку</p>
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-xl font-bold mb-4">Рекомендовані товари</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="rounded-lg border p-3 text-sm">
              <div className="bg-gray-200 h-24 rounded mb-2"></div>
              <p className="font-semibold">Xiaomi Redmi Note 13</p>
              <p className="text-xs text-gray-500">128GB / Black</p>
              <p className="text-red-600 font-bold mt-1">₴5 999</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-xs text-center text-gray-500 py-4 border-t">
        © 2025 LowcostBox. Усі права захищені.
      </footer>
    </main>
  );
}