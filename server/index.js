// Basic variables.
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fs = require('fs'); // Required for file serving.
const moment = require('moment');

const getVideosFromFile = () => {
    return fs.readFileSync(__dirname + '\\video.txt').toString().split('#');
};

http.listen(3000, function () {
    console.log('listening on *:3000');
});

// Location to index.html.
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Trying to serve the image file from the server.
io.on('connection', (socket) => {
    const videos = getVideosFromFile();
    let i = 0;
    setInterval(() => {
        socket.emit('image', { image: true, buffer: videos[i] });
        console.log(`image ${moment().format('x')}`);
        i++;
    }, 33);
});

/* const zeroPad = (num, places) => {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join('0') + num;
}

const convertToBinary64 = (i) => {
    const buf = fs.readFileSync(__dirname + `/images/SampleVideo_640x360_30mb ${zeroPad(i, 4)}.jpg`);
    if (buf) {
        return buf.toString('base64');
    }
};

const convertImagesToBinary64 = () => {
    const fs = require('fs');
    const stream = fs.createWriteStream(__dirname + '\\video.txt');
    const path = __dirname + '\\images\\';

    let frames = '';

    const files = fs.readdirSync(path);
    files.forEach((file, i) => {
        frames += `#${convertToBinary64(i + 1)}`;
    })

    stream.once('open', (fd) => {
        stream.write(frames);
        stream.end();
    });

    console.log('done!');
};

convertImagesToBinary64(); */

/* // Location to index.html.
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

const steamImage = () => {
    fs.readFile(__dirname + '/images/image.jpg', function (err, buf) {
        // it's possible to embed binary data
        // within arbitrarily-complex objects
        socket.emit('image', { image: true, buffer: buf.toString('base64') });
        console.log(`frame ${moment().format('x')}`);
    });
};

// Only to test chat sample code from sample.
io.on('connection', function (socket) {
    console.log('a user connected');

    // Trying to serve the image file from the server.
    io.on('connection', function (socket) {
    });
}); */