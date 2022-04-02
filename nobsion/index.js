const cheerio = require('cheerio');
const axios = require('axios');

async function main() {
    var url = "https://www.cryptolorium.com/crypto-lists/binance";

    var html = await axios(url);
    let $ = cheerio.load(html.data);

    $('.listtablediv table tr td:nth-child(2)').toArray().map(item => {
        console.log($(item).text());
    });
}

main();