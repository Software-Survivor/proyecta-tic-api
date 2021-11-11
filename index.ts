import ConectBD from "./db/db";
import { UserModel } from "./models/user";

const main = async () => {
  await ConectBD();
  //CREACIÓN DE USUARIOS
  //   await UserModel.create({
  //     email: "123@hotmail.com",
  //     identification: "873608123",
  //     name: "Carlos",
  //     lastname: "Matínez",
  //     rol: "Lider",
  //   })
  //     .then((u) => {
  //       console.log("Usuario creado: ", u);
  //     })
  //     .catch((e) => {
  //       console.error("Error al crear usuario: ", e);
  //     });

  //CONSULTAR USUARIOS
  // await UserModel.find()
  //   .then((u) => {
  //     console.log("Consultando usuarios... Datos: ", u);
  //   })
  //   .catch((e) => {
  //     console.log("Error al consultar usuarios: ", e);
  //   });
  //EDITAR USUARIOS
  //   await UserModel.findOneAndUpdate(
  //     { email: "123@hotmail.com" },
  //     { name: "Gustavo" }
  //   )
  // .then((u) => {
  //   console.log("Usuario modificado con exito: ", u);
  // })
  // .catch((e) => {
  //   console.error("Error al modificar el usuario: ", e);
  // });
  //ELIMINAR USUARIO
//   await UserModel.findOneAndDelete({ email: "123@hotmail.com" })
//     .then((u) => {
//       console.log("Usuario modificado con exito: ", u);
//     })
//     .catch((e) => {
//       console.error("Error al modificar el usuario: ", e);
//     });
};

main();
