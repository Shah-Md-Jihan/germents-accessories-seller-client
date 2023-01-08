import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Products = () => {
  const { isLoading, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetch("http://127.0.0.1:8000/api/categories").then((res) => res.json()),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const handleAddProduct = async (e) => {
    e.prevent.defautl();
    console.log(e.target);
    // console.log(data);
    // const product = {
    //   product_name: data?.product_name,
    //   price: data?.price,
    //   quantity: data?.quantity,
    //   category: data?.category,
    //   thumbnail: data?.thumbnail?.name,
    //   photos: data?.photos?.name,
    // };
    // console.log(product);
    //     let result = await fetch("http://127.0.0.1:8000/api/add/product?file", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     });
    //     result = await result.json();

    //     if (result.status === true) {
    //       reset();
    //       toast.success(result.message);
    //     }
  };
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Add Product</h2>
              <form onSubmit={handleAddProduct} method="post">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input type="text" name="product_name" className="input input-bordered w-full" placeholder="Product name" />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Product Price</span>
                  </label>
                  <input type="number" name="price" className="input input-bordered w-full" placeholder="Product price" />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Product Quantity</span>
                  </label>
                  <input type="number" name="quantity" className="input input-bordered w-full" placeholder="Product quantity" />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Product Category</span>
                  </label>

                  <select name="category" className="input input-bordered w-full" placeholder="Select category name">
                    <option value="unknown" selected disabled>
                      --Select One--
                    </option>
                    {categories?.map((cat) => (
                      <option key={cat?.id} value={cat?.category_name}>
                        {cat?.category_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Thumbnail Image</span>
                  </label>
                  <input type="file" name="thumbnail" className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Additional Photo One</span>
                  </label>
                  <input type="file" name="photos" className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full">
                  <input type="submit" value="Add Category" className="btn bg-green-600 border-none hover:bg-red-600 w-full mt-5" />
                </div>
              </form>
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
