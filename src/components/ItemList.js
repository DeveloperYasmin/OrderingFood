import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { additem } from "../utils/cartSlice"



const ItemList=({items})=>{

    const dispatch= useDispatch();

    const handleAddItem=(item)=>{
      dispatch(additem(item))
    }

    return(
        <div>
        {items?.map((item) => (<div data-testid="food-items" key={item?.card?.info?.id}

         className="p-2 m-2  border-b-2 flex justify-between">
    <div className="text-lg font-medium w-9/12">
        <div>
            <span>{item?.card?.info?.name}</span> 
            <span className="flex">₹
            {item?.card?.info?.price?
            item?.card?.info?.price/100:
            item?.card?.info?.defaultPrice/100}</span> 
            </div>  
             <p className=" text-slate-500 mt-3 mb-5">{item?.card?.info?.description}</p>    
            </div>
            <div className="w-4/12 p-3" >
            {item?.card.info.imageId?
            <div>
        <div className="absolute  [w-100px]">
        <button className="bg-white text-sm p-1 mx-10 mt-24  rounded-lg shadow-lg text-green-900 w-20 font-semibold"
        onClick={()=>handleAddItem(item)}
        >ADD
        
        </button>
        </div>
        <img className="rounded-xl w-full h-28" src={CDN_URL+item?.card?.info?.imageId}/>
          </div>   :
            <div className="text-black text-sm bg-white shadow-xl rounded-xl w-full p-2 ">Next available at 11:30am, tomorrow</div>  
             } </div>
</div>
        ))}

         </div>
       
        
    )
}

export default ItemList