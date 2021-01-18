const Quotes = () => new Promise((resolve, reject) => {
  let arr = [
    'anak haram belum tentu lo, tetapi lo sudah pasti anak haram',
    'tetap coli meski kontol nyeri',
    'koh, kasbon koh',
    'orang goblok belum tentu anda, tetapi anda sudah bisa dipastikan orang goblok',
    'F U C E K, tolol',
    'tetaplah memakai software bajakan',
    'Kamu nyaman? Kamu sayang? Tapi cuma dianggap temen? bunuh diri aja gan',
    'Dibilang sayang? halu lo njenk, cepet aduk semennya',
    'k o n t o l',
    'Bersamamu aku tidak pernah takut lagi menjadi pemimpi.',
    'Move on itu pilihan. Gagal move on itu nasib lo',
    'Cinta itu layaknya angin, aku tidak bisa melihatnya tetapi aku bisa merasakannya.',
    'kurangi coli, perbanyak baca Alquran bro.',
    'kontol anda kecil dan lembek? itu urusan anda.',
    'Bahagia itu kita yang ciptain, bukan mereka.',
    'Cinta itu, rela melihat orang yang kita cintai bahagia bareng orang lain.',
    'Aku hanyalah kunang-kunang, dan kau hanyalah senja, dalam gelap kita berbagi, dalam gelap kita abadi.',
    'Dalam diam, aku memperjuangkan cintamu dalam doaku. eh elu nya malah open bo',
  ]
  let acak = arr[Math.floor(Math.random() * arr.length)]
  resolve(acak)
})

module.exports = Quotes
