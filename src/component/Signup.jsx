import React, { useRef, useState,useId } from "react";
import Password from "./Password";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ref = useRef();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const id = useId()

  const create = async (data) => {
    console.log(data);
    setError("");
    try {
      const created = await authService.createAccount(data);
      console.log(created)
      if (created) {
        const userData = await authService.getCurrentUser();
        console.log(userData)
        if (userData) {
          dispatch(login(userData));
          navigate("/");
        } else {
          console.log(error);
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form>
        <div>
          <div className="flex flex-col ">
            <label className="text-md font-mono mb-1"> Name</label>
            <input
              className="p-2 mb-2 border hover:bg-gray-50 w-full mt-1 rounded-lg"
              type="text"
              placeholder="Enter your name..."
              {...register("name", {
                required: true,
              })}
              id={id}
            />
          </div>
          <div>
            <label className="text-md font-mono "> Email</label>
            <input
              className="p-2 mb-2 border hover:bg-gray-50 w-full mt-2 rounded-lg"
              type="text"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
              id={id}
              placeholder="Enter your email..."
            />
          </div>
          <div>
            <label className="text-md font-mono "> Password</label>
            <Password
              {...register("password", {
                required: true,
              })}
              ref={ref}
              id={id}
            />
          </div>

          <div className="flex justify-center items-center my-8 ">
            <button
              onSubmit={handleSubmit(create)}
              type="submit"
              className="px-4 py-2 border rounded shadow-md"
            >
              Signup
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
