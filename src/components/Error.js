import { useRouteError } from "react-router-dom"

const Error=()=>
{
    const err=useRouteError();
    console.log(err)
    return(
        <div className="bg-slate-300 h-[478px] font-serif">
            <h1>OOps!!! Something went Wrong😐😐😐🤐</h1>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}

export default Error