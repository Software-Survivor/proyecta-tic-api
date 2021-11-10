import conectarDB from "./db/db";
import * as dotenv from 'dotenv';
dotenv.config();

const main = async () => {
    await conectarDB();
};

main();