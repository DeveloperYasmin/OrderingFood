import React,{ Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/Usercontext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery=lazy(()=>import("./components/Grocery"))
const About=lazy(()=>import("./components/About"))

function App(){
const AppLayout =() =>{
    const [username,setusername]=useState();

    useEffect(()=>{
        const data={
            name:"Yasmin",
        }
        setusername(data.name)
    },[])
    
    
    
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:username,setusername}}>
<div className="bg-red-300 [w-100px] bg-cover bg-no-repeat ">     
        <Header/> 
        <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
        )
};  

const appRouter=createBrowserRouter([
{
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<Body/>,
        },
        {
            path:"/about",
            element:<Suspense fallback={<h1>Loading</h1>}><About/></Suspense>,
        
        },
        {
            path:"/contact",
            element:<Contact/>
        },  
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>
        },  

        {
            path:"/Cart",
            element:<Cart/>
        },  
       
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>
        }   
    ],
    errorElement:<Error/>

},])
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter}/>)


}
export default App