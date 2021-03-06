import jwt from "jsonwebtoken";

const validateToken = (token) => {
  if (token) {
    const verification = jwt.verify(token, "secret", (err, data) => {
      if(data){
          return {data:data};
      };
      if(err){
          return{error: err};
      }
    });
    // console.log(verification)
    return verification;
  }
};

const generateToken = (paylaod) => {
  return jwt.sign(paylaod, "secret", {
    expiresIn: "24h",
  });
};

export { generateToken, validateToken };
