import ConectBD from "./db/db";
import { UserModel } from "./models/user";
import { ProjectModel } from "./models/projects";

const main = async () => {
  await ConectBD();
///////////   CREACION DE PROYECTOS    ////////////
  // await ProjectModel.create({
  //   name: "projAd",
  //   budget: 9870876,
  //   startDate: Date.now(),
  //   endData: new Date('2021/12/12'),
  //   leader: "618c8891b76c14f4b1d29b5a"
  // }).then((u)=>{
  //   console.log("Registro creado con éxito: ", u)
  // }).catch((e)=>{
  //   console.error("Error al crear el modelo proyecto en la base de datos: ", e)
  // });

///////////   CONSULTA DE PROYECTOS    ////////////
   await ProjectModel.find({name: "projAd"}).populate("leader")
    .then((u) => {
      console.log("Consultando proyectos... Datos: ", u);
    })
    .catch((e) => {
      console.log("Error al consultar proyectos: ", e);
    });
 
  };
main();

//////////////     CRUD DE USUARIOS      /////////////////////

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


// ¡Conexión exitosa!
// Consultando usuarios... Datos:  [
//   {
//     status: 'Pendiente',
//     _id: new ObjectId("618c8891b76c14f4b1d29b5a"),
//     email: '123@hotmail.com',
//     identification: 'Sat Jan 10 1970 21:40:08 GMT-0500 (hora estándar de Colombia)',
//     name: 'Gustavo',
//     lastname: 'Matínez',
//     __v: 0
//   }
// ]