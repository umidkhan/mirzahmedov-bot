const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  ctx.reply(
    `Assalomu alaykum <a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name}</a>\nMobilograf <b><a href="https://t.me/m1rzahmedov77">m1rzahmedov__vm</a></b> shaxsiy Telegram botiga xush kelibsiz 😊`,
    {
      parse_mode: "HTML",
      link_preview_options: { is_disabled: true },
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "ℹ️ Batafsil ma'lumot",
              callback_data: "info",
            },
            { text: "💼 Portfolioni ko'rish", callback_data: "portfolio" },
          ],
        ],
      },
    }
  );

  ctx.telegram.sendMessage(
    5511267540,
    `<b>🆕 Yangi foydalanuvchi botga start bosdi</b> 🎉\n<b>👤 Ism:</b> <a href="tg://user?id=${
      ctx.from.id
    }">${ctx.from.first_name}</a>\n<b>🔗 Username:</b> @${
      ctx.from.username === undefined
        ? "Username topilmadi 🤷‍♂️"
        : ctx.from.username
    }`,
    { parse_mode: "HTML" }
  );
});

bot.launch(() => {
  console.log("Bot started");
});
