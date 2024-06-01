import {useState,useEffect} from 'react';
import axios from 'axios';
const REACT_APP_GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;    


const url = `https://api.giphy.com/v1/gifs/random?api_key=${REACT_APP_GIPHY_API_KEY}`;
function UseGiffy(tag){
    const [gif,setgif] = useState('');
    const [loading,setloading] = useState(false);    
    async function fetchData(tag){
        setloading(true);
        const data = await axios.get(tag?(`${url}&tag=${tag}`):(url));
        console.log(data);
        const imageSource = data.data.data.images.downsized_large.url;
        console.log(imageSource);
        setgif(imageSource);
        setloading(false);
    }
    useEffect(()=>{
        fetchData('car');
    },[]);
    return {gif,loading,fetchData}; 
    // fetchData();
    
}
export default UseGiffy;