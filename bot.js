import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot('7173068567:AAEfWyn0vFsTSL_xM7E3eiypvuTJ_gQGHe8', { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Відкрити адмінку', {
    reply_markup: {
      keyboard: [[{ text: '🔧 Панель', web_app: { url: 'https://lowcostbox.onrender.com/products' } }]],
      resize_keyboard: true
    }
  });
});
