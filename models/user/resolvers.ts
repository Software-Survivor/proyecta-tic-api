import { UserModel } from "./user";

const resolversUser = {
  Query: {
    Users: async (parent, args, context) => {
      // Consulta todos los usuarios de la base de datos
      if (context.userData.rol === "ADMINISTRADOR") {
        const users = await UserModel.find();
        return users;
      } else {
        return null;
      }
      
      const users = await UserModel.find().populate([
        {
          path: "inscriptions",
          populate: {
            path: "project",
            populate: {
              path: "leader",
            },
          },
        },
      ]);
      return users;

      /////////////////// AGRAGAR ESTE CODIGO PARA VALIDARCION DE ROLES DESDE EL BACK  /////////////
     
    },

    User: async (parent, args) => {
      const user = await UserModel.findOne({ _id: args._id });
      return user;
    },
  },
  Mutation: {
    // Se debe llamar igual al items de la mutation en los type.ts
    createUser: async (parent, args) => {
      const userCreated = await UserModel.create({
        name: args.name,
        lastname: args.lastname,
        identification: args.identification,
        email: args.email,
        rol: args.rol,
      });
      if (Object.keys(args).includes("status")) {
        userCreated.status = args.status;
      }
      return userCreated;
    },

    editUser: async (parent, args) => {
      const userEdited = await UserModel.findByIdAndUpdate(
        args._id,
        {
          name: args.name,
          lastname: args.lastname,
          identification: args.identification,
          email: args.email,
          status: args.status,
          rol: args.rol,
        },
        { new: true }
      );
      return userEdited;
    },

    deleteUser: async (parent, args) => {
      if (Object.keys(args).includes("email")) {
        const userDeleted = await UserModel.findOneAndDelete({
          email: args.email,
        });
        return userDeleted;
      } else if (Object.keys(args).includes("_id")) {
        const userDeleted = await UserModel.findOneAndDelete({ _id: args._id });
        return userDeleted;
      }
    },
  },
};

export { resolversUser };
