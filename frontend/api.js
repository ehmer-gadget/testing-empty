import { Client } from "@gadget-client/lets-go-app";

export const api = new Client({ environment: window.gadgetConfig.environment });
