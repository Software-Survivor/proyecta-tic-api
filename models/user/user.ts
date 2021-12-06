import { Schema, model } from "mongoose";
import { Enum_Rol, Enum_StatusUsers } from "../enum/enum";

interface User {
  email: string;
  identification: string;
  password: string;
  name: string;
  lastname: string;
  rol: Enum_Rol;
  status: Enum_StatusUsers;
}

const UserSchema = new Schema<User>({
   email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email); // Expresión regular para validar el formato del correo
      },
      message: 'El formato del correo electrónico es incorrecto.',
    },
  },
  password: {
    type: String,
    required: true,
  },
  identification: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
    enum: Enum_Rol,
  },
  status: {
    type: String,
    enum: Enum_StatusUsers,
    default: Enum_StatusUsers.PENDIENTE,
  },
});

UserSchema.virtual('inscriptions', {
  ref: "Inscription",
  localField: "_id",
  foreignField: "student"
})

UserSchema.virtual('advancementCreated', {
  ref: "Advancement",
  localField: "_id",
  foreignField: "createdBy"
})

const UserModel = model("User", UserSchema);

export { UserModel };
