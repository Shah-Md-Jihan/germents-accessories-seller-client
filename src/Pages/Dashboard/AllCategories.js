import axios from "axios";
import React, { useEffect, useState } from "react";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
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
        <h1>{categories.length}</h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? (
              categories.map((category) => (
                <tr key={category?.id}>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
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
