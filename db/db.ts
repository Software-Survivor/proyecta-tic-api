import { connect } from "mongoose";

const ConectBD = async () => {
  return await connect(
    "mongodb+srv://adminSurvivor:survivor-mision-tic-2022@cluster0.a9tbw.mongodb.net/pruebasGustavo?retryWrites=true&w=majority"
  ).then(()=>{
      console.log("Conexeión exitosa")
  }).catch((e)=>{
      console.error("Error de conexión: ", e)
  });
};
export default ConectBD;
