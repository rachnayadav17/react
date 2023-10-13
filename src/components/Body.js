import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import { useState } from "react";

const Body=()=>{
    const[listOfRestaurant,setListOfRestaurant]=useState(resList);
    
    return(
        <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filteredlist=listOfRestaurant.filter(
                    (res)=>res.data.avgRating>4
                );
                setListOfRestaurant(filteredlist);
            }}>Top Rated Restaurant</button>
            </div>
        <div className="restaurant-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
        </div>
        </div>
    )
};

export default Body;