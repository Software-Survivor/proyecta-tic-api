import { UserModel } from "../../models/user/user";
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/tokenUtils.js'

const resolversAuth = {
    Mutation:{
        register: async (parent, args)=> {
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
            return generateToken({
                _id: userCrated._id,
                name: userCrated.name,
                lastname: userCrated.lastname,
                identification: userCrated.identification,
                email: userCrated.email,
                rol: userCrated.rol,

            });
        }
    }
};

export { resolversAuth };