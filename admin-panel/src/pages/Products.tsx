import { useState } from "react";

const mockProducts = [
  { id: 1, name: "Навушники Xiaomi", price: 799, category: "Аудіо", available: true },
  { id: 2, name: "Чохол для iPhone 13", price: 199, category: "Аксесуари", available: true },
  { id: 3, name: "Зарядка Baseus", price: 349, category: "Зарядні пристрої", available: false },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const filtered = mockProducts.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Список товарів</h1>
      <input
        type="text"
        placeholder="Пошук..."
        className="border p-2 rounded mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Назва</th>
            <th className="p-2">Ціна</th>
            <th className="p-2">Категорія</th>
            <th className="p-2">Наявність</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.price} ₴</td>
              <td className="p-2">{product.category}</td>
              <td className="p-2">{product.available ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}