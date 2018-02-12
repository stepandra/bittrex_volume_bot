var bittrex = require('node-bittrex-api')

setInterval(function () {
  bittrex.getmarketsummary( {market: 'USDT-BTC'}, function( data, err ) {
    console.log( "USDT-BTC Volume is: " + data.result[0].Volume + " BTC");
    console.log( "USDT-BTC Volume is: " + data.result[0].BaseVolume + " USDT");
  });
}, 10000)
