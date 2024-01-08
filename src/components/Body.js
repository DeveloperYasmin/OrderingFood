import RestCard,{ withoffers} from "./RestCard";
import { useState,useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { SEARCH_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/Usercontext";

const Body=()=>{
  const onlineStatus=useOnlineStatus();
  const [searchtext,setsearchtext]=useState("");
  const [listofrest,setlistofrest]=useState([]);
  const [filterrestaurants,setfilterrestaurants]=useState([]);
  const {loggedInUser, setusername}=useContext(UserContext)
  const RestCardOffer = withoffers(RestCard);

  useEffect(()=>{
    
    fetchData()
},[])

  const fetchData=async() =>
  {
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9252007&lng=78.1197754&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json()
    setlistofrest(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
    setfilterrestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }

  const leng=listofrest?.length
 
  if(onlineStatus === false) return (
  <h1 data-testid="off-head">Looks like you are offline please check your internet connection!!!</h1>)

  

  return(leng==0) ? (<Shimmer />):(
   <div className="body z-20">
   <div className="pb-8 flex mr-5 pt-44" >    
    <input type="text" data-testid="search-input" className="border ml-60 p-3 pl-14 font-serif
    border-solid border-black rounded-full w-1/2 text-xl shadow-lg" placeholder="Search for food,restaurants and more!!"
  value={searchtext} onChange={(e)=>{setsearchtext(e.target.value)}}/>
<button data-testid="search-btn" onClick={()=>{
      const filterrestaurants=listofrest.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
      setfilterrestaurants(filterrestaurants)}}>
           <img className="w-7 right-20 relative " src={SEARCH_LOGO_URL}/></button>
<div className="flex font-serif text-xl">

    <button className="p-2 px-6 pt-2 shadow-lg text-white bg-brightRed rounded-full baseline hover:bg-red-600"
      onClick={()=>{
    const filterlist=listofrest.filter((res)=>res.info.avgRating>4.1)
    setfilterrestaurants(filterlist)
}}
      >Top Rated Restaurant</button>
    </div>

    <div className="font-serif text-lg ml-5">
      <label>UserName:</label>
      <input className="border border-black pl-3" value={loggedInUser} onChange={(e)=>setusername(e.target.value)}/>
    </div>
    </div>

    <div className="flex flex-wrap"> 

    {filterrestaurants?.map((restaurant) => (
        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> 

        {restaurant.info.aggregatedDiscountInfoV3  ?
        ( <RestCardOffer resData={restaurant}/> )
        : ( <RestCard resData={restaurant}/>)
        }
        </Link>

        ))}
        

          </div>

  </div>


  )

 };

 
export default Body;