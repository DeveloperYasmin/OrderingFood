const Contact=()=>{
return(
    <div className="bg-red-300 pt-44 h-screen font-serif">
        <h1 className="text-center text-2xl">Hello Contact!!!</h1>
        <form className="font-bold text-lg">
            <input type="text" className=" flex border border-black p-2 m-2 rounded-md" placeholder="Enter your name"/>
            <input type="text" className=" flex border border-black p-2 m-2 rounded-md" placeholder="Enter your address"/>
            <button className="flex border border-black p-2 m-4 bg-gray-100 rounded-lg">Submit</button>       
            </form>
    </div>
)}

export default Contact