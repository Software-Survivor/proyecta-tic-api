import { UserModel } from "./user";

const userResolvers = {
  Query: {
    Users: async (parent, args) => {
      const users = await UserModel.find();
      return users;
    },
    User: async (parent, args) => {
      const user = await UserModel.findOne({ _id: args._id });
      return user;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const userCreated = await UserModel.create({
        email: args.email,
        identification: args.identification,
        name: args.name,
        lastname: args.lastname,
        rol: args.rol,
      });
      if (Object.keys(args).includes("status")) {
        userCreated.status = args.status;
      }
      return userCreated;
    },
    editUser: async (parent, args) => {
      const editedUser = await UserModel.findByIdAndUpdate(args._id, {
        email: args.email,
        identification: args.identification,
        name: args.name,
        lastname: args.lastname,
        rol: args.rol,
        status: args.status,
      });
      return editedUser;
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
  },
};
export { userResolvers };
