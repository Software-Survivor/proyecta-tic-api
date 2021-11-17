import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConectBD from "./db/db";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.listen({ port: process.env.PORT || 4000 }, async () => {
    await ConectBD();
    console.log("¡ Servidor encendido correctamente !")
    
});