const resolvers = {
  Query: {
    Usuario: async (parent, args) => {
      const usuarios = [
        { nombre: "Gustavo" },
        { nombre: "Carlos" },
        { nombre: "Camilo" },
        { nombre: "Sergio" },
      ];
      return usuarios;
    },
  },
};

export { resolvers };
