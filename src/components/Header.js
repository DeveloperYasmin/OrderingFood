import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL, NAME_URL } from "../utils/constants";
import UserContext from "../utils/Usercontext";
import { useSelector } from "react-redux";

const Header=()=>
{
  const {loggedInUser}=useContext(UserContext)


let [btnname,setbtn]=useState("Login")
  const onlineStatus=useOnlineStatus()

const cartitems=useSelector((store)=> store.cart.items)
    return (
      <div className="pb-3 fixed  bg-red-300  shadow-lg w-full z-10">
     <div className="flex items-center">
     <div className="flex pt-2 mr-80">
       <img className="w-28 pt-2 bg-blend-multiply" src={LOGO_URL}/>
       <img className="w-28 contrast-150 pt-2" src={NAME_URL}/>
      </div>
    <ul className="flex items-center space-x-4 text-xl font-serif">
      <li>Online Status:{onlineStatus?"🟢":"🔴"}</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/Cart">Cart[{cartitems.length}]</Link></li>


        <li><Link to="/grocery">Grocery</Link></li>
        <button className=" p-2 px-6 pt-2 text-white shadow-lg bg-brightRed rounded-full baseline hover:bg-red-600" onClick={()=>{
          btnname=="Login" ? setbtn("Logout"):setbtn("Login")
        }}>{btnname}
        </button> 


        <li>{loggedInUser}</li>
        </ul>   
    </div>   
    </div> )
};

export default Header;