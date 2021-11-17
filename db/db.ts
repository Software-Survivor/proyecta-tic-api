import { connect } from "mongoose";

const ConectBD = async () => {
  return await connect(process.env.DATABASE_URL).then(()=>{
      console.log("¡Conexión exitosa!")
  }).catch((e)=>{
      console.error("Error de conexión: ", e)
  });
};
export default ConectBD;
