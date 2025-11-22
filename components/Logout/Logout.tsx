import React from "react";
import { doLogout } from "@/app/actions";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Logout = async () => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return (
    <form action={doLogout} className="flex justify-center">
      <button
        className="bg-red-500 text-white p-2 rounded-md cursor-pointer text-center hover:bg-red-600 my-4 px-8"
        type="submit"
      >
        Logout
      </button>
    </form>
  );
};

export default Logout;
