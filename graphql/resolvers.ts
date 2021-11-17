import { UserModel } from "../models/user";

const resolvers = {
  Query: {
    Usuario: async (parent, args) => {
      const users = await UserModel.find();
      return users;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const createUsers = await UserModel.create({
        name: args.name,
        lastname: args.lastname,
        identification: args.indentification,
        email: args.email,
        status: args.status,
        rol: args.rol,
      });

      if (Object.keys(args).includes("status")) {
        createUsers.status = args.status;
      }

      return createUsers;
    },

    deleteUser: async (parent, args) => {
      if (Object.keys(args).includes("_id")) {
        const deletedUser = await UserModel.findOneAndDelete({ _id: args._id });
        return deletedUser;
      } else if (Object.keys(args).includes("email")) {
        const deletedUser = await UserModel.findOneAndDelete({
          email: args.email,
        });
        return deletedUser;
      }
    },

    editUser: async (parent, args) =>{
      const editUser = await UserModel.findOneAndUpdate({
        name: args.name,
        lastname: args.lastname,
        identification: args.indentification,
        email: args.email,
        status: args.status,
        rol: args.rol,
      });

      if (Object.keys(args).includes("status")) {
        editUser.status = args.status;
      }

      return editUser;
    }
  },
};

export { resolvers };
