const fs = require('fs');
const woff2otf = require('woff2otf');

  fs.readdir('woff/', function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
      filenames.forEach(function (filename) {
          const name = filename.split('.')[0];
          
        const woffFileBuffer = fs.readFileSync(`woff/${name}.woff`);
        const otfFileBuffer = woff2otf(woffFileBuffer);
        fs.writeFileSync(`otf/${name}.otf`, otfFileBuffer);
    });
  });