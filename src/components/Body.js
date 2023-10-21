import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.528913&lng=73.87441989999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json.data);
    const fRestaurants = json?.data?.cards.filter(
      (c) => c?.card?.card?.id === "top_brands_for_you"
    );
    setListOfRestaurant(
      fRestaurants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return (
      <h1>
        looks like you're offline!!! please check your internet connection.
      </h1>
    );

  if (listOfRestaurant == null) {
    return <Shimmer />;
  }
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="serach m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
            <button
              className="px-4 py-1 bg-orange-500 m-4 rounded-lg hover:bg-orange-700"
              onClick={() => {
                const filteredRestaurant = listOfRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center rounded-lg">
            <button
              className="px-4 py-2 bg-gray-100 rounded-lg   hover:bg-gray-200"
              onClick={() => {
                const filteredList = listOfRestaurant.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurant(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
        <div className="flex flex-wrap mx-20">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant.info} />
            </Link>
          ))}
        </div>
      </div>
  );
};

export default Body;
