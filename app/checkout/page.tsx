export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="flex justify-between items-center px-4 py-3 shadow-md">
        <div className="text-xl font-bold">Оформлення замовлення</div>
      </header>

      <section className="p-4">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ваше ім’я"
            className="border px-4 py-2 rounded"
          />
          <input
            type="tel"
            placeholder="Телефон"
            className="border px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Адреса доставки"
            className="border px-4 py-2 rounded"
          />

          <div className="border-t pt-4">
            <p className="font-bold text-lg">До сплати: ₴59 998</p>
            <button className="w-full mt-4 bg-black text-white py-3 rounded-full text-sm">
              Підтвердити замовлення
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}