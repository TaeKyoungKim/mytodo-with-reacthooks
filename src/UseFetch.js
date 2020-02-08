import {useState, useEffect} from 'react'

export const useFetch = (func , url )=>{
        const [loading , setLoading] = useState(false)
      
        const fetchInitialData = async ()=>{
          setLoading(true)
          var response = await fetch(url)
          var res = await response.json()
          await console.log(res)
          await func(res.data)  
          setLoading(false)
      
        }

        useEffect(()=>{
            fetchInitialData()
          },[])

          return loading
        }
        
