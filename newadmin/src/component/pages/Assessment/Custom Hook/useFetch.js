import { useState,useEffect } from "react";

const useFetch = (request) => 
{
    let [data,setData] = useState(null);

    let[loading,setLoading] = useState(true);

    let[error,setError] = useState(null)
   
    useEffect(()=>{

        setTimeout(()=>{
            fetch(request)
            .then((response)=>{
                if (response.ok===false) 
                {
                    throw Error("Data is not found,please try for another resourse")   
                }
                else
                {
                    return ( response.json() );
                }
            })
            .then((data)=>{ setData(data); setLoading(false); })
            .catch((error)=>{setError(error.message); setLoading(false);})

        },1000)
    },[])

    return {data,loading,error };
}
 
export default useFetch;