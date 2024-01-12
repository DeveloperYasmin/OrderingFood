import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL, NAME_URL } from "../utils/constants";
import UserContext from "../utils/Usercontext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"


const Header=()=>
{
  const {loggedInUser}=useContext(UserContext)
  


let [btnname,setbtn]=useState("Login")
  const onlineStatus=useOnlineStatus()
  
const cartitems=useSelector((store)=> store.cart.items)
const [click,setclick]=useState(false)
const handleclick=()=>
  setclick(!click)

  const content=<>
    <div className="lg:hidden block absolute top-20 bg-gray-300 rounded-sm shadow-xl right-0  z-20 transition">
  <ul className="text-xl p-5">
    <li className="p-2 " >Status:{onlineStatus?"Online🟢":"Offline🔴"}</li>
        <li className="p-2 " ><Link py={true} smooth={true} to="/">Home</Link></li>
        <li className="p-2 "><Link py={true} smooth={true} to="/about">About</Link></li>
        <li className="p-2 "><Link py={true} smooth={true} to="/contact">Contact</Link></li>
        <li className="p-2 "><Link py={true} smooth={true} to="/Cart">Cart[{cartitems.length}]</Link></li>
        <li className="p-2 "><Link py={true} smooth={true} to="/grocery">Grocery</Link></li>
        </ul></div>
        </>

    return (
     <nav className="bg-gray-300 font-serif text-xl" >
      <div className="h-10vh flex   justify-between z-50 text-black lg:py-5  py-4 ">
     <div className="flex items-center flex-1">
       <img className="w-10 pt-2 bg-blend-multiply" alt="logo" src={LOGO_URL}/>
       <img className="w-14  contrast-150 pt-2" alt="name" src={NAME_URL}/>
      </div>
      <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
 <div className="flex-10">
  <ul  className=" flex gap-5 items-center ">
    <li>Status:{onlineStatus?"Online🟢":"Offline🔴"}</li>
        <li className=" transition  ease-in-out duration-300 hover:scale-110  cursor-pointer"><Link spy={true} smooth={true} to="/">Home</Link></li>
        <li className=" transition  ease-in-out duration-300 hover:scale-110   cursor-pointer"><Link spy={true} smooth={true} to="/about">About</Link></li>
        <li className=" transition  ease-in-out duration-300 hover:scale-110  cursor-pointer" ><Link spy={true} smooth={true} to="/contact">Contact</Link></li>
        <li className=" transition  ease-in-out duration-300 hover:scale-110  cursor-pointer"><Link spy={true} smooth={true} to="/Cart">Cart[{cartitems.length}]</Link></li>
        <li className=" transition ease-in-out duration-300 hover:scale-110  cursor-pointer"><Link spy={true} smooth={true} to="/grocery">Grocery</Link></li>
        </ul>
        </div>
        </div>     
  
      
        <div className="flex items-center gap-4">
        <button className="ml-2 p-2 px-6 pt-2 text-white shadow-lg bg-brightRed rounded-full baseline hover:bg-red-600" onClick={()=>{
          btnname==="Login" ? setbtn("Logout"):setbtn("Login")
        }}>{btnname}
        </button>
        <span>{loggedInUser}</span>
       
        <div>
          {click && content}
        </div>
        <button className="block md:hidden transition" onClick={handleclick}>
          {click?<FaTimes/>:<CiMenuFries/>}
        </button>
        </div>
      </div>
                
    </nav>   
   
    )
    
      }
export default Header;