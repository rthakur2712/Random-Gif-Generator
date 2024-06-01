import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import UseGiffy from "./UseGiffy";

const REACT_APP_GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random(){
    const {gif,loading,fetchData} = UseGiffy();
    return(
        <div className="w-1/2  bg-green-500 flex flex-col items-center  justify-evenly rounded-lg mb-[50px] border-2 border-black" >
            <h1 className="text-2xl underline font-bold mt-[15px]" >A RANDOM GIF</h1>
            {loading ?(<Spinner/>):( <img src={gif} alt="Random Gif" />)}    
            <button onClick={()=>fetchData()} className="bg-white bg-opacity-70 px-10 py-1 w-10/12 hover:bg-opacity-100 text-black
            transition-all duration-50 text-[15px] rounded-lg font-bold mb-[20px] mt-[15px] " >GENERATE</button>
        </div>
    );
}
export default Random;