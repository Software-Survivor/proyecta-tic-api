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


  //Crear nuevo usuario

  /* await UserModel.create({
        email: 'Juan@d.com',
        identification: '112233',
        name: 'Juan',
        lastname: 'David',
        rol: Enum_Rol.LIDER,
        status:Enum_StatusUsers.AUTORIZADO,
    }).then((u) =>{
        console.log('Usuario creado satisfactoriamente', u)
    }).catch((e)=>{
        console.error('Error al crear el usuario', e)
    })  */


  //Actualizar un usuario por Id

  /* await UserModel.findByIdAndUpdate('6197bd5679a650a88643b898', { status: Enum_StatusUsers.PENDIENTE })
    .then((d) => { console.log('Usuario actualizado', d._id) })
    .catch((e) => { console.log('error', e) })
 */


  //Eliminar un usuario por Id
/* 
  await UserModel.findByIdAndDelete('6197cd147d0857fb0844f08b')
    .then((d) => { console.log(d, 'eliminado') })
    .catch((e) => { console.log('error eliminando el usuario. error:', e) }) */


  //Consultar Usuarios

  await UserModel.find()
    .then((u) => {
      console.log("Consultando usuarios... Datos: ", u);
    })
    .catch((e) => {
      console.log("Error al consultar usuarios: ", e);
    });
};
main();


