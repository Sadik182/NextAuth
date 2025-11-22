import React from "react";
import { doSocialLogin } from "@/app/actions";

const Login = () => {
  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-row gap-4" action={doSocialLogin}>
        <button
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          type="submit"
          name="action"
          value="google"
        >
          Google Login
        </button>
        <button
          className="bg-green-500 text-white p-2 rounded-md cursor-pointer"
          type="submit"
          name="action"
          value="github"
        >
          GitHub Login
        </button>
      </form>
    </div>
  );
};

export default Login;
