"use client"
import {  signInWithPopup } from "firebase/auth"
import { auth, provider } from "@/firebase"





export default function Page() {

    const joinUser = async()=>{

        try{

            const result  = await signInWithPopup(auth,provider)
            if(result)
            {
                const user = result.user ; 
                console.log("user id : ", user.uid)
            }
            



        }
        catch(error)
        {
            console.log("There is an error at join user function ", error)
        }
        
       

    }


    // useEffect(()=>{

    //     console.log("I am working")

    //     const fetchRedirectResult = async()=>{

    //         console.log("This function was called")

    //          const result = await getRedirectResult(auth)

    //          if(result)
    //          {
    //             const user = result.user ; 
    //             console.log("user id : ", user.uid)
    //          }
    //     }

    //     fetchRedirectResult()




    // },[])

   

    


    return <>

        <div>This is join the page app</div>
        <button onClick={()=>{joinUser()}}>Login with google </button>
    
    
    
    </>
}