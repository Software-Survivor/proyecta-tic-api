import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  identification: {
    type: Date,
    required: true,
    unique:true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  rol:{
      type: String,
      required: true,
      enum: ["Estudiante", "Lider", "Administrador"]  
  },
});

const UserModel = model("User", UserSchema);

export { UserModel };
