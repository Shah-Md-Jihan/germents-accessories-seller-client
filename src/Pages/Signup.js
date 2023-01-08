import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignUp = (info) => {
    console.log(info);
    createUser(info.email, info.password)
      .then((user) => {
        const userInfo = {
          displayName: info.name,
        };
        updateUser(userInfo)
          .then(() => {
            // handleSingUpAlert();
            // saveUserInDB(info.name, info.email);
            navigate(from, { replace: true });
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-[385px] p-6 bg-blue-100 rounded">
        <h1 className="text-xl font-semibold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email", { required: "Email is required" })} className="input input-bordered w-full" />
            {errors.email && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password field is required",
                minLength: { value: 6, message: "Password must be 6 character or longer!" },
                pattern: {
                  value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&?"])(?=.*[0-9])/,
                  message: "Password must have a capital letter, small letter,number and a special character!",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <p className="mt-1">
            Already have an account?
            <Link to="/login" className="text-green-600 font-bold hover:text-red-600 ml-1">
              Please Login
            </Link>
          </p>
          <div className="form-control w-full mt-4">
            <input type="submit" value="SIGN UP" className="btn btn-accent w-full hover:bg-red-600 hover:text-white border-none" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
