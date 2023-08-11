import { useEffect } from "react"
import { FETCH_RESTAURANT_DATA } from "./links";
import { useState } from "react";


const useGetResData=(id)=>{
        const [resData,setResData]=useState();
    const api=FETCH_RESTAURANT_DATA.replace("resid",id);
    useEffect(()=>{
       async function getResData(){
                try{
                    const response= await fetch(api);
                    const data=await response.json();
                    setResData(data);
                }
                catch(error){
                    console.log(error);
                }
        }
        getResData()
        
    },[])
    return resData;
}
export default useGetResData;