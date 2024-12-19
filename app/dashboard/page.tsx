"use client"
import { auth } from "@/firebase"
import { createCheckoutSession } from "@/stripe/createCheckoutSession"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"


export default function Page(){

    const [userId, setUserId] = useState<string>("")
    

    const handleCheckout = async()=>{

        


        await createCheckoutSession(userId, "price_1QXhR4SCiWlzYPouFT89JtqU")



    }

    useEffect(()=>{

        onAuthStateChanged(auth, (user)=>{
            if(user)
            {
                setUserId(user.uid)
            }
        })

    },[])


    return (<>

        <div>This is the dashboard</div>
        <button onClick={handleCheckout}> checkout </button>
    
    
    
    
    </>)
}