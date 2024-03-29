import type { GadgetSettings } from "gadget-server";

export const settings: GadgetSettings = {
  type: "gadget/settings/v1",
  plugins: {
    authentications: {
      settings: { redirectOnSignIn: "/signed-in", signInPath: "/sign-in", unauthorizedUserRedirect: "redirect", accessControlForSignedInUsers: ["signed-in"] },
      methods: { emailPassword: true, googleOAuth: { scopes: ["email", "profile"], offlineAccess: false } },
    },
  },
};
