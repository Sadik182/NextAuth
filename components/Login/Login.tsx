import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Practice Next Authentication</h1>
      <div className="flex flex-row gap-4">
        <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer">
          Google Login
        </button>
        <button className="bg-green-500 text-white p-2 rounded-md cursor-pointer">
          GitHub Login
        </button>
      </div>
    </div>
  );
};

export default Login;
