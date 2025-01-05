const {cmd , commands} = require('../command')
const fetch = require('node-fetch')
const { Buffer } = require('buffer');
const { sizeFormatter} = require('human-readable');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios');
const yts = require("ytsearch-venom")

cmd({
    pattern: "mp5",
    desc: 'Download Song / Video',
    use: '.play Title',
    react: "🎧",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
 
    try {
    
        if (!q) return reply('Please provide a title.');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `💚🎵 𝐈𝐒𝐇𝐔 𝐘𝐓 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 🎵💚
        
> \➤ 🔥Title\ : ${data.title}

> \➤ 🔥Views\ : ${data.views}

> \➤ 🔥DESCRIPTION\: ${data.description}

> \➤ 🔥TIME\: ${data.timestamp}

> \➤ 🔥AGO\: ${data.ago}

◄❪ Reply This Message With Nambars ❫►
╭────────────────────◉◉➤
➢ 1 Audio
➢ 2 Document
╰────────────────────◉◉➤
> 🔱🔥𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝐌𝐑 .©𝐋𝐀𝐊𝐒𝐈𝐃𝐔 𝐎𝐅𝐂 : 💛`;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });
        

   conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                    
const response = (await axios.get("https://raw.githubusercontent.com/Manul-Ofcx/DB/refs/heads/main/url.json")).data;

    const  YTMP3_LINK  = response.YTMP3;
    // Ensure the plugins directory exists
    const res = await fetchJson(${YTMP3_LINK}${data.url});
    
    const downloadUrl = res.result.dl_link;

await conn.sendMessage(from,{audio:{url: downloadUrl },mimetype:"audio/mpeg",caption :"> 🔱𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝐌𝐑 .©𝐋𝐀𝐊𝐒𝐈𝐃𝐔 𝐎𝐅𝐂 : 💛"},{quoted:mek})
                        break;
                    case '2':               
const responsex = (await axios.get("https://raw.githubusercontent.com/Manul-Ofcx/DB/refs/heads/main/url.json")).data;

    const  YTMP3_LINKX  = responsex.YTMP3;
    // Ensure the plugins directory exists
    const resx = await fetchJson(${YTMP3_LINKX}${data.url});
    
    const downloadUrlx = resx.result.dl_link;

await conn.sendMessage(from,{document:{url: downloadUrlx },mimetype:"audio/mpeg",fileName: data.title + ".mp3" ,caption :"> 🔱𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝐌𝐑 .©𝐋𝐀𝐊𝐒𝐈𝐃𝐔 𝐎𝐅𝐂 : 💛"},{quoted:mek})
                    
                        break;
 
                    default:
                        reply("Invalid option. Please select a valid option 💗");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
