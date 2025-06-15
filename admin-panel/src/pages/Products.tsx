
import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    Telegram: any;
  }
}

const Products: React.FC = () => {
  const [user, setUser] = useState<{ id: number; first_name: string } | null>(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready?.();

    const userData = tg?.initDataUnsafe?.user;
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <div>
      <h1>Сторінка товарів</h1>
      {user ? (
        <p>Привіт, {user.first_name}! Ваш Telegram ID: {user.id}</p>
      ) : (
        <p>Telegram WebApp не ініціалізований</p>
      )}
    </div>
  );
};

export default Products;
