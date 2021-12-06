import { UserModel } from "../../models/user/user";
import bcrypt from 'bcrypt';
import { generateToken } from "../../utils/tokenUtils";

const authResolvers = {
    Mutation: {
        register: async(parent, args)=>{
            const salt = await bcrypt.genSalt(10);
            const hashedPasword = await bcrypt.hash(args.password, salt);
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
        login: async (parent, args)=>{
            const userFound = await UserModel.findOne({ email: args.email });
            if(await bcrypt.compare(args.password, userFound.password)){
                return{
                    token: generateToken({
                        _id: userFound._id,
                        name: userFound.name,
                        lastname: userFound.lastname,
                        identification: userFound.identification,
                        email: userFound.email,
                        rol: userFound.rol,
                    })
                }
            }
        },
        validateToken: async(parent, args, context)=>{
            if(!context.userData){
                return{
                    error: 'token no válido'
                };
            } else{
                console.log("context.userData: ", context.userData);
                return {
                  token: generateToken({
                    _id: context.userData._id,
                    name: context.userData.name,
                    lastname: context.userData.lastname,
                    identification: context.userData.identification,
                    email: context.userData.email,
                    rol: context.userData.rol,
                  }),
                };
            }
        }
    },
};

export { authResolvers };
