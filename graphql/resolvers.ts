import { UserModel } from "../models/user";

const resolvers = {
  Query: {
    Usuario: async (parent, args) => {
      // Consulta todos los usuarios de la base de datos
      const usuarios = await UserModel.find();
      return usuarios;
    },
  },
  Mutation: {
    // Se debe llamar igual al items de la mutation en los type.ts
    createUser: async (parent, args) => {
      const createUser = await UserModel.create({
        name: args.name,
        lastname: args.lastname,
        identification: args.identification,
        email: args.email,
        rol: args.rol,
      });
      return createUser;
    },
  },
};

export { resolvers };
