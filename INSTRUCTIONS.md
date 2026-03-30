# Instructions

## Setup Instructions

### Prerequisites

- Node.js (v8 or higher)
- npm (comes with Node.js)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- VSCode (recommended) or any IDE

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/orassayag/stream-images.git
   cd stream-images
   ```

2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd ../client
   npm install
   ```

## Running the Application

### Starting the Server

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Start the server:
   ```bash
   npm start
   ```
   or
   ```bash
   node index.js
   ```

The server will start on `http://localhost:3000` and begin listening for Socket.IO connections.

### Starting the Client

1. Open a new terminal window
2. Navigate to the client directory:
   ```bash
   cd client
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The client will automatically open in your default browser at `http://localhost:3001` (or another port if 3001 is busy).

## How It Works

### Server Architecture

1. **Frame Storage**: The server reads pre-converted base64-encoded video frames from `video.txt`
2. **Socket.IO Connection**: Establishes WebSocket connection with clients
3. **Frame Streaming**: Emits frames to connected clients at 33ms intervals (~30 fps)
4. **Data Format**: Each frame is sent as `{ image: true, buffer: <base64-string> }`

### Client Architecture

1. **Socket.IO Client**: Connects to the server's Socket.IO endpoint
2. **Frame Reception**: Listens for `image` events from the server
3. **Image Rendering**: Converts base64 data to image source and updates the DOM
4. **Display**: Shows the current frame in an `<img>` tag

### Video Frame Preparation

The server includes commented code for converting video frames to base64:

1. Extract frames from a video file (using external tools like FFmpeg)
2. Save frames as numbered JPEG files in the `images/` directory
3. Uncomment the `convertImagesToBinary64()` function in `server/index.js`
4. Run the function to generate the `video.txt` file
5. Comment out the conversion function again before production use

Example FFmpeg command to extract frames:
```bash
ffmpeg -i input_video.mp4 -vf fps=30 images/frame_%04d.jpg
```

## Configuration

### Server Settings

Edit `server/index.js`:
- **Port**: Change `3000` in `http.listen(3000)` to use a different port
- **Frame Rate**: Adjust the interval in `setInterval(..., 33)` (33ms = ~30fps, 16ms = ~60fps)
- **Frame Source**: Update the file path in `getVideosFromFile()` to point to your video data

### Client Settings

Edit `client/src/settings/settings.development.json` or `settings.production.json`:
- **API Base URL**: Update the server endpoint if using a different port or host

```json
{
  "api_base_url": "http://localhost:3000"
}
```

## File Structure

### Server
```
server/
├── index.js           # Main server file with Socket.IO logic
├── video.txt          # Pre-converted base64 frames (not in repo)
├── package.json       # Server dependencies
└── images/            # Source images for conversion (optional)
```

### Client
```
client/
├── src/
│   ├── containers/
│   │   └── Home/      # Main streaming component
│   ├── settings/      # Environment configurations
│   └── utils/         # Helper utilities
├── public/            # Static assets
└── package.json       # Client dependencies
```

## Development

### Building for Production

Client:
```bash
cd client
npm run build
```

This creates an optimized production build in the `client/build/` directory.

### Testing

1. Start both server and client
2. Open browser developer console
3. Verify Socket.IO connection is established
4. Check for any console errors
5. Observe frame streaming in the network tab

## Troubleshooting

### Connection Issues

**Problem**: Client cannot connect to server
- Verify server is running on port 3000
- Check `api_base_url` in client settings matches server address
- Ensure firewall allows connections on the server port

### Performance Issues

**Problem**: Frames appear laggy or stuttering
- Reduce frame rate by increasing the interval value
- Optimize frame size/quality before conversion
- Check network bandwidth
- Monitor CPU usage on both client and server

### Missing Frames

**Problem**: Not all frames are displayed
- Ensure `video.txt` file exists and is properly formatted
- Check server console for file read errors
- Verify frames are separated by `#` delimiter

## Notes

- The application requires the `video.txt` file with base64-encoded frames on the server
- Frame conversion is resource-intensive and should be done offline
- Socket.IO manages reconnection automatically
- The client includes a loader during initial connection
- Console logging can be removed in production for better performance

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
