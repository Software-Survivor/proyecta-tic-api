import { resolversUser } from "../models/user/resolvers";
import { resolversProject } from "../models/project/resolvers";
import { resolversAdvancement } from "../models/advancement/resolvers";
import { resolverInscription } from "../models/inscription/resolvers";

export const resolvers = [resolversUser, resolversProject, resolversAdvancement, resolverInscription];
