import { deleteRecord, ActionOptions, DeleteUserActionContext } from "gadget-server";

/**
 * @param { DeleteUserActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  await deleteRecord(record);
};

/**
 * @param { DeleteUserActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
  // adding comments
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
