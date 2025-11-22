"use server";

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action");
  if (action && typeof action === "string") {
    await signIn(action, { redirectTo: "/home" });
  }
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
