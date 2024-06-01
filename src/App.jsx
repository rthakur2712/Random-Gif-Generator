import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return(
    <div className="  flex flex-col background  items-center gap-y-5" >
      <h1 className="bg-white w-11/12 text-3xl font-bold py-3  mt-10 text-center rounded-md " >RANDOM GIFS</h1>
      <div className="w-full flex flex-col items-center gap-y-5" >
        <Random/>
        <Tag/>
      </div>
    </div>
  );  
}
