import { useState, useEffect } from "react";
const useGitHub=(username)=>
{
    const [user,setUser]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);

    useEffect(()=>
    {
        const fetchData=async()=>
        {
            setLoading(true);
            try
            {
                const res=await fetch(`https://api.github.com/users/${username}`);
                const resData=await res.json();
                setUser(resData);
                setLoading(false);
                console.log(resData);
            }
            catch(err)
            {
                setError(err);
                setLoading(false);
            }
        }

        fetchData();
    },[username]);

    return {user,loading,error};
}

export default useGitHub;