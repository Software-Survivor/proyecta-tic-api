import { UserModel } from "../../models/user/user";
import bcrypt from 'bcrypt';
import { generateToken } from "../../utils/tokenUtils";

const authResolvers = {
    Mutation: {
        register: async(parent, args)=>{
            const salt = await bcrypt.genSalt(10);
            const hashedPasword = await bcrypt.hash(args.pasword, salt);
            const userCreated = await UserModel.create({
                email: args.email,
                identification: args.identification,
                name: args.name,
                lastname: args.lastname,
                rol: args.rol,
                password: hashedPasword,
            });
            console.log('Usuario creado', userCreated);
            return {
                token: generateToken({
                    _id: userCreated._id,
                    name: userCreated.name,
                    lastname: userCreated.lastname,
                    identification: userCreated.identification,
                    email: userCreated.email,
                    rol: userCreated.rol,
                })
            };
        },
    },
};

export { authResolvers };
