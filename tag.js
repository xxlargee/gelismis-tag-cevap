const config = require('../conf.json')
const db = require('wio.db')
module.exports = { // ㇲ'Lâwâinn#2309
    kod: "tag", // https://discord.gg/3s2f8ehPnF
    async run (client, msg, args){
        if (config.tag){//Lawainn
            msg.channel.send(config.tag).then(async bruh => {
                if (db.fetch(`tagsorma_${msg.author.id}`) == 3) {
                    if (!db.has(`tagsormuş_${msg.author.id}`)){
                    await msg.author.send('**Hey dostum! Tag almayı bilmiyor musun? Merak etme! Buradayım.**\n\n**-** İlk olarak Sunucumuzun simgesi olan "**'+config.tag+'**" sembolünü kopyalayıp, Ayarlar > Hesabım > Kullanıcı adı Düzenle basıp kullanıcı adınızın her hangi bir yerine kopyaladığımız sembolü yapıştırıp şifrenizi girip Bitti\'ye basıyoruz <@'+msg.author.id+'>.') //https://discord.gg/3s2f8ehPnF
                    db.delete(`tagsorma_${msg.author.id}`)
                    db.set(`tagsormuş_${msg.author.id}`, 1)
                    } // Lawainn
                } else {
                db.add(`tagsorma_${msg.author.id}`, 1)
            }})
        }
    }
} //Lawainn - Gelişmiş Tag
// https://discord.gg/3s2f8ehPnF

// Henüz açılmamış olan Valencia sunucumuza katılabilirsinizz \\
// ㇲ'Lâwâinn#2309 Tarafından yapılmıştır!!!!! \\
// Çalanı öperiz <3 \\
