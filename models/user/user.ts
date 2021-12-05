import { Schema, model } from 'mongoose';
import { Enum_Rol, Enum_StatusUsers } from '../enums/enums';

interface User {
    email: string;
    pasword: string;
    identification: string;
    name: string;
    lastname: string;
    rol: Enum_Rol;
    status: Enum_StatusUsers;
}

const UserSchema = new Schema<User> ({
    email:{
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: (email)=>{
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            }
        }
    },
    pasword:{
        type: String,
        required: true,
    },
    identification:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    rol:{
        type: String,
        required: true,
        enum: Enum_Rol,
    },
    status:{
        type: String,
        required: true,
        enum: Enum_StatusUsers,
        default: Enum_StatusUsers.PENDIENTE,
    },
});
UserSchema.virtual('advancement', {
    ref:'Advancement',
    localField: '_id',
    foreignField: 'createdBy',
})
UserSchema.virtual('inscription', {
    ref:'Inscription',
    localField: '_id',
    foreignField: 'student',
})
const UserModel = model('User', UserSchema );
export { UserModel };