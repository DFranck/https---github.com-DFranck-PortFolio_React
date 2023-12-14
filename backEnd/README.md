Bien sûr, je vais réécrire votre README en utilisant le format Markdown, en structurant les sections pour une meilleure lisibilité :

````markdown
# Backend Server for My Portfolio

This backend server is designed for my personal portfolio, which showcases my projects. It's built with Express and TypeScript.

## Prerequisites

- Ensure you have Node.js installed. Download it from [Node.js](https://nodejs.org/).

## Installation

Follow these steps to set up the project:

1. **Install Dependencies:**
   ```bash
   npm install
   ```
````

This command installs Express and other required node modules, including TypeScript declarations for Express.

2. **TypeScript Compilation:**
   The project is written in TypeScript. Compile the TypeScript files into JavaScript by running:
   ```bash
   tsc
   ```
   This command generates JavaScript files in the `build` directory, as per the `tsconfig.json` configuration.

## Environment Configuration

Create a `.env` file in the root directory for your environment variables, like your database connection string. Do not commit this file to version control for security reasons.

Example `.env` file:

```env
DB_URI=mongodb+srv://your_user:your_password@your_cluster_url/your_db_name?retryWrites=true&w=majority
```

Replace `your_user`, `your_password`, `your_cluster_url`, and `your_db_name` with your actual MongoDB Atlas credentials.

## Running the Server

- **Start the Server:**

  ```bash
  npm start
  ```

  This command starts the Node.js server on localhost at the port defined in `server.ts`.

- **Development Mode:**
  For automatic reloading on file changes, use:
  ```bash
  npm run dev
  ```
  This command uses `nodemon` to watch for changes and restarts the server automatically.

## Testing the Server

After starting the server, navigate to `http://localhost:3000`. You should see "Hello World!" confirming the server is running correctly.

## Project Structure

- `src/`: Contains TypeScript source files.
- `src/server.ts`: Entry point for the Express server.
- `build/`: Contains compiled JavaScript code (generated after running `tsc`).
- `node_modules/`: Contains npm dependencies.
- `package.json`: Defines project dependencies and scripts.
- `tsconfig.json`: Configuration for TypeScript compiler.
- `.gitignore`: Files to ignore, including `.env`.

## Database Connection

The project uses MongoDB Atlas. Ensure your MongoDB instance is running and accessible. The DB connection string is in the `.env` file as `DB_URI`.

### Additional Commands
