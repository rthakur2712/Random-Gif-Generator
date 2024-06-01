import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import UseGiffy from "./UseGiffy";

function Tag(){  
    const [tag,settag] = useState('car');
    const {gif,loading,fetchData} = UseGiffy(tag);

    return(
        <div className="w-1/2  bg-blue-500 flex flex-col items-center justify-evenly rounded-lg mb-[50px] border-2 border-black" >
            <h1 className="text-2xl underline font-bold mt-[15px]" >RANDOM {tag} GIF</h1>
            {loading ?(<Spinner/>):( <img src={gif} alt="Random Gif" />)}   
            <input
            onChange={(event)=>settag(event.target.value)}
            value={tag}
            name="tag"
            placeholder="Enter a tag"
            className="bg-white bg-opacity-100 px-10 py-1 w-10/12 text-black mb-[0px] mt-[15px] text-center rounded-lg"
            /> 
            <button onClick={()=>fetchData(tag)} className="bg-white bg-opacity-70 px-10 py-1 w-10/12 hover:bg-opacity-100 text-black
            transition-all duration-50 text-[15px] rounded-lg font-bold mb-[20px] mt-[15px] "> GENERATE </button>
        </div>
    );
}
export default Tag;