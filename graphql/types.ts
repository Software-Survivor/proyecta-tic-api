import { gql } from "apollo-server-express";
import { typesEnums } from "../models/enum/types";
import { typesUser } from "../models/user/types";
import { typesProject } from "../models/project/types";
import { typesAdvancement } from "../models/advancement/types";

const typesGlobals = gql`
  # Se define este scalar porque grapql por defecto no tiene el tipo de dato date
  scalar Date
`;

export const types =  [ typesGlobals, typesEnums, typesUser, typesProject, typesAdvancement ];
