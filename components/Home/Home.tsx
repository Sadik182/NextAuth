import React from "react";
import { auth } from "@/auth";
import { doLogout } from "@/app/actions";
import { redirect } from "next/navigation";
import Image from "next/image";

async function Home() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return (
    <div className="flex flex-col items-center">
      <h1>Logged in as {session?.user?.name}</h1>
      <Image
        src={session?.user?.image || ""}
        alt={session?.user?.name || ""}
        width={100}
        height={100}
      />
    </div>
  );
}

export default Home;
