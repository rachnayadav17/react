import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    const[listOfRestaurant,setListOfRestaurant]=useState([]);
    const[searchText,setSearchText]=useState("")
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);
    useEffect(()=>{
        // console.log("Effect rendered")
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.528913&lng=73.87441989999999&page_type=DESKTOP_WEB_LISTING"
        );
    
        const json=await data.json();
        console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    }
    // if (listOfRestaurant.length==0){
    //     return <Shimmer/>
    // }
    return listOfRestaurant.length==0 ?(<Shimmer/>):(
        <div className="body">
        <div className="filter">
            <div className="serach">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}></input>

                <button onClick={()=>{
                    const filteredRestaurant=listOfRestaurant.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={()=>{
                const filteredlist=listOfRestaurant.filter(
                    (res)=>res.data.avgRating>4
                );
                setListOfRestaurant(filteredlist);
            }}>Top Rated Restaurant</button>
            </div>
        <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.info.id} resData={restaurant?.info} />
        ))}
        </div>
        </div>
    )
};

export default Body;