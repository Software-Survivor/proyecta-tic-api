import { UserModel } from "../../models/user/user";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/tokenUtils";

const resolversAuth = {
  Mutation: {
    register: async (parent, args) => {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.password, salt);
      const userCrated = await UserModel.create({
        name: args.name,
        lastname: args.lastname,
        password: hashedPassword,
        identification: args.identification,
        email: args.email,
        rol: args.rol,
      });
      console.log("crear usuario", args);
      return {
        token: generateToken({
          _id: userCrated._id,
          name: userCrated.name,
          lastname: userCrated.lastname,
          identification: userCrated.identification,
          email: userCrated.email,
          rol: userCrated.rol,
        }),
      };
    },

    login: async (parent, args) => {
      const userFound = await UserModel.findOne({email: args.email});
      if(await bcrypt.compare(args.password, userFound.password)){
        return {
          token: generateToken({
            _id: userFound._id,
            name: userFound.name,
            lastname: userFound.lastname,
            identification: userFound.identification,
            email: userFound.email,
            rol: userFound.rol,
          })
        }
      };
    },

    validateToken: async (parent, args, context) => {
      console.log("context: ", context)
    }
  },
};

export { resolversAuth };
