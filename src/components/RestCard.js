import { CDN_URL } from "../utils/constants";

const RestCard=(props)=>
{
    const {resData}=props
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.info;
    return(
<div data-testid="resCard"

className="m-10 p-5 w-64 font-serif text-lg shadow-2xl rounded-xl cursor-pointer bg-gray-300 hover:bg-gray-400 h-[420px]">
<img className="w-56 rounded-xl pb-5 h-40"
 src={CDN_URL+cloudinaryImageId}/>
<h2 className="font-semibold">{name}</h2>
<h3>{cuisines.join(", ")}</h3>
<h3>{avgRating} stars</h3>
<h3>{costForTwo}</h3>
<h3>{deliveryTime}</h3>
</div>)
}
export const withoffers =(RestCard) =>{
    return (props)=>{
        const{resData}=props
        const{header,subHeader}=resData?.info.aggregatedDiscountInfoV3
        return(
            <div>
              <h1 className="absolute w-48 bg-teal-600 ml-5 p-2  rounded-lg shadow-lg font-sans text-white font-bold ">
                {header}  {subHeader}
                </h1>
                <RestCard {...props}/>
            </div>
        )}}
export default RestCard
