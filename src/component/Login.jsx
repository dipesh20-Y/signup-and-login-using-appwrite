import React, { useState } from "react";
import Password from "./Password";

function Login() {
 

  return (
    <div>
      <form>
        <div>
          <div className="flex flex-col ">
            <label className="text-md font-mono mb-1"> Email</label>
            <input
              className="p-2 mb-2 border rounded-lg hover:bg-gray-50 w-full mt-1"
              type="email"
              placeholder="Enter your Email..."
            />
          </div>
          <div>
            <label className="text-md font-mono "> Password</label>
            <Password />
          </div>
          <div className="flex justify-center items-center my-8 ">
            <button className="px-4 py-2 border rounded shadow-md shadow-gray-600">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
