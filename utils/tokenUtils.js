import jwt from "jsonwebtoken";

const generateToken = (paylaod)=>{
    return jwt.sign(paylaod, 'secret', {
        expiresIn: '24h'
    });
};

export { generateToken };