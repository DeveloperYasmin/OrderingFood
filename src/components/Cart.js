import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearcart } from "../utils/cartSlice"
import { Link } from "react-router-dom"

const Cart=()=>{
 const dispatch=useDispatch()
    const handleClearCart=()=>{
        dispatch(clearcart())
            
    }
    const cartitems=useSelector((store)=>store.cart.items)
    
    console.log(cartitems.card)
    return(<div  className="bg-red-300 pt-44 h-screen w-8/12 font-serif pl-96">   
                {cartitems.length==0?
                <div className=" text-center font-semibold font-serif text-xl m-10">
               <img className=" w-48 ml-32 flex" src=
"https://png.pngtree.com/png-clipart/20221218/original/pngtree-happy-woman-in-apron-smell-food-in-kitchen-png-image_8770858.png"
/>
               
                <h1 className="m-5">Your cart is empty</h1>
                <h2>You can go to home page to view more restaurants</h2>
                <Link to="/">
                <button className="p-2 px-6 mt-10 text-white text-xl shadow-lg bg-brightRed rounded-full baseline hover:bg-red-600"
                >SEE RESTAURANTS NEAR YOU
                </button></Link>
                </div>:
                
                <div data-testid="cart-list">
                <h1 className="text-center text-bold text-2xl">Cart</h1>
                <button className="p-2 px-6 ml-96 pt-2 text-white text-2xl shadow-lg bg-brightRed rounded-full baseline hover:bg-red-600"
                onClick={handleClearCart}> Clear 🗑</button>
                <ItemList items={cartitems}></ItemList>
                </div>
                }
        </div>  
    )   
}

export default Cart