module.exports = {
  config: {
    name: "inbox",
    aliases: ["in"],
    version: "1.0",
    author: "B4YJ1D",
    countDown: 10,
    role: 0,
    shortDescription: {
      en: "okh enjoy @b4yj1d cmd"
    },
    longDescription: {
      en: ""
    },
    category: "fun",
    guide: {
      en: ""
    }
  },
  langs: {
    en: {
      gg: ""
    },
    id: {
      gg: ""
    }
  },
  onStart: async function({ api, event, args, message }) {
    try {
      const query = encodeURIComponent(args.join(' '));
      message.reply("✅ SUCCESSFULLY SEND MSG\n\n🔰 PLEASE CK YOUR INBOX OR MSG REQUEST BOX", event.threadID);
      api.sendMessage("✅ SUCCESSFULLY ALLOW\n🔰 ♡ᥫᩣ𝐍𝐎𝐖 𝐘𝐎𝐔 𝐂𝐀𝐍 𝐔𝐒𝐄 𝐇𝐈 𝐈'𝐌 𝐓𝐀𝐌𝐈𝐌 BOT❥ 𝐇𝐄𝐑𝐄ღ༉", event.senderID);
    } catch (error) {
      console.error("Error bro: " + error);
    }
  }
}
