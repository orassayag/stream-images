# Stream Images - Server

Node.js server application for real-time video streaming. Serves base64-encoded video frames to connected clients via Socket.IO.

## Features

- 🚀 Built with Node.js and Express
- 🔌 Socket.IO for real-time WebSocket communication
- 📦 Frame management and distribution
- ⏱️ Configurable frame rate (default: ~30 fps)
- 📄 Base64 frame storage in text file
- 🔄 Automatic client connection handling

## Getting Started

### Prerequisites

- Node.js (v8 or higher)
- npm
- Pre-converted video frames in `video.txt` (see Frame Preparation below)

### Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

### Running the Server

Start the server:
```bash
npm start
```

The server will start listening on `http://localhost:3000`

## Frame Preparation

### Method 1: Extract Frames from Video

1. Install FFmpeg (if not already installed)

2. Extract frames from a video file:
```bash
ffmpeg -i input_video.mp4 -vf fps=30 images/frame_%04d.jpg
```

3. Uncomment the `convertImagesToBinary64()` function in `index.js`

4. Run the server once to generate `video.txt`:
```bash
node index.js
```

5. Comment out the conversion function again

### Method 2: Use Pre-converted Frames

Place a `video.txt` file with base64-encoded frames separated by `#` delimiter in the server directory.

## Configuration

Edit `index.js` to customize:

**Port Configuration**:
```javascript
http.listen(3000, function () {
    console.log('listening on *:3000');
});
```

**Frame Rate**:
```javascript
setInterval(() => {
    socket.emit('image', { image: true, buffer: videos[i] });
    i++;
}, 33); // 33ms = ~30fps, adjust as needed
```

## Project Structure

```
server/
├── index.js           # Main server file
├── video.txt          # Base64 encoded frames (not in repo)
├── images/            # Source images (optional)
└── package.json       # Dependencies
```

## How It Works

1. **Load Frames**: Reads `video.txt` and splits frames by `#` delimiter
2. **Client Connection**: Listens for Socket.IO connections
3. **Frame Emission**: Sends frames sequentially at configured intervals
4. **Loop**: Cycles through frames continuously

## Data Format

Each frame in `video.txt` is formatted as:
```
#<base64-encoded-image>#<base64-encoded-image>#...
```

Each frame is emitted as:
```javascript
{
  image: true,
  buffer: "base64-encoded-string"
}
```

## Available Scripts

- `npm start` - Start the server

## Technologies

- Node.js
- Express
- Socket.IO
- Moment.js for timestamps
- File System (fs) for frame loading

## Troubleshooting

**Problem**: Server cannot find `video.txt`
- Ensure `video.txt` exists in the server directory
- Check file path in `getVideosFromFile()` function

**Problem**: Frames are corrupted or not displaying
- Verify frames are properly base64-encoded
- Check delimiter `#` is used correctly
- Ensure no line breaks within base64 strings

**Problem**: Server crashes with memory issues
- Reduce video file size or frame count
- Optimize frame quality/resolution before conversion

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

## License

This application has an MIT license - see the [LICENSE](../LICENSE) file for details.