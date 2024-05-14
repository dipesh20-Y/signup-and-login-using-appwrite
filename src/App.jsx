import React, { useState } from "react";
import Login from "./component/Login";
import Signup from "./component/Signup";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <div className="flex my-16 ">
        <div className="mx-4">logo</div>
        <div>ACME</div>
      </div>
      <div className="border  w-128 px-8 py-6  shadow-md transition translate-x-6">
        <div>
          <div className="mb-4 grid w-full grid-cols-2 rounded-2xl bg-gray-100 p-1 ">
            <button
              className={
                isLogin
                  ? "border-white bg-white px-20 py-1 rounded-xl  shadow-md shadow-black transition translate-x-1 "
                  : "border-none px-20 py-1 rounded-xl text-center"
              }
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>

            <button
              className={
                !isLogin
                  ? "border-white bg-white px-20 py-1 rounded-xl  shadow-md shadow-black transition translate-x-1"
                  : "border-none px-20 py-1 rounded-xl text-center"
              }
              onClick={() => {
                setIsLogin(false);
              }}
            >
              SignUp
            </button>
          </div>
        </div>

        <div>{isLogin ? <Login /> : <Signup />}</div>
      </div>
    </div>
  );
}

export default App;
