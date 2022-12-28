import React from "react";
import { useForm } from "react-hook-form";

const AddCategory = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    console.log(data.category_name);
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <div className="w-[385px] bg-blue-100 p-6">
          <h1 className="text-xl font-semibold text-center">Add Category</h1>

          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category Name</span>
              </label>
              <input
                type="text"
                {...register("category_name", { required: "Category name is required" })}
                className="input input-bordered w-full"
                placeholder="Type your category name here..."
              />
              {errors.category_name && (
                <p className="text-red-600 mt-1" role="alert">
                  {errors.category_name?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full">
              <input type="submit" value="Add Category" className="btn bg-green-600 border-none hover:bg-red-600 w-full mt-5" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
