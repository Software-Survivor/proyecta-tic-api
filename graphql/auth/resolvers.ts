const resolversAuth = {
    Mutation:{
        register: async (parent, args)=>{
            console.log("crear usuario", args);
            return "Usuario creado"
        }
    }
};

export { resolversAuth };