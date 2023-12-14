import express from "express"; // Importe le module Express pour créer un serveur HTTP.
import projectRoutes from "./routes/projectRoutes"; // Importe les routes de votre projet.
import userRoutes from "./routes/userRoutes"; // Importe les routes de votre projet.
import cors from "cors"; // Importe le middleware CORS pour gérer la sécurité cross-origin.
import { Request, Response, NextFunction } from "express"; // Importe les types pour les requêtes et réponses Express.
import dotenv from "dotenv"; // Importe dotenv pour gérer les variables d'environnement.
import mongoose from "mongoose"; // Importe Mongoose pour interagir avec MongoDB.

dotenv.config(); // Charge les variables d'environnement du fichier .env.

const app = express(); // Crée une instance d'application Express.
app.use(cors()); // Active le middleware CORS pour toutes les routes.
app.use(express.json()); // Permet à Express de comprendre les requêtes JSON.

app.get("/", (req: Request, res: Response) => {
  // Route racine.
  res.send("Hello World!"); // Envoie "Hello World!" en réponse.
});

app.use("/api", projectRoutes, userRoutes); // Utilise les routes définies dans projectRoutes.

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  // Middleware de gestion des erreurs.
  console.error(error); // Affiche l'erreur dans la console.
  res.status(500).send("Internal Server Error"); // Envoie une réponse d'erreur.
});

const PORT = process.env.PORT || 3000; // Définit le port du serveur.

mongoose
  .connect("mongodb://localhost:27017/portfolioReact") // Connecte à la base de données MongoDB locale.
  .then(() => {
    console.log("Connected to the database!"); // Log en cas de connexion réussie.
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Lance le serveur sur le port spécifié.
  })
  .catch((err) => {
    console.error("Could not connect to the database:", err); // Log en cas d'échec de connexion.
    process.exit(1); // Quitte l'application si la connexion échoue.
  });
