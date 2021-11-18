import { resolversUser } from "../models/user/resolvers";
import { resolversProject } from "../models/project/resolvers";
import { resolversAdvancement } from "../models/advancement/resolvers";

export const resolvers = [resolversUser, resolversProject, resolversAdvancement];
