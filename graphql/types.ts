import { gql } from "apollo-server-core";
import { userTypes } from "../models/user/types";
import { enumsTypes } from "../models/enums/types";
import { projectTypes } from "../models/project/types";
import { advancementTypes } from "../models/advancement/types";
const globalTypes = gql`
    scalar Date
`;
export const types = [globalTypes, userTypes, enumsTypes, projectTypes, advancementTypes];