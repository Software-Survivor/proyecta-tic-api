import { UserModel } from "../models/user"

const resolvers = {
  Query: {
    Usuario: async (parent, args) => {
      const users = await UserModel.find()
      return users
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
      })
      return createUsers
    },
  },
}

export { resolvers }
