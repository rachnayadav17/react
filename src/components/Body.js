import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body=()=>{
    const[listOfRestaurant,setListOfRestaurant]=useState([]);
    const[searchText,setSearchText]=useState("")
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.528913&lng=73.87441989999999&page_type=DESKTOP_WEB_LISTING"
        );
    
        const json=await data.json();
        console.log(json.data);
        const fRestaurants = json?.data?.cards.filter((c) => c?.card?.card?.id === 'top_brands_for_you')
        setListOfRestaurant(fRestaurants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    }
    const onlineStatus=useOnlineStatus();
    if (onlineStatus==false) 
        return(
            <h1>looks like you're offline!!! please check your internet connection.</h1>
        );



    if (listOfRestaurant == null){
        return <Shimmer/>
    }
    return listOfRestaurant.length===0 ?(<Shimmer/>):(
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
          <Link
          key={restaurant.info.id}
          to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant.info} /></Link>
          
        ))}
        </div>
        </div>
    )
};

export default Body;