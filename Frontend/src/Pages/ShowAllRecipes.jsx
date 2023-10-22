import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Backbutton from "../components/BackButton";
import Spinner from "../components/spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import {FaSearch} from "react-icons/fa";

const ShowAllRecipes = () => {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/recipes`)
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setRecipe(response.data.data);
          setLoading(false);
        } else {
          console.error(
            "API response data is not an array:",
            response.data.data
          );
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const filteredRecipes = recipe.filter((res) => {
    return res.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className=" #">
      <h1 className="text-3xl text-center my-4">
        <Backbutton />
        Show All Recipes
      </h1>

      <div className="relative mx-auto mr-32  max-w-sm">
        <input
          className="w-full py-2 pl-10 pr-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search by Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
          {/* Replace 'FaSearch' with your specific React Icons component */}
          <FaSearch />
        </span>
      </div>

      <div className="px-2 sm:px-8 md:px-20 lg:px-32 py-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {loading ? (
          <Spinner />
        ) : (
          filteredRecipes.map((res) => (
            <div
              key={res._id}
              className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4"
            >
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Id</span>
                <span>{res._id}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Name</span>
                <span>{res.name}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Description</span>
                <span>{res.description}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Ingrediants</span>
                <span>{res.ingrediants}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Category</span>
                <span>{res.category}</span>
              </div>
              <div className="my-4">
                <img src={res.image} alt="" />
              </div>
              <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                <Link to={`/recipes/details/${res._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
                </Link>
                <Link to={`/recipes/edit/${res._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
                </Link>
                <Link to={`/recipes/delete/${res._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShowAllRecipes;
