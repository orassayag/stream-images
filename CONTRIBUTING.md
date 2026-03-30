# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/stream-images/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Error messages (if applicable)
   - Your environment details (OS, Node version, browser)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **JavaScript** (ES6+) for client and server
- **React.js** for the frontend
- **Node.js** for the backend
- **ESLint** for code quality
- **LESS** for styling

Before submitting:
```bash
# Client
cd client
npm install
npm run build

# Server
cd server
npm install
npm start
```

### Coding Standards

1. **ES6+ features**: Use modern JavaScript syntax (arrow functions, destructuring, etc.)
2. **Component structure**: Follow React best practices for component organization
3. **Error handling**: Add proper error handling for Socket.IO connections and file operations
4. **Naming**: Use clear, descriptive names for variables and functions
5. **Comments**: Add comments for complex logic or non-obvious implementations

### Adding New Features

When adding new features:
1. Update both client and server if needed
2. Test Socket.IO communication thoroughly
3. Ensure backward compatibility
4. Update documentation
5. Test in multiple browsers (if client-side changes)

### Testing

Before submitting a PR:
1. Test the server independently (`node index.js` in server directory)
2. Test the client independently (`npm start` in client directory)
3. Test the complete integration (both server and client running)
4. Check browser console for errors
5. Verify Socket.IO connection works properly

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
