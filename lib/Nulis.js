const needle = require('needle')
const _ = require('lodash')

const Nulis = (text) => new Promise((resolve, reject) => {
    let url = 'http://salism3.pythonanywhere.com/write?text='
    if (typeof text === 'undefined') { reject('masukan text nya gan') }
    if (text.indexOf('#') > -1) { text.replace(/\#/g, '')}

    needle(url + text, (err, resp, body) => {
        if (_.isEmpty(body) === true) { reject('kayaknya error gan') }
        if (_.isEmpty(body.images) === true) { reject('gambarnya gak bisa di muat gan, coba lagi nanti') }

        resolve(
            body.images
        )
    })
})

module.exports = Nulis
