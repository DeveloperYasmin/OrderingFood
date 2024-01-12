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
    setlistofrest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
    setfilterrestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }

  const leng=listofrest?.length
 
  if(onlineStatus === false) return (
  <h1 data-testid="off-head">Looks like you are offline please check your internet connection!!!</h1>)

  

  return(leng===0) ? (<Shimmer />):(
   <div className="body z-20">
   <div className="pb-8 flex mr-5 pt-5" >    
    <input type="text" data-testid="search-input" className="border p-3 md:ml-[400px] ml-16 pl-10 font-serif
    border-solid border-black rounded-full md:w-1/3 w-[40] text-xl shadow-lg" placeholder="Search"
  value={searchtext} onChange={(e)=>{setsearchtext(e.target.value)}}/>
<button data-testid="search-btn" onClick={()=>{
      const filterrestaurants=listofrest.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
      setfilterrestaurants(filterrestaurants)}}>
           <img className="w-7 right-20 relative " alt="img" src={SEARCH_LOGO_URL}/></button>
            </div>
<div className="flex flex-row font-serif text-xl">
    <button className="p-2 px-6 pt-2 shadow-lg text-white bg-brightRed rounded-full baseline hover:bg-red-600"
      onClick={()=>{
    const filterlist=listofrest.filter((res)=>res.info.avgRating>4.1)
    setfilterrestaurants(filterlist)
}}
      >Top Rated Restaurant</button>
   

    <div className="font-serif text-lg m-5">
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