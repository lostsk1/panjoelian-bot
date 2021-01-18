const About = (name) => new Promise((resolve, reject) => {
    let list = ` Halo ${name} 👋
- about *panjoelian bot whatsapp*

Bot ini merupakan program close source ya bgst!1!1! kalau lu mau source nya wa owner bot ini di wa.me/+6285695217720 
    `
    resolve(list)
})

module.exports = About
