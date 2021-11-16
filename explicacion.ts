import ConectBD from "./db/db";
import { UserModel } from "./models/user";
import { ProjectModel } from "./models/project";
import { Enum_Rol, Enum_StatusUsers, Enum_TypeObjetive } from "./models/enums";
import { ObjetiveModel } from "./models/objective";



const main = async () => {
  await ConectBD();
  
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
//

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
//  await ProjectModel.find({name: "projAd"}).populate("leader")
//   .then((u) => {
//     console.log("Consultando proyectos... Datos: ", u);
//   })
//   .catch((e) => {
//     console.log("Error al consultar proyectos: ", e);
//   });

////////////////   METODOLOGIA #1   //////////////
// const createProjectWithObjective = async () => {
//   const usuarioInicial = await UserModel.create({
//     email: "12we3@hotmail.com",
//     identification: "873867608123",
//     name: "Carlos",
//     lastname: "Matínez",
//     rol: Enum_Rol.administrador,
//     status: Enum_StatusUsers.autorizado,
//   });

// const newProject = await ProjectModel.create({
//   name: "Proyecto Génesies",
//   budget: 98263198,
//   startDate: Date.now(),
//   endData: new Date("2021/12/12"),
//   leader: usuarioInicial._id,
// });

// const newObjectiveGeneral = await ObjetiveModel.create({
//   description: "Este es el objetivo general del Proyecto Génesis",
//   type: Enum_TypeObjetive.general,
//   project_: newProject._id,
// });

// const newObjectiveEspecific_1 = await ObjetiveModel.create({
//   description: "Este es el objetivo específico_1 del Proyecto Génesis",
//   type: Enum_TypeObjetive.especifico,
//   project_: newProject._id,
// });

// const newObjectiveEspecific_2 = await ObjetiveModel.create({
//   description: "Este es el objetivo específico_2 del Proyecto Génesis",
//   type: Enum_TypeObjetive.especifico,
//   project_: newProject._id,
// });

// }

// const queryProjectWithObjective = async () => {
//   const queryProject = await ProjectModel.findOne({_id: "618edecac9e7d3822713a878"});

//   // console.log("Proyecto consultado: ", queryProject);

//   const queryObjective = await ObjetiveModel.find({project_: Object("618edecac9e7d3822713a878")});

//   //console.log("Objectivos conasultados: ", queryObjective);

//   const queryProjectWithObjective = {...queryProject, objective: queryObjective }

//   console.log("Objectivos conasultados: ", queryProjectWithObjective);
// }
//////////////////     METODOLOGÍA #2    ///////////////////
// const createProjectWithObjective_2 = async () => {
//   const newObjectiveGeneral = await ObjetiveModel.create({
//     description: "Este es el objetivo general del Proyecto Génesis",
//     type: Enum_TypeObjetive.general,
//   });

//   const newObjectiveEspecific_1 = await ObjetiveModel.create({
//     description: "Este es el objetivo específico_1 del Proyecto Génesis",
//     type: Enum_TypeObjetive.especifico,
//   });

//   const newObjectiveEspecific_2 = await ObjetiveModel.create({
//     description: "Este es el objetivo específico_2 del Proyecto Génesis",
//     type: Enum_TypeObjetive.especifico,
//   });

//   const usuarioInicial = await UserModel.create({
//     email: "12we3@hotmail.com",
//     identification: "873867608123",
//     name: "Carlos",
//     lastname: "Matínez",
//     rol: Enum_Rol.administrador,
//     status: Enum_StatusUsers.autorizado,
//   });

//   const newProject = await ProjectModel.create({
//     name: "Proyecto Génesies",
//     budget: 98263198,
//     startDate: Date.now(),
//     endData: new Date("2021/12/12"),
//     leader: usuarioInicial._id,
//     objective: [ newObjectiveGeneral._id, newObjectiveEspecific_1._id, newObjectiveEspecific_2._id],
//   });
// };

// const queryProjectWithObjective_2 = async () => {

//   const queryProject = await ProjectModel.find({_id: "618eeb1586727d69ce0a7955"}).populate("objective");

//   console.log("Proyectos consultados: ", JSON.stringify(queryProject));
// }


//////////////////     METODOLOGÍA #3    ///////////////////
// const createProjectWithObjective_3 = async () => {
// const usuarioInicial = await UserModel.create({
//   email: "12we3@hotmail.com",
//   identification: "873867608123",
//   name: "Carlos",
//   lastname: "Matínez",
//   rol: Enum_Rol.administrador,
//   status: Enum_StatusUsers.autorizado,
// });

// const newProject = await ProjectModel.create({
//   name: "Proyecto Génesies",
//   budget: 98263198,
//   startDate: Date.now(),
//   endData: new Date("2021/12/12"),
//   leader: usuarioInicial._id,
//   objective: [
//   {description: "Objetivo general", type: Enum_TypeObjetive.general},
//   {description: "Objetivo específico", type: Enum_TypeObjetive.especifico},
//   {description: "Objetivo específico", type: Enum_TypeObjetive.especifico},

//   ],
// });
//
// };

// const queryProjectWithObjective_3 = async () => {
  // const queryProject = await ProjectModel.find({
  //   _id: "618ef7a53cceedc9c449ae6d",
  // });

  // console.log("Proyectos consultados: ", JSON.stringify(queryProject));
// }