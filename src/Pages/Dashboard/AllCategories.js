import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  let flag = 1;
  let date;

  useEffect(() => {
    async function getAllCategories() {
      try {
        const categoryAll = await axios.get("http://127.0.0.1:8000/api/categories");
        setCategories(categoryAll.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllCategories();
  }, []);
  return (
    <div className="w-5/6 mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Category Name</th>
              <th>Created At</th>
              <th>Last Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? (
              categories.map((category) => (
                <tr key={category?.id}>
                  <th>{flag++}</th>
                  <td>{category?.category_name}</td>

                  <td>{moment(category?.created_at).startOf("hour").fromNow()}</td>

                  <td>{moment(category?.updated_at).startOf("hour").fromNow()}</td>
                  <td>
                    <div className="btn-group">
                      <button className="btn btn-sm bg-yellow-600 border-none">
                        <span className="px-3 flex">
                          <FaPencilAlt className="mr-1" />
                          Edit
                        </span>
                      </button>
                      <button className="btn btn-sm bg-red-600 border-none">
                        <FaTrashAlt className="mr-1" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colspan="50" className="text-center text-red-600">
                  No Data to Show
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCategories;
