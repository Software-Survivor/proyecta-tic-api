import { connect } from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbUrl = process.env.DB_URL;

const conectarDB = async () => {
    return await connect (
        `mongodb+srv://${dbUsername}:${dbPassword}@${dbUrl}/myFirstDatabase?retryWrites=true&w=majority`
    )
    .then(()=>{
        console.log('La conexión a mongo fue exitosa');
    })
    .catch((e)=>{
        console.error('Error conectando a la BD ', e);
    });
};

export default conectarDB;