# Stream Images - Client

React.js client application for real-time video streaming. Connects to the Node.js server via Socket.IO and displays base64-encoded frames as a video stream.

## Features

- ⚛️ Built with React.js
- 🔌 Socket.IO client for real-time communication
- 🖼️ Dynamic image rendering from base64 data
- 🔄 Automatic reconnection handling
- ⏳ Loading state with spinner component
- 📱 Responsive layout with LESS styling

## Getting Started

### Prerequisites

- Node.js (v8 or higher)
- npm
- Running server instance (see ../server)

### Installation

1. Navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

### Running the Client

Start the development server:

```bash
npm start
```

The application will open automatically in your default browser at `http://localhost:3001` (or another port if 3001 is busy).

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The build files will be created in the `build/` directory.

## Configuration

Edit the settings files in `src/settings/`:

**Development** (`settings.development.json`):

```json
{
  "api_base_url": "http://localhost:3000"
}
```

**Production** (`settings.production.json`):

```json
{
  "api_base_url": "http://your-production-server.com"
}
```

## Project Structure

```
client/
├── public/              # Static files
│   ├── index.html      # HTML template
│   └── assets/         # Fonts, CSS, images
├── src/
│   ├── components/     # Reusable components
│   │   └── UI/         # UI components (Loader)
│   ├── containers/     # Container components
│   │   ├── App/        # Root app component
│   │   └── Home/       # Main streaming component
│   ├── hoc/            # Higher-order components
│   │   └── Layout/     # Layout wrapper
│   ├── settings/       # Configuration files
│   ├── utils/          # Utility functions
│   └── index.jsx       # Entry point
├── config/             # Webpack configurations
├── scripts/            # Build and start scripts
└── package.json
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests

## How It Works

1. **Connection**: Establishes Socket.IO connection to the server
2. **Listening**: Listens for `image` events from the server
3. **Rendering**: Converts base64 buffer to image source
4. **Display**: Updates the `<img>` element with the new frame

## Technologies

- React 16.5
- Socket.IO Client
- LESS for styling
- Webpack for bundling
- Babel for transpilation

## Author

- **Or Assayag** - _Initial work_ - [orassayag](https://github.com/orassayag)
- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag

## License

This application has an MIT license - see the [LICENSE](../LICENSE) file for details.
