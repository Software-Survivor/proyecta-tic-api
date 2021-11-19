import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";

import { typeDefs } from "./graphql/type";
import { resolvers } from "./graphql/resolvers";

import { Enum_Rol, Enum_StatusUsers } from "./models/enums";
import ConectBD from "./db/db";
import { UserModel } from "./models/user";

const main = async () => {
  await ConectBD();

  /* await UserModel.create({
        email: 'Ana@ana.com',
        identification: '56321587',
        name: 'Ana',
        lastname: 'Lopez',
        rol: Enum_Rol.LIDER,
        status:Enum_StatusUsers.AUTORIZADO,
    }).then((u) =>{
        console.log('Usuario creado satisfactoriamente', u)
    }).catch((e)=>{
        console.error('Error al crear el usuario', e)
    }) */

  await UserModel.find()
    .then((u) => {
      console.log("Consultando usuarios... Datos: ", u);
    })
    .catch((e) => {
      console.log("Error al consultar usuarios: ", e);
    });
};
main();


