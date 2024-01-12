import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestCategory from "./RestCategory";
import { useState } from "react";

const RestaurantMenu=()=>{
    const {resId}=useParams();
    const  resInfo= useRestaurantMenu(resId);

    const[showindex,setshowindex]=useState(null)
    const[hideindex,sethideindex]=useState(null)
    if(resInfo == null) return <Shimmer/>

  const {city,name,cuisines,areaName,avgRating,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info || {};
  console.log(resInfo)
  
  let categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")    
return (
  <div className=" pt-44 pt-5 h-screen bg-red-300 ">
  <div className="bg-red-300  md:pl-64 pl-20 font-serif">
<h2 className=" font-bold text-2xl">{name}</h2>
<h2>{cuisines.join(", ")}</h2>
<h3>{areaName}, {city}</h3>
<h3>💲{costForTwoMessage},  ⏳ {resInfo?.cards[0]?.card?.card?.info.sla.slaString}</h3>
<h3>{avgRating} Stars⭐</h3>
<label>--------------------------------------------------------</label>
    {categories.map((category,index)=>(
     <RestCategory 
      key={category?.card?.card?.title}
      data={category?.card?.card}
      showitems={index===showindex}
      setshowindex={()=>
        setshowindex(index)
      }

      hideitems={index!==showindex}
      sethideindex={()=>
        sethideindex(setshowindex)
       }



      />))}

  </div>
</div>)}








export default RestaurantMenu