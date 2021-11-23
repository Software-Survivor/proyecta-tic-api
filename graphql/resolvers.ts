import { userResolvers } from "../models/user/resolvers";
import { projectResolvers } from '../models/project/resolvers';
import { advancementResolvers } from "../models/advancement/resolvers";

export const resolvers = [userResolvers, projectResolvers, advancementResolvers];
