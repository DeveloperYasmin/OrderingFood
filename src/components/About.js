import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/Usercontext";

class About extends React.Component{
    constructor(props)
    {
    super(props)
    }
    componentDidMount() {
      }
   render()
   {
    return(
       <div className="bg-red-300 pt-44 h-screen font-serif bg-cover bg-no-repeat">
        <h1>Hello from About Class</h1>
        <UserContext.Consumer>
      {({loggedInUser})=>( <h1>{loggedInUser}</h1>)}


        </UserContext.Consumer>
        <UserClass name={"Yasmin"} location={"Mdu"}/>
        <User name={"Yasmin"} location={"Mdu"}/>
       </div>
   )}
}

export default About;
