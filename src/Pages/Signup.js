import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="card w-96 bg-blue-100 shadow-xl mx-auto mt-10">
        <div className="card-body">
          <h2 className="card-title">Please Signup!</h2>
          <label>Name</label>
          <input type="text" placeholder="Name" className="input input-bordered w-full" />
          <label>Email Address</label>
          <input type="email" placeholder="Email" className="input input-bordered w-full" />
          <label>Password</label>
          <input type="password" placeholder="Password" className="input input-bordered w-full" />
          <p>
            Already have an account? Please
            <Link to={"/login"}>
              <span className="font-bold text-red-600 hover:text-green-500 ml-1">Login</span>
            </Link>
          </p>
          <div className="card-actions">
            <div className="flex flex-col w-full border-opacity-50">
              <button className="btn hover:bg-red-600 hover:border-none text-white bg-green-600 border-none w-full mt-5">Signup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
