import { Enum_StatusIncription } from "../enum/enum";
import { InscriptionModel } from "./inscription";

const resolverInscription = {
  Query: {
    Inscriptions: async (parent, args) => {
      const inscription = await InscriptionModel.find().populate("student").populate("project");

      return inscription;
    },

    Inscription: async (parent, args) => {
      const inscription = await InscriptionModel.findOne({ _id: args._id });
      return inscription;
    },

    InscriptionAll: async (parent, args) => {
      const inscription = await InscriptionModel.find({ _id: args._id })
        .populate("project")
        .populate("student");
      return inscription;
    },
  },
  Mutation: {
    createInscription: async (parent, args) => {
      const inscriptionCreated = await InscriptionModel.create({
        project: args.project,
        student: args.student,
        statusInscription: args.statusInscription,
        dateStart: args.dateStart,
        dateEnd: args.dateEnd,
      });
      // if (Object.keys(args).includes("inscriptionStatus")) {
      //   inscriptionCreated.statusInscription = args.statusInscription;
      // }
      return inscriptionCreated;
    },
    approveInscription: async (parent, args) => {
      const inscriptionApproved = await InscriptionModel.findOneAndUpdate(
        args._id,
        {
          statusInscription: Enum_StatusIncription.ACEPTADA,
          dateStart: new Date(Date.now()),
        }
      );
      return inscriptionApproved;
    },

    editInscription: async (parent, args) => {
      const inscriptionEdited = await InscriptionModel.findByIdAndUpdate(
        args._id,
        {
          statusInscription: args.statusInscription,
          dateStart: new Date(Date.now()),
        },
        { new: true }
      );
      return inscriptionEdited;
    },

    editInscriptionStartDateNow: async (parent, args) => {
      
      args._id.map(async (id) => {
        const inscriptionEdited = await InscriptionModel.findByIdAndUpdate(
          id,
          {
            dateStart: new Date(Date.now()),
          },
          { new: true }
        );
        return inscriptionEdited;
      });
    },

    editInscriptionEndDateNow: async (parent, args) => {
        const inscriptionEdited = await InscriptionModel.findByIdAndUpdate(
          args._id,
          {
            dateEnd: new Date(Date.now()),
          },
          { new: true }
        );
        return inscriptionEdited;
    },

    deleteInscription: async (parent, args) => {
      const inscriptionDeleted = await InscriptionModel.findOneAndDelete({
        _id: args._id,
      });
      return inscriptionDeleted;
    },
  },
};

export { resolverInscription };
