import express from "express";
import Cors from "cors";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import ConectBD from "./db/db";
import { types } from "./graphql/types";
import { resolvers } from "./graphql/resolvers";
import { validateToken } from "./utils/tokenUtils";

dotenv.config();

const getUserData = (token) => {
  const varification = validateToken(token.split(' ')[1]);
  if (varification.data) {
    return varification.data;
  } else {
    return null;
  }
};

const server = new ApolloServer({
  typeDefs: types,
  resolvers: resolvers,
  context: ({ req }) => {
      const token = req.headers?.authorization ?? null;
      if(token){
          const userData = getUserData(token);
          if(userData){
              return { userData };
          }
      };
      return null;
  },
});

const app = express();
app.use(Cors());

app.use(express.json());
app.listen({ port: process.env.PORT || 4000 }, async () => {
  await ConectBD();
  await server.start();
  server.applyMiddleware({ app });
  console.log("¡ Servidor encendido correctamente !");
});
