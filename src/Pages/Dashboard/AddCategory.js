import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddCategory = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function getAllStudents() {
      try {
        const studentsAll = await axios.get("http://127.0.0.1:8000/api/student");
        console.log(studentsAll.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudents();
  }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const handleAddCategory = async (data) => {
    let result = await fetch("http://127.0.0.1:8000/api/add/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    result = await result.json();

    if (result.status === true) {
      reset();
      toast.success(result.message);
    }
  };
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="w-[385px] bg-blue-100 p-6">
          <h1 className="text-xl font-semibold text-center">Add Category</h1>

          <form onSubmit={handleSubmit(handleAddCategory)}>
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
