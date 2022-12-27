import React from "react";
import { FaGoogle, FaLockOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="card w-96 bg-blue-100 shadow-xl mx-auto mt-10">
        <div className="card-body">
          <h2 className="card-title">Please login!</h2>
          <label>Email Address</label>
          <input type="email" placeholder="Email" className="input input-bordered w-full" />
          <label>Password</label>
          <input type="password" placeholder="Password" className="input input-bordered w-full" />
          <p>
            New to our site? Please
            <Link to={"/"}>
              <span className="font-bold text-red-600 hover:text-green-500 ml-1">Signup</span>
            </Link>
          </p>
          <div className="card-actions">
            <div className="flex flex-col w-full border-opacity-50">
              <button className="btn hover:bg-red-600 hover:border-none text-white bg-green-600 border-none w-full mt-5">Login</button>
              <div className="divider">OR</div>
              <button className="btn hover:bg-red-600 hover:border-none bg-black w-full">
                <span className="mr-2">
                  <FaGoogle />
                </span>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
