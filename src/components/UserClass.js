import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props) 
    this.state={
        userInfo:{
      name:"dummy",
      location:"Default",
        }
    }
    // console.log(this.props.name+"Child Constructor")

  }
    async componentDidMount() {
      // console.log(this.props.name+"Child Compound Did Mount")
      const data=await fetch("https://api.github.com/users/DeveloperYasmin");
      const json=await data.json();
      // console.log(json);
      this.setState({
        userInfo:json,
      });
    }

    componentDidUpdate(){
    }
    componentWillUnmount(){
    }

   render(){
    // console.log(this.props.name+"Child Render")

    const{ name, id,avatar_url}=this.state.userInfo;
    return(
        <div>
            <img className="h-12" src={avatar_url} />
            <h1>Name:{name}</h1>
            <h1>ID:{id}</h1>
    </div>
    )
   }}

   export default UserClass