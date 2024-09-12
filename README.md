# Build Tool Showcase

This project is a small web application that demonstrates the use of various build tools and package managers. It features a header, a content area that lists popular build tools from a JSON file, and a footer with a copyright notice. The project utilizes Webpack, Babel, Sass, ESLint, Jest, and an external JavaScript library (Lodash) to showcase modern web development practices.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd build-tool-showcase

2. **Install dependencies:**
   - npm  install

3. **Start development server:**
   - npm  start

4. **Create a production build:**
   - npm  run build

5. **Run linting:**
   - npm lint

6. **Run test:**
   - npm  test


**Available npm Scripts and Their Purposes:**

```markdown
## Available npm Scripts

- `start`: Starts the development server with hot reloading.
- `build`: Creates a production build with minified JavaScript and CSS, and implements code splitting.
- `lint`: Runs ESLint to check for code style and errors.
- `test`: Runs Jest tests to ensure code correctness.


## Build Process

- **Development Build**: Uses `webpack-dev-server` to provide a development environment with hot reloading and source maps for debugging.
- **Production Build**: Uses Webpack to minify JavaScript and CSS, implement code splitting, and optimize the output for production. This configuration includes separate handling for JavaScript and CSS files to reduce file sizes and improve loading times.
- **Babel**: Transpiles modern ES6+ JavaScript code into code that is compatible with older browsers.
- **Sass**: Compiles Sass files into CSS for styling.
- **ESLint**: Ensures code quality and adherence to coding standards.
- **Jest**: Provides unit testing to verify the functionality of the code.



This `README.md` provides a comprehensive overview of the project, setup instructions, available npm scripts, and a brief explanation of the build process, along with an outline of the project structure and functional requirements.