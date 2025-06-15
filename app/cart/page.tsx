export default function CartPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="flex justify-between items-center px-4 py-3 shadow-md">
        <div className="text-xl font-bold">Кошик</div>
      </header>

      <section className="p-4">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="flex items-center gap-4 mb-4 border-b pb-3"
          >
            <div className="bg-gray-200 w-16 h-16 rounded"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">iPhone 13 Pro</p>
              <p className="text-xs text-gray-500">256GB / Graphite</p>
              <p className="text-red-600 text-sm font-bold">₴29 999</p>
            </div>
            <button className="text-sm text-red-500">Видалити</button>
          </div>
        ))}

        <div className="mt-6">
          <p className="text-right font-bold text-lg">Разом: ₴59 998</p>
          <a href="/checkout">
            <button className="w-full mt-4 bg-black text-white py-3 rounded-full text-sm">
              Перейти до оформлення
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}