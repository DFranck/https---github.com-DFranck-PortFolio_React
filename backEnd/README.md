markdown
Copy code

# Backend Server for My Portfolio

This is the backend server for my personal portfolio, which serves as a showcase of my projects. It is built with Express and TypeScript.

## Prerequisites

Before running this project, make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

To get started with the project, install the dependencies:

```bash
npm install
This will install Express and any other necessary node modules, including the TypeScript declarations for Express.

TypeScript Compilation
The project is written in TypeScript. To compile the TypeScript files into JavaScript, run:

bash
Copy code
tsc
This will generate the JavaScript files in the build directory, according to the tsconfig.json configuration.

Environment Configuration
Before starting the server, create a .env file in the root directory to store your environment variables such as your database connection string. This file should never be committed to version control for security reasons.

Example of .env file content:

env
Copy code
DB_URI=mongodb+srv://your_user:your_password@your_cluster_url/your_db_name?retryWrites=true&w=majority
Replace your_user, your_password, your_cluster_url, and your_db_name with your actual MongoDB Atlas information.

Running the Server
To start the server, run:

bash
Copy code
npm start
This will start the Node.js server running on localhost with the port specified in server.ts.

If you want to run the server with automatic reloading upon file changes, use:

bash
Copy code
npm run dev
This uses nodemon to watch for changes and restarts the server automatically.

Testing the Server
After starting the server, you can navigate to http://localhost:3000 in your web browser. You should see "Hello World!" displayed, which confirms that the server is running correctly.

Project Structure
src/: Contains the TypeScript source files.
src/server.ts: The entry point for the Express server.
build/: Contains the compiled JavaScript code (generated after running tsc).
node_modules/: Contains all the npm dependencies.
package.json: Defines the project dependencies and scripts.
tsconfig.json: Configuration for the TypeScript compiler.
.gitignore: Specifies intentionally untracked files to ignore, including .env.
Database Connection
This project uses MongoDB Atlas as the database. Ensure that your MongoDB instance is running and accessible. The database connection string is stored in the .env file as DB_URI.
```
