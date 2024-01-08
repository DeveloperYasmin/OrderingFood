import ItemList from "./ItemList"

const RestCategory=({data,showitems,setshowindex,sethideindex})=>{

   const handleClick=()=>{
      {showitems==false?
      setshowindex():
      sethideindex()
      }
    }
return(
     <div  className= "w-8/12 relative rounded-xl bg-slate-100 my-4 shadow-xl p-6 hover:bg-gray-300">
        <div className= "flex justify-between cursor-pointer" onClick={handleClick}>
          
           <span className="font-serif font-bold text-lg">{data?.title} 
           ({data?.itemCards?
            data?.itemCards?.length:
            data?.categories[0]?.itemCards?.length
           
           })</span>
           <span>🔻</span>
           </div>
        {data?.itemCards?
       showitems && <ItemList items={data?.itemCards}/>:
       showitems && <ItemList items={data?.categories[0]?.itemCards}/>
      }
    </div>
)};

export default RestCategory