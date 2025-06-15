
import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    Telegram: any;
  }
}

type Product = {
  id: number;
  name: string;
  price: number;
};

const Products: React.FC = () => {
  const [user, setUser] = useState<{ id: number; first_name: string } | null>(null);
  const [tab, setTab] = useState<'products' | 'cart' | 'orders'>('products');
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready?.();
    const userData = tg?.initDataUnsafe?.user;

    if (userData) {
      setUser(userData);

      // Надсилання користувача на бекенд
      fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          telegramId: userData.id,
          firstName: userData.first_name
        })
      });

      // Завантаження товарів
      fetch("http://localhost:3000/api/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <button onClick={() => setTab('products')}>📦 Товари</button>
        <button onClick={() => setTab('cart')}>🛒 Кошик ({cart.length})</button>
        <button onClick={() => setTab('orders')}>✅ Замовлення</button>
      </div>

      {tab === 'products' && (
        <div>
          <h3>Список товарів:</h3>
          {products.map(p => (
            <div key={p.id} style={{ border: '1px solid #ccc', marginBottom: '8px', padding: '8px' }}>
              <div>{p.name}</div>
              <div>Ціна: {p.price} ₴</div>
              <button onClick={() => addToCart(p)}>Додати в кошик</button>
            </div>
          ))}
        </div>
      )}

      {tab === 'cart' && (
        <div>
          <h3>Кошик:</h3>
          {cart.length === 0 ? (
            <p>Кошик порожній</p>
          ) : (
            cart.map((p, i) => (
              <div key={i}>
                {p.name} — {p.price} ₴
              </div>
            ))
          )}
        </div>
      )}

      {tab === 'orders' && (
        <div>
          <h3>Замовлення (тимчасово порожньо)</h3>
        </div>
      )}
    </div>
  );
};

export default Products;
