const Menu = (prefix, name) => new Promise((resolve, reject) => {
	resolve(`Halo ${name}!

saya adalah panjoelian bot
saya di buat oleh orang yang sangat tampan bernama lengkap *Kay Nugraha*

Berikut ini menu yang disediakan *panjoelian bot*:

📃 Main Menu
 ├ *${prefix}menu*
 ├ *${prefix}about*
 ├ *${prefix}donasi*
 └ *${prefix}krisar [isi kritik dan saran]*

📃 New Menu
 ├ *${prefix}lirik [judul lagu]*
 ├ *${prefix}stiker*
 └ *${prefix}nulis [tulisan yang ingin kamu tulis]*

📃 Group Menu
 ├ *${prefix}promote [@tagmember]* admin only
 ├ *${prefix}demote [@tagmember]* admin only
 ├ *${prefix}add [number]* admin only
 ├ *${prefix}kick [@tagmember]* admin only
 ├ *${prefix}kickall* admin only
 ├ *${prefix}getall*
 ├ *${prefix}glink*
 ├ *${prefix}del*
 └ *${prefix}kickme*

📃 Primbon Menu
 ├ *${prefix}cekjodoh [nama1 & nama2/tag 2 orang]*
 └ *${prefix}artinama [nama seseorang]*

📃 Downloader Menu
 ├ *${prefix}pinterest [link pinterest]*
 ├ *${prefix}ytmp4 [link youtube]*
 ├ *${prefix}ytmp3 [link youtube]*
 ├ *~${prefix}igdl [link instagram]~*
 └ *${prefix}fbdl [link fb]*

📃 Education Menu
 ├ *${prefix}wiki [query yang ingin kamu cari]*
 ├ *${prefix}brainly [query yang ingin kamu cari]*
 └ *${prefix}translate [kode bahasa] [tagPesan/masukanPesanManual]*

📃 Other Menu
 ├ *${prefix}quotes*
 ├ *${prefix}quotesmaker [type|author] [quotes kamu]*
 ├ *${prefix}toxic*
 ├ *${prefix}randomanime*
 ├ *~${prefix}randomhentai~*
 ├ *${prefix}js [kota]*
 ├ *${prefix}cuaca [kota]*
 ├ *${prefix}stalk [Username Instagram]*
 ├ *${prefix}tts [kode bahasa] [tagPesan/masukanPesanManual]*
 └ *${prefix}qr [tagPesan/masukanPesanManual]*

note: semua command tidak menggunakan tanda *[*   dan   *]*

Semoga harimu penuh dengan keceriaan
		`)
})

module.exports = Menu
