import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://lets-go-app.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-kRm6cuLUomBK",
  fields: {
    email: { type: "email", validations: { required: true, email: true, unique: true }, storageKey: "ModelField-FVusZkKE9aN5::FieldStorageEpoch-zH6aR6_pHIQH" },
    emailVerificationToken: { type: "string", storageKey: "ModelField-8prAnx5DmPEV::FieldStorageEpoch-nDcIRkgONwiy" },
    emailVerificationTokenExpiration: { type: "dateTime", includeTime: true, storageKey: "ModelField-9d_7-93xfC0B::FieldStorageEpoch-VHDnw0qDG_gY" },
    emailVerified: { type: "boolean", default: false, storageKey: "ModelField-DySlOFaKtVO3::FieldStorageEpoch-BKTxtkyCligb" },
    firstName: { type: "string", storageKey: "ModelField-tshR5woVg7HU::FieldStorageEpoch-p_-f38GKxo1Q" },
    googleImageUrl: { type: "url", validations: { url: true }, storageKey: "ModelField-aak5v-SbFUXw::FieldStorageEpoch-EEOk80qHjym5" },
    googleProfileId: { type: "string", storageKey: "ModelField-kiQN39vSPySc::FieldStorageEpoch-L3ZkXOYpSdU7" },
    lastName: { type: "string", storageKey: "ModelField-Azvh88Dgu8nf::FieldStorageEpoch-HvPEg1Nlygmg" },
    lastSignedIn: { type: "dateTime", includeTime: true, storageKey: "ModelField-hAoQydJq8-I4::FieldStorageEpoch-2SbsT11PSSXW" },
    password: { type: "password", validations: { strongPassword: true }, storageKey: "ModelField-8GaPkSh4wOFZ::FieldStorageEpoch-FPg2cHe5Dd1x" },
    resetPasswordToken: { type: "string", storageKey: "ModelField-dLatwsX_1rit::FieldStorageEpoch-hzYVbXE0Yfn4" },
    resetPasswordTokenExpiration: { type: "dateTime", includeTime: true, storageKey: "ModelField-q9otRpJrPaZM::FieldStorageEpoch-DiHU-ud2uoMD" },
    roles: { type: "roleList", default: ["unauthenticated"], storageKey: "ModelField-QQKUmSsDj2JC::FieldStorageEpoch-iGKr2Lt0Lir6" },
  },
};
